'use client';
import * as React from 'react';
import { FormControl, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

type heightSize = 'small' | 'medium';

export type AFixedInputProps = {
  type?: string;
  placeholder?: string;
  isInvisible?: boolean;
  width?: number;
  sx?: object;
  isMultiline?: boolean;
  inputHeightSize?: heightSize;
};

const AFixedInput = ({
  type,
  placeholder,
  isInvisible,
  width,
  sx,
  isMultiline,
  inputHeightSize = 'small',
}: AFixedInputProps) => {
  const [isDisabled, setIsDisabled] = React.useState(isInvisible);
  const handleChange = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <FormControl sx={{ width: `${width}px`, ...sx }} variant="outlined" size={inputHeightSize}>
      <OutlinedInput
        sx={{ minheight: '40px' }}
        type={type}
        placeholder={placeholder}
        disabled={isDisabled}
        multiline={isMultiline}
        maxRows={4}
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

export default AFixedInput;
