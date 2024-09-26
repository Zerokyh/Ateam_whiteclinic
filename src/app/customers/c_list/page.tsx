'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';

import { CustomerInfo, CustomerProps } from '@/constants/CustomerInfo';
import CenteredLayout from '@/styles/layout/CenterLayout';
import InfoCard from '@/components/atom/Card/GenericCard';

const Page = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerProps | null>(null);

  const handleCardClick = (customer: CustomerProps) => {
    setSelectedCustomer(customer);
  };

  const columns: GridColDef[] = [
    { field: 'name', headerName: '이름', width: 150 },
    { field: 'tel', headerName: '전화번호', width: 150 },
    { field: 'address', headerName: '주소', width: 250 },
    { field: 'info', headerName: '정보', width: 150 },
    { field: 'bookingDate', headerName: '예약일', width: 150 },
    { field: 'engineer', headerName: '엔지니어', width: 150 },
    { field: 'cleaning', headerName: '청소 유형', width: 150 },
  ];

  const rows = Object.entries(CustomerInfo).map(([key, customer]) => ({
    id: key, // 객체의 키를 id로 사용
    ...customer,
  }));

  return (
    <CenteredLayout>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        {Object.entries(CustomerInfo).map(([key, customer]) => (
          <InfoCard
            key={key}
            data={customer}
            type="customer"
            onClick={() => handleCardClick(customer)}
          />
        ))}
      </Box>

      <Box sx={{ height: 400, width: '80%', marginTop: '20px' }}>
        <h2>고객 정보</h2>
        <DataGrid
          rows={rows}
          columns={columns}
          disableRowSelectionOnClick
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
    </CenteredLayout>
  );
};

export default Page;
