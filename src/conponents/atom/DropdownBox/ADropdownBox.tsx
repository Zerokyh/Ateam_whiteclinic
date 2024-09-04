'use client';

import { selectDate } from '@/constants/Dates';
import { Days } from '@/constants/Days';
import { Months } from '@/constants/Months';
import { Percentage } from '@/constants/Percentage';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

type AllowedObjects =
  // | (typeof AvailableThings)[number] // 상수 객체의 키들을 유니온타입으로 만들기때문에
  | (typeof Days)[number] // [number] 배열의 요소타입을 추출하기위해 사용
  | (typeof selectDate)[number] //
  | (typeof Months)[number]
  | (typeof Percentage)[number];
// | (typeof PaymentPlan)[number];

type OptionsProps = {
  value: AllowedObjects;
  text: AllowedObjects;
};

type GenericDropdownBoxProps = {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: OptionsProps[];
};

const ADropdownBox = ({ label, options, onChange }: GenericDropdownBoxProps) => {
  return (
    <Box
      sx={{
        maxWidth: 120,
        minWidth: 120,
      }}
    >
      <FormControl fullWidth size="small">
        <InputLabel id={`${label}-simple-select-label`}>{label}</InputLabel>
        <Select
          labelId={`${label}-simple-select-label`}
          id={`${label}-simple-select`}
          label={label}
          onChange={onChange}
        >
          {options.map((option) => (
            <MenuItem key={String(option.value)} value={String(option.value)}>
              {String(option.text)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ADropdownBox;
