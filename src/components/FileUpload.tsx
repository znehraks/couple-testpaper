/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Button, Input } from './styles';

type FileUploadProps = {
  onFileUpload: (file: File) => void;
};

const FileUpload = ({ onFileUpload }: FileUploadProps) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div>
      <Input type="file" onChange={handleFileChange} />
      <Button onClick={handleUpload}>업로드 및 문제 생성</Button>
    </div>
  );
};

export default FileUpload;
