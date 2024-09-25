import { Box } from '@mui/material';
import CustomerInfo from './CustomerInfo';
import SalesInfo from './SalesInfo';

const CustomerRegister = () => {
  return (
    <Box sx={{ display: 'flex', gap: '100px' }}>
      <CustomerInfo />
      <SalesInfo />
    </Box>
  );
};

export default CustomerRegister;
