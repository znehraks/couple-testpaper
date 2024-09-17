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
  maxLength?: number;
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
  maxLength = 20,
}: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);
  const previousTextRef = useRef(initialText.slice(0, maxLength));

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      onClick?.();
      if (isEditable && e.target === spanRef.current) {
        setIsEditing(true);
      }
    },
    [onClick, isEditable],
  );

  const handleBlur = useCallback(() => {
    setIsEditing(false);
    if (spanRef.current) {
      const newText = spanRef.current.innerText.trim().slice(0, maxLength);
      if (newText !== '') {
        onTextChange(newText);
        previousTextRef.current = newText;
      } else {
        spanRef.current.innerText = previousTextRef.current;
      }
    }
  }, [onTextChange, maxLength]);

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

  useEffect(() => {
    const newText = initialText.slice(0, maxLength);
    previousTextRef.current = newText;
    if (spanRef.current) {
      spanRef.current.innerText = newText;
    }
  }, [initialText, maxLength]);

  useEffect(() => {
    if (!spanRef.current) return;

    const observer = new MutationObserver(() => {
      const currentText = spanRef.current?.innerText || '';
      if (currentText.length > maxLength || currentText.trim() === '') {
        spanRef.current!.innerText = previousTextRef.current;
        const range = document.createRange();
        const sel = window.getSelection();
        range.setStart(spanRef.current!.childNodes[0], previousTextRef.current.length);
        range.collapse(true);
        sel?.removeAllRanges();
        sel?.addRange(range);
      } else {
        previousTextRef.current = currentText;
      }
    });

    observer.observe(spanRef.current, { childList: true, characterData: true, subtree: true });

    return () => observer.disconnect();
  }, [maxLength]);

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
      {previousTextRef.current}
    </TwinkleSpan>
  );
};
