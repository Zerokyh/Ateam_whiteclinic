import TwoButtons from '@/components/molecules/Button/TwoButton';
import InfoForm from '@/components/molecules/Form/InfoForm';
import { customerInfoFormData } from '@/constants/customerInfoFormData';
import { Box } from '@mui/material';

const CustomerInfo = () => {
  return (
    <Box>
      <InfoForm titledformcontrolprops={customerInfoFormData} />
      <TwoButtons
        leftButton={{ text: '취소', size: 'full' }}
        rightButton={{ text: '등록', color: 'primary', size: 'full' }}
      />
    </Box>
  );
};

export default CustomerInfo;
