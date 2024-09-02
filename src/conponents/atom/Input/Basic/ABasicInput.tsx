import TextField from '@mui/material/TextField';
import { ChangeEvent } from 'react';

type InputVariantType = 'outlined' | 'standard' | 'filled';

type ABasicInputProps = {
  label: string;
  variant: InputVariantType;
  width?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ABasicInput = ({
  label,
  variant = 'standard',
  width = '120px',
  onChange,
}: ABasicInputProps) => {
  return (
    <>
      <TextField
        label={label}
        multiline
        maxRows={4}
        variant={variant}
        sx={{ width: width }}
        size="small"
        onChange={onChange}
      />
    </>
  );
};
export default ABasicInput;
