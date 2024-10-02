'use client';

import CenteredLayout from '@/styles/layout/CenterLayout';
import ADataGrid from '@/components/molecules/datagrid/ADataGrid';
import { CustomerInfo } from '@/constants/CustomerInfo';
import AButton from '@/components/atom/Button/AButton';
import { Box } from '@mui/material';
import { customerColumns } from '@/constants/yh/ColumnData';

const Page = () => {
  const rows = Object.entries(CustomerInfo).map(([key, customer]) => ({
    id: key,
    ...customer,
  }));

  const customerDataProps = {
    rows,
    columns: customerColumns,
    title: `고객 정보`,
    height: 'auto',
    width: '80%',
  };

  return (
    <CenteredLayout>
      <Box sx={{ overflowY: 'auto' }}>
        <ADataGrid {...customerDataProps} />
        <AButton text="등록" />
      </Box>
    </CenteredLayout>
  );
};

export default Page;
