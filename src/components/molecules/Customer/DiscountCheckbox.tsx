'use client';

import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import ANumericInput, { ANumericInputProps } from '../input/ANumericInput';
import ACheckbox, { CheckboxProps } from '@/components/atom/CheckBox/ACheckbox';

export type DiscountCheckboxProps = {
  checkboxprops?: CheckboxProps;
  anumericInputprops?: ANumericInputProps;
};

const DiscountCheckbox = ({ checkboxprops, anumericInputprops }: DiscountCheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState<number>(0);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    console.log('체크박스 상태:', checked ? '체크됨' : '해제됨');
  };

  const handleInputChange = (value: string) => {
    const numericValue = Number(value);
    setInputValue(numericValue);
    console.log('입력된 숫자 값:', numericValue);
  };

  useEffect(() => {
    console.log('할인 적용 여부:', isChecked ? '적용됨' : '적용 해제됨');
    console.log('현재 입력된 금액:', inputValue, '원');
  }, [isChecked, inputValue]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <ACheckbox
        isChecked={isChecked}
        onChange={handleCheckboxChange}
        textprops={checkboxprops?.textprops}
      />

      <ANumericInput
        avariableinputprops={{
          isInvisible: false,
          onValueChange: handleInputChange, 
          initialValue: inputValue.toString(),
          ...anumericInputprops?.avariableinputprops,
        }}
        max={100000}
      />
    </Box>
  );
};

export default DiscountCheckbox;
