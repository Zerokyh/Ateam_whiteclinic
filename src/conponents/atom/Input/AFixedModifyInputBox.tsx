'use client';
import * as React from 'react';
import {
  FilledInput,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

export type AFixedModifyInputBoxProp = {
  type?: 'text' | 'password';
  placeholder?: string;
  isInvisible?: boolean;
  width?: number;
  sx?: object;
  isMultiline?: boolean;
  inputVariant?: 'outlined' | 'standard' | 'filled';
};

const AFixedModifyInputBox = ({
  type = 'text',
  placeholder,
  isInvisible = true,
  width = 160,
  sx,
  isMultiline = false,
  inputVariant = 'outlined',
}: AFixedModifyInputBoxProp) => {
  const [isDisabled, setIsDisabled] = React.useState(isInvisible);
  const handleChange = () => {
    setIsDisabled(!isDisabled);
  };
  const inputProps = {
    type,
    endAdornment: (
      <InputAdornment position="end">
        <IconButton aria-label="toggle modify text" edge="end" onClick={handleChange}>
          <DriveFileRenameOutlineIcon />
        </IconButton>
      </InputAdornment>
    ),
    multiline: isMultiline,
    placeholder,
    disabled: isDisabled,
  };
  return (
    <FormControl sx={{ m: 1, width: `${width}px`, ...sx }} variant={inputVariant}>
      {(inputVariant === 'outlined' || inputVariant === 'filled') && (
        <InputLabel>{placeholder}</InputLabel>
      )}
      {inputVariant === 'outlined' && <OutlinedInput {...inputProps} />}
      {inputVariant === 'filled' && <FilledInput {...inputProps} />}
      {inputVariant === 'standard' && <Input {...inputProps} />}
    </FormControl>
  );
};

export default AFixedModifyInputBox;
