import ADropdown from '@/components/atom/DropdownBox/ADropdown';
import { selectDate } from '@/constants/Dates';

const ADatesSelector = () => {
  const DatesOption = selectDate.map((date) => ({ text: date, value: date }));

  return <ADropdown label="일" options={DatesOption} />;
};

export default ADatesSelector;
