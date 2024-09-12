'use client';
import * as React from 'react';
import { FormControl, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

type heightSize = 'small' | 'medium';

export type AVariableInputProps = {
  type?: string;
  placeholder?: string;
  isInvisible?: boolean;
  width?: number;
  sx?: object;
  isMultiline?: boolean;
  inputHeightSize?: heightSize;
  initialValue?: string;
  onValueChange?: (value: string) => void;
};

const AVariableInput = ({
  type,
  placeholder,
  isInvisible = true,
  width = 4,
  sx,
  isMultiline = false,
  inputHeightSize = 'small',
  initialValue = '',
  onValueChange,
}: AVariableInputProps) => {
  const [isDisabled, setIsDisabled] = React.useState(isInvisible);
  const [inputWidth, setInputWidth] = React.useState(`${width * 8}px`);
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    const calculateWidth = () => {
      const padding = 1;
      const scrollWidth = value.length * 20; // 문자 길이에 따라 폭을 계산
      const newWidth = Math.max(width * 8, scrollWidth + padding);
      setInputWidth(`${newWidth}px`);
    };

    calculateWidth();
  }, [value, width]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  const toggleDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <FormControl sx={{ m: 1, width: inputWidth, ...sx }} variant="outlined" size={inputHeightSize}>
      <OutlinedInput
        type={type}
        value={value}
        sx={{ minWidth: '120px' }}
        onChange={handleChange}
        multiline={isMultiline}
        placeholder={placeholder}
        disabled={isDisabled}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle modify text" edge="end" onClick={toggleDisabled}>
              <DriveFileRenameOutlineIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default AVariableInput;
