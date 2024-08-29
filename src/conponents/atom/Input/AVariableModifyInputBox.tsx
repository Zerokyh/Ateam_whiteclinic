'use client';
import * as React from 'react';
import { FormControl, IconButton, Input, InputAdornment } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

export type AVariableModifyInputBoxProp = {
  type?: 'text' | 'password';
  placeholder?: string;
  width?: number;
  sx?: object;
};

const AVariableModifyInputBox = ({
  type = 'text',
  placeholder = '직접수정',
  width = 4, // 최소 너비 (ch 단위)
  sx,
}: AVariableModifyInputBoxProp) => {
  const [isDisabled, setIsDisabled] = React.useState(true);
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

  return (
    <FormControl sx={{ m: 1, minWidth: `${width}ch`, ...sx }} variant="standard">
      <Input
        id="outlined-adornment-input"
        type={type}
        value={inputValue}
        onChange={handleInputChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle modify text" edge="end" onClick={handleChange}>
              <DriveFileRenameOutlineIcon />
            </IconButton>
          </InputAdornment>
        }
        placeholder={placeholder}
        disabled={isDisabled}
        inputRef={inputRef}
        sx={{ width: 'auto' }}
      />
    </FormControl>
  );
};

export default AVariableModifyInputBox;
