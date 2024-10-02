import ACheckbox from '@/components/atom/CheckBox/ACheckbox';
import { GridColDef } from '@mui/x-data-grid';

export const workerColumns: GridColDef[] = [
  { field: 'date', headerName: '날짜', width: 150 },
  { field: 'pay', headerName: '급여', width: 150, type: 'number' },
];

export const customerColumns: GridColDef[] = [
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
      />
    ),
  },
  // 나중에 금액 관련 컬럼 추가
];
