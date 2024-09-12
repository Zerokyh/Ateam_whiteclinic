import ADropdown from '@/components/atom/DropdownBox/ADropdown';
import { Payment } from '@/constants/Payment';

const APayment = () => {
  const PayOption = Payment.map((pay) => ({ text: pay, value: pay }));

  return <ADropdown label="선택" options={PayOption} width="medium" />;
};

export default APayment;
