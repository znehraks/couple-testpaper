import { useCallback, useState } from 'react';

export const useInput = ({ name, initialValue }: { name: string; initialValue: string }) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsDirty(true);
  }, []);

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return {
    value,
    onChange,
    name,
    isDirty,
    isFocused,
    onFocus,
    onBlur,
  };
};
