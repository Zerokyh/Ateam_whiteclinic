'use client';

import ModalButton from '@/components/molecules/Customer/ModalButton';
import InfoForm from '@/components/molecules/Form/InfoForm';
import { salesInfoFormData } from '@/constants/salesInfoFormData';
import { Box } from '@mui/material';

const SalesInfo = () => {

  return (
    <Box sx={{}}>
      <InfoForm titledformcontrolprops={salesInfoFormData} />
      <ModalButton
        leftButton={{ text: '취소', size: 'full' }}
        rightButton={{ text: '등록', color: 'primary', size: 'full' }}
      />
    </Box>
  );
};

export default SalesInfo;
