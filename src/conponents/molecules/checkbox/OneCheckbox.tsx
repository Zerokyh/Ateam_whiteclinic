'use client';

import ACheckbox, { CheckboxProps } from '@/conponents/atom/CheckBox/ACheckbox';
import { Box } from '@mui/material';
import React, { useState } from 'react';

export type CheckboxGroupProps = {
  checkboxes: { [key: string | number]: CheckboxProps };
};

const OneCheckbox = ({ checkboxes }: CheckboxGroupProps) => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const handleChange = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newKey = event.target.checked ? key : null;
    setSelectedKey(newKey);

    // 콘솔에 선택된 항목의 키와 라벨 출력
    if (newKey !== null) {
      const selectedCheckbox = checkboxes[newKey]; // 선택된 체크박스 데이터 가져오기
      console.log(`선택된 항목: ${selectedCheckbox.textprops?.text}`);
    } else {
      console.log('선택된 항목이 해제되었습니다.');
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {Object.entries(checkboxes).map(([key, checkboxProps]) => (
        <ACheckbox
          key={key}
          isCheck={selectedKey === key}
          onChange={handleChange(key)}
          textprops={checkboxProps.textprops}
        />
      ))}
    </Box>
  );
};

export default OneCheckbox;
