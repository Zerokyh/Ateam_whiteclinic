'use client';
import * as React from 'react';
import { FormControl, Input, InputAdornment, IconButton } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

type FStandardInputProps = {
  type?: string;
  placeholder?: string;
  isInvisible?: boolean;
  width?: number;
  sx?: object;
  isMultiline?: boolean;
};

const FStandardInput = ({
  type,
  placeholder,
  isInvisible,
  width,
  sx,
  isMultiline,
}: FStandardInputProps) => {
  const [isDisabled, setIsDisabled] = React.useState(isInvisible);
  const handleChange = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <FormControl sx={{ m: 1, width: `${width}px`, ...sx }} variant="standard">
      <Input
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

export default FStandardInput;
