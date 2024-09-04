import AText from '@/conponents/atom/Text/AText';
import { Box } from '@mui/material';
import DateDropList from './DateDropList';

type LabelDateProps = {
  labeltext?: string;
  borderBottom?: string;
  borderRight?: string;
};

const LabelDate = ({
  labeltext,
  borderBottom = '1px solid #7F7F7F', // border 제거 : '0'
  borderRight = '1px solid #7F7F7F', // border 제거 : '0'
}: LabelDateProps) => {
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
          borderRight: { borderRight },
          borderBottom: { borderBottom },
        }}
      >
        <AText text={labeltext} />
      </Box>
      <DateDropList />
    </Box>
  );
};

export default LabelDate;
