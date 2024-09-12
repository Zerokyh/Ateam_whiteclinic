import ADropdown from '@/components/atom/DropdownBox/ADropdown';
import { airConditionerCategories } from '@/constants/productCategory';

const AirConditionerSelector = () => {
  const AirConditionerOption = airConditionerCategories.map((option) => ({
    text: option,
    value: option,
  }));

  return <ADropdown label="에어컨" options={AirConditionerOption} />;
};

export default AirConditionerSelector;
