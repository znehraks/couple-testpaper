import React, { useState, useRef, useCallback, useEffect } from 'react';

interface EditableTextProps {
  initialText: string;
  onTextChange: (newText: string) => void;
  isEditable: boolean;
}

export const EditableText = ({ initialText, onTextChange, isEditable }: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  const enableEditing = useCallback(() => {
    if (isEditable) {
      setIsEditing(true);
      setTimeout(() => {
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(spanRef.current!);
        range.collapse(false);
        sel?.removeAllRanges();
        sel?.addRange(range);
        spanRef.current?.focus();
      }, 0);
    }
  }, [isEditable]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (isEditable && e.target === spanRef.current) {
        enableEditing();
      }
    },
    [isEditable, enableEditing],
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
    <span
      ref={spanRef}
      contentEditable={isEditing}
      onClick={handleClick}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      style={{
        padding: '0 8px',
        maxWidth: 'fit-content',
        cursor: isEditable ? 'pointer' : 'default',
      }}
    >
      {initialText}
    </span>
  );
};
