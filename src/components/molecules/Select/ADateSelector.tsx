import ADropdownBox from '@/components/atom/DropdownBox/ADropdownBox';
import { selectDate } from '@/constants/Dates';

const ADatesSelector = () => {
  const DatesOption = selectDate.map((date) => ({ text: date, value: date }));

  return <ADropdownBox label="일" options={DatesOption} width="xlarge" />;
};

export default ADatesSelector;
