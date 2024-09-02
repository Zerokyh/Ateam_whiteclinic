import ADropdownBox from '@/conponents/atom/DropdownBox/ADropdownBox';
import { Payment } from '@/constants/Payment';

const APayment = () => {
  const PayOption = Payment.map((pay) => ({ text: pay, value: pay }));

  return <ADropdownBox label="선택" options={PayOption} />;
};

export default APayment;
