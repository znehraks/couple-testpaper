import { useState } from 'react';

export const useInput = ({ name, initialValue }: { name: string; initialValue: string }) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsDirty(true);
  };
  return {
    value,
    onChange,
    name,
    isDirty,
  };
};
