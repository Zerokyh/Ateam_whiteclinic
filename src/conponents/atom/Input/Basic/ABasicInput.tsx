import TextField from '@mui/material/TextField';
import { ChangeEvent } from 'react';

type InputVariantType = 'outlined' | 'standard' | 'filled';

type ABasicInputProps = {
  label: string;
  variant: InputVariantType;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ABasicInput = ({ label, variant = 'standard', onChange }: ABasicInputProps) => {
  return (
    <>
      <TextField label={label} multiline maxRows={4} variant={variant} onChange={onChange} />
    </>
  );
};
export default ABasicInput;
