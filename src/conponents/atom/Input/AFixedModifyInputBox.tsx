'use client';
import * as React from 'react';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

export type AFixedModifyInputBoxProp = {
  type?: 'text' | 'password';
  placeholder?: string;
  width?: string;
  sx?: object;
};

const AFixedModifyInputBox = ({
  type = 'text',
  placeholder = '제목',
  width = '16ch',
  sx,
}: AFixedModifyInputBoxProp) => {
  const [isDisabled, setIsDisabled] = React.useState(false);
  const handleChange = () => {
    setIsDisabled(!isDisabled);
  };
  return (
    <FormControl sx={{ m: 1, width: { width }, ...sx }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{placeholder}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={type}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle modify text" edge="end" onClick={handleChange}>
              <DriveFileRenameOutlineIcon />
            </IconButton>
          </InputAdornment>
        }
        label="Password"
        disabled={isDisabled}
      />
    </FormControl>
  );
};

export default AFixedModifyInputBox;
