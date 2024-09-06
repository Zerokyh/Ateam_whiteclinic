'use client';

import ADropdownBox from '@/conponents/atom/DropdownBox/ADropdownBox';
import { Percentage } from '@/constants/Percentage';
import { SelectChangeEvent } from '@mui/material';

type APercentProps = {
  value: string;
  onChange: (value: string) => void;
};

const APercent = ({ value, onChange }: APercentProps) => {
  const PercentOption = Percentage.map((per) => ({ text: per, value: per }));

  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value as string);
  };

  return (
    <ADropdownBox label="수당률" options={PercentOption} value={value} onChange={handleChange} />
  );
};

export default APercent;
