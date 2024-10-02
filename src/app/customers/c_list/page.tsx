'use client';

import React, { useState } from 'react';

import CenteredLayout from '@/styles/layout/CenterLayout';
import ADataGrid from '@/components/organism/yh/datagrid/ADataGrid';
import { GridColDef } from '@mui/x-data-grid';
import { CustomerInfo } from '@/constants/CustomerInfo';
import AButton from '@/components/atom/Button/AButton';
import { Box } from '@mui/material';
import AFooter from '@/components/organism/yh/datagrid/AFooter';
import ACheckbox from '@/components/atom/CheckBox/ACheckbox';

const Page = () => {
  const [isChecked, setIsChecked] = useState(false);

  const columns: GridColDef[] = [
    { field: 'name', headerName: '이름', width: 150 },
    { field: 'tel', headerName: '전화번호', width: 150 },
    { field: 'address', headerName: '주소', width: 250 },
    { field: 'info', headerName: '정보', width: 150 },
    { field: 'bookingDate', headerName: '예약일', width: 150 },
    { field: 'engineer', headerName: '엔지니어', width: 150 },
    { field: 'cleaning', headerName: '청소 유형', width: 150 },
    {
      field: 'bill',
      headerName: '영수증 발행',
      width: 150,
      renderCell: (params) => (
        <ACheckbox
          isChecked={params.value}
          onChange={() => {
            console.log(`클릭`);
          }}
          textprops={{ text: '' }} // 텍스트 없이 체크박스만 표시
        />
      ),
    },
    // 나중에 금액 관련 컬럼 추가
  ];

  const rows = Object.entries(CustomerInfo).map(([key, customer]) => ({
    id: key,
    ...customer,
  }));

  return (
    <CenteredLayout>
      <Box sx={{ overflowY: 'auto' }}>
        <ADataGrid rows={rows} columns={columns} title="고객 정보" height="auto" width="80%" />
        <AButton text="등록" />
      </Box>
    </CenteredLayout>
  );
};

export default Page;
