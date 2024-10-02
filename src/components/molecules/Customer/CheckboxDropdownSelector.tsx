'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';
import OneCheckbox, { OneCheckboxProps } from '../checkbox/OneCheckbox';
import ADropdown, { ADropdownProps } from '@/components/atom/DropdownBox/ADropdown';
import { productCategories } from '@/constants/productCategory';
import { SelectChangeEvent } from '@mui/material';
import AVariableInput from '@/components/atom/Input/VariableInput/AVariableInput'; // Variable Input Import

export type CheckboxDropdownSelectorProps = {
  onecheckboxprops: OneCheckboxProps;
  dropdownprops?: ADropdownProps;
};

const CheckboxDropdownSelector = ({
  onecheckboxprops,
  dropdownprops,
}: CheckboxDropdownSelectorProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedDropdownValue, setSelectedDropdownValue] = useState<string>('');
  const [customInputValue, setCustomInputValue] = useState<string>('');

  const handleCheckboxChange = (key: string) => {
    console.log(`체크박스 선택: ${key}`);
    setSelectedCategory(key);
    setSelectedDropdownValue('');
  };

  const handleDropdownChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value;
    console.log(`드롭다운 선택: ${newValue}`);
    setSelectedDropdownValue(newValue);
  };

  const handleCustomInputChange = (value: string) => {
    console.log(`Input: ${value}`);
    setCustomInputValue(value);
  };

  const categoryKey = selectedCategory as keyof typeof productCategories;
  const categoryData = productCategories[categoryKey];

  const dropdownOptions: ADropdownProps['options'] = categoryData
    ? categoryData.categories.map((product) => ({
        value: product.category,
        text: product.category,
      }))
    : [];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <OneCheckbox {...onecheckboxprops} onChange={handleCheckboxChange} value={selectedCategory} />

      <ADropdown
        label={dropdownprops?.label}
        value={selectedDropdownValue}
        options={dropdownOptions}
        width="xlarge"
        onChange={handleDropdownChange}
      />

      {(selectedDropdownValue === '스탠드' || selectedDropdownValue === '투인원') && (
        <AVariableInput
          placeholder="세부 사항 입력"
          isInvisible={false}
          initialValue={customInputValue}
          onValueChange={handleCustomInputChange}
        />
      )}
    </Box>
  );
};

export default CheckboxDropdownSelector;
