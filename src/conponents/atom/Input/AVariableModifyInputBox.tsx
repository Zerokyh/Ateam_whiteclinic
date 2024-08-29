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

type InputTextType = {
  text?: string;
  password?: string;
};

type inputVariantType = {
  outlined?: string;
  standard?: string;
  filled?: string;
};

type AVariableModifyInputBoxProp = {
  type?: keyof InputTextType;
  placeholder?: string;
  isInvisible?: boolean;
  width?: number;
  height?: number;
  sx?: object;
  isMultiline?: boolean;
  inputVariant?: keyof inputVariantType;
};

const AVariableModifyInputBox = ({
  type = 'text',
  placeholder,
  isInvisible = true,
  width = 4, // 최소 너비 (ch 단위)
  sx,
  isMultiline = false,
  inputVariant = 'outlined',
}: AVariableModifyInputBoxProp) => {
  const [isDisabled, setIsDisabled] = React.useState(isInvisible);
  const [inputValue, setInputValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      const inputElement = inputRef.current;

      inputElement.style.width = '80px';

      const scrollWidth = inputElement.scrollWidth;
      const padding = 1;
      const newWidth = Math.max(width * 8, scrollWidth + padding);

      inputElement.style.width = `${newWidth}px`;
    }
  }, [inputValue, width]);

  const handleChange = () => {
    setIsDisabled(!isDisabled);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const inputProps = {
    type,
    value: inputValue,
    onChange: handleInputChange,
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
    inputRef,
  };
  return (
    <FormControl
      sx={{ m: 1, minWidth: typeof width === 'number' ? `${width}ch` : width, ...sx }}
      variant={inputVariant}
    >
      {(inputVariant === 'outlined' || inputVariant === 'filled') && (
        <InputLabel>{placeholder}</InputLabel>
      )}
      {inputVariant === 'outlined' && <OutlinedInput {...inputProps} />}
      {inputVariant === 'filled' && <FilledInput {...inputProps} />}
      {inputVariant === 'standard' && <Input {...inputProps} />}
    </FormControl>
  );
};

export default AVariableModifyInputBox;
