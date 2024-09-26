'use client';

import * as React from 'react';
import { FormControl, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { AVariableInputProps } from '@/components/atom/Input/VariableInput/AVariableInput';

export type ANumericInputProps = {
  avariableinputprops?: Omit<AVariableInputProps, 'type'>;
  type?: 'number';
  min?: number;
  max?: number;
};

const ANumericInput = ({
  avariableinputprops,
  type = 'number',
  min = 0,
  max,
}: ANumericInputProps) => {
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [inputWidth, setInputWidth] = React.useState('32px');
  const [value, setValue] = React.useState<number>(
    avariableinputprops?.initialValue ? Number(avariableinputprops.initialValue) : 0
  ); // 숫자 값으로 처리

  React.useEffect(() => {
    const calculateWidth = () => {
      const padding = 1;
      const scrollWidth = String(value).length * 20;
      const newWidth = Math.max(32, scrollWidth + padding);
      setInputWidth(`${newWidth}px`);
    };

    calculateWidth();
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value); // 입력값을 숫자로 변환

    if (
      !isNaN(newValue) &&
      (min === undefined || newValue >= min) &&
      (max === undefined || newValue <= max)
    ) {
      setValue(newValue);

      // 부모 컴포넌트로 숫자 값 전달
      if (avariableinputprops?.onValueChange) {
        avariableinputprops.onValueChange(newValue.toString()); // 문자열로 변환하여 전달
      }
    }
    console.log('change');
  };

  const toggleDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <FormControl sx={{ m: 1, width: inputWidth }} variant="outlined" size="small">
      <OutlinedInput
        type={type}
        value={value}
        sx={{ minWidth: '150px' }}
        onChange={handleChange}
        placeholder=""
        disabled={isDisabled}
        inputProps={{
          min,
          max,
        }}
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

export default ANumericInput;
