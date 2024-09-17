import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

interface EditableTextProps {
  initialText: string;
  onTextChange: (newText: string) => void;
  isEditable: boolean;
  isTwinkle?: boolean;
  onClick?: () => void;
}

const twinkleKeyframes = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0.5); }
  50% { box-shadow: 0 0 0 4px rgba(66, 153, 225, 0.5); }
  100% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0.5); }
`;

const TwinkleSpan = styled(motion.span)<{ $isTwinkle: boolean }>`
  display: inline-block;
  padding: 0 8px;
  max-width: fit-content;
  animation: ${(props) => (props.$isTwinkle ? twinkleKeyframes : 'none')} 2s infinite;
  border-radius: 4px;
`;

export const EditableText = ({
  initialText,
  onTextChange,
  isEditable,
  isTwinkle = false,
  onClick,
}: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  const enableEditing = useCallback(() => {
    if (isEditable) {
      setIsEditing(true);
    }
  }, [isEditable]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      onClick?.();
      if (isEditable && e.target === spanRef.current) {
        enableEditing();
      }
    },
    [onClick, isEditable, enableEditing],
  );

  const handleBlur = useCallback(() => {
    setIsEditing(false);
    if (spanRef.current) {
      onTextChange(spanRef.current.innerText);
    }
  }, [onTextChange]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      spanRef.current?.blur();
    }
  }, []);

  useEffect(() => {
    if (isEditing) {
      spanRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <TwinkleSpan
      ref={spanRef}
      contentEditable={isEditing}
      onClick={handleClick}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      $isTwinkle={isTwinkle}
      style={{
        cursor: isEditable ? 'pointer' : 'default',
      }}
    >
      {initialText}
    </TwinkleSpan>
  );
};
