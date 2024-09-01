import TextField from '@mui/material/TextField';
import { ChangeEvent } from 'react';

type InputVariantType = 'outlined' | 'standard' | 'filled';

type BasicInputProps = {
  label: string;
  variant: InputVariantType;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const BasicInput = ({ label, variant = 'standard', onChange }: BasicInputProps) => {
  return (
    <>
      <TextField label={label} multiline maxRows={4} variant={variant} onChange={onChange} />
    </>
  );
};
export default BasicInput;
