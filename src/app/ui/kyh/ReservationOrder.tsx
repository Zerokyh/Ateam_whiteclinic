import ABasicInput from '@/conponents/atom/Input/Basic/ABasicInput';
import AText from '@/conponents/atom/Text/AText';
import ADatesSelector from '@/conponents/organism/Select/ADateSelector';
import AMonthSelector from '@/conponents/organism/Select/AMonthSelector';
import { Box } from '@mui/material';
import DateDropList from './DateDropList';

type ReservationOrderProps = {
  labeltext?: string;
};

const ReservationOrder = ({ labeltext }: ReservationOrderProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          width: 110,
          height: 57,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#F2F2F2',
          borderRight: '1px solid #7F7F7F',
          borderBottom: '1px solid #7F7F7F',
        }}
      >
        <AText text={labeltext} />
      </Box>
      <DateDropList />
    </Box>
  );
};

export default ReservationOrder;
