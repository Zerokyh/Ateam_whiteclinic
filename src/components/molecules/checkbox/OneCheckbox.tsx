'use client';

import ACheckbox, { CheckboxProps } from '@/components/atom/CheckBox/ACheckbox';
import { Box } from '@mui/material';
import React, { useState } from 'react';

export type OneCheckboxProps = {
  checkboxes: { [key: string | number]: CheckboxProps };
  onChange?: (selectedKey: string) => void;
  value?: string;
};

const OneCheckbox = ({ checkboxes, onChange, value }: OneCheckboxProps) => {
  // 있으면 제어 컴포넌트로 동작하고, 없으면 내부 상태를 관리
  const isControlled = value !== undefined && onChange !== undefined;

  const [internalValue, setInternalValue] = useState<string>('');

  const selectedKey = isControlled ? value : internalValue;

  const handleCheckboxChange =
    (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked;
      const checkboxText = checkboxes[key].textprops?.text || 'Unknown';
      const statusText = isChecked ? '체크됨' : '해제됨';

      console.log(`${checkboxText} ${statusText}`);

      if (isControlled && onChange) {
        onChange(isChecked ? key : '');
      } else {
        setInternalValue(isChecked ? key : '');
      }
    };

  return (
    <Box sx={{ display: 'flex' }}>
      {Object.entries(checkboxes).map(([key, checkboxProps]) => (
        <ACheckbox
          key={key}
          isChecked={selectedKey === key}
          onChange={handleCheckboxChange(key)}
          textprops={checkboxProps.textprops}
        />
      ))}
    </Box>
  );
};

export default OneCheckbox;
