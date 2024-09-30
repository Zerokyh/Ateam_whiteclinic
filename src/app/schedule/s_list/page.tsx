'use client';

import * as React from 'react';
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import { CustomerInfo } from '@/constants/CustomerInfo';
import CenteredLayout from '@/styles/layout/CenterLayout';

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: '고객성함',
    width: 110,
  },
  {
    field: 'tel',
    headerName: '연락처',
    width: 150,
  },
  {
    field: 'address',
    headerName: '주소',
    width: 500,
  },
  {
    field: 'info',
    headerName: '결제정보',
    width: 150,
  },
  {
    field: 'bookingDate',
    headerName: '예약일',
    width: 100,
  },
  {
    field: 'engineer',
    headerName: '엔지니어',
    width: 110,
  },
  {
    field: 'cleaning',
    headerName: '청소유형',
    width: 150,
  },
];

// 더미 - DB와 맞춰야함
const rows = Object.entries(CustomerInfo).map(([key, customer]) => ({
  id: key, // 객체의 키를 id로 사용
  ...customer,
}));

const Page = () => {
  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 4,
    maxColumns: 19,
  });

  return (
    <CenteredLayout>
      <Box sx={{ width: '78%', height: 50 }}>
        <Typography variant="h5">스케줄 보기</Typography>
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        loading={loading}
        slots={{ toolbar: GridToolbar }}
      />
    </CenteredLayout>
  );
};

export default Page;
