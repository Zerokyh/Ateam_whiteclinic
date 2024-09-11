'use client';
import * as React from 'react';
import { FormControl, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

type heightSize = 'small' | 'medium';

type AVOutlinedInputProps = {
  type?: string;
  placeholder?: string;
  isInvisible?: boolean;
  width?: number;
  sx?: object;
  isMultiline?: boolean;
  inputHeightSize?: heightSize;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AVOutlinedInput = ({
  type,
  placeholder,
  isInvisible = true,
  width = 4,
  sx,
  isMultiline = false,
  inputHeightSize = 'small',
  value,
  onChange,
}: AVOutlinedInputProps) => {
  const [isDisabled, setIsDisabled] = React.useState(isInvisible);
  const [inputWidth, setInputWidth] = React.useState(`${width * 8}px`);

  React.useEffect(() => {
    const calculateWidth = () => {
      const padding = 1;
      const scrollWidth = value.length * 8; // 문자 길이에 따라 폭을 계산
      const newWidth = Math.max(width * 8, scrollWidth + padding);
      setInputWidth(`${newWidth}px`);
    };

    calculateWidth();
  }, [value, width]); // value가 바뀔 때마다 width를 재계산

  const handleChange = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <FormControl sx={{ m: 1, width: inputWidth, ...sx }} variant="outlined" size={inputHeightSize}>
      <OutlinedInput
        type={type}
        value={value}
        sx={{ minWidth: '120px' }}
        onChange={onChange}
        multiline={isMultiline}
        placeholder={placeholder}
        disabled={isDisabled}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle modify text" edge="end" onClick={handleChange}>
              <DriveFileRenameOutlineIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default AVOutlinedInput;
