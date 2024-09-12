import ADropdown from '@/components/atom/DropdownBox/ADropdown';
import { Months } from '@/constants/Months';

const AMonthSelector = () => {
  const MonthsOption = Months.map((month) => ({ text: month, value: month }));
  return <ADropdown label="월" options={MonthsOption} />;
};

export default AMonthSelector;
