'use client';
import * as React from 'react';
import { FormControl, OutlinedInput, InputAdornment, InputLabel, IconButton } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

type FOutLinedInputProps = {
  type?: string;
  placeholder?: string;
  isInvisible?: boolean;
  width?: number;
  sx?: object;
  isMultiline?: boolean;
};

const FOutLinedInput = ({
  type,
  placeholder,
  isInvisible,
  width,
  sx,
  isMultiline,
}: FOutLinedInputProps) => {
  const [isDisabled, setIsDisabled] = React.useState(isInvisible);
  const handleChange = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <FormControl sx={{ m: 1, width: `${width}px`, ...sx }} variant="outlined">
      <InputLabel>{placeholder}</InputLabel>
      <OutlinedInput
        type={type}
        placeholder={placeholder}
        disabled={isDisabled}
        multiline={isMultiline}
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

export default FOutLinedInput;
