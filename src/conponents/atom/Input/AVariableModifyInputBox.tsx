"use client";
import * as React from "react";
import { FormControl, IconButton, Input, InputAdornment } from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { VariableModifyInputBoxProp } from "@/app/util/VariableModifyInputType";
import useInputWidthCheck from "@/app/util/inputUseEffect";

const VariableModifyInputBox = ({
  type = "text",
  placeholder = "직접수정",
  width = 4, // 최소 너비 (ch 단위)
  sx,
}: VariableModifyInputBoxProp) => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  const { inputRef, inputValue, setInputValue } = useInputWidthCheck(width);

  const handleChange = () => {
    setIsDisabled(!isDisabled);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <FormControl
      sx={{ m: 1, minWidth: `${width}ch`, ...sx }}
      variant="standard"
    >
      <Input
        id="outlined-adornment-input"
        type={type}
        value={inputValue}
        onChange={handleInputChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle modify text"
              edge="end"
              onClick={handleChange}
            >
              <DriveFileRenameOutlineIcon />
            </IconButton>
          </InputAdornment>
        }
        placeholder={placeholder}
        disabled={isDisabled}
        inputRef={inputRef}
        sx={{ width: "auto" }}
      />
    </FormControl>
  );
};

export default VariableModifyInputBox;
