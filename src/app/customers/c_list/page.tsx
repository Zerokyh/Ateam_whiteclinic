import SalesInfoForm from '@/conponents/molecules/SalesForm/SalesInfoForm';
import { salesInfoFormData } from '@/constants/salesInfoFromData';
import { Box } from '@mui/material';

const Page = () => {
  return (
    <Box>
      <SalesInfoForm titledformcontrolprops={salesInfoFormData} />
    </Box>
  );
};

export default Page;
