import CustomerRegister from '@/components/organism/Customer/CustomerRegister';
import CenteredLayout from '@/styles/layout/CenterLayout';

const Page = () => {
  return <CenteredLayout children={<CustomerRegister />} />;
};

export default Page;
