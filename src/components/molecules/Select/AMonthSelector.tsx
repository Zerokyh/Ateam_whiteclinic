import ADropdown from '@/components/atom/DropdownBox/ADropdown';
import { MonthsOption } from '@/constants/Months';

const AMonthSelector = () => {
  const handleClick = () => {
    console.log('click');
  };

  return <ADropdown label="월" options={MonthsOption} onChange={handleClick} />;
};

export default AMonthSelector;
