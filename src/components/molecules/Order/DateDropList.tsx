import AFixedInput from '@/components/atom/Input/FixedInput/AFixedInput';
import ADatesSelector from '@/components/molecules/Select/ADateSelector';
import AMonthSelector from '@/components/molecules/Select/AMonthSelector';

import { Box } from '@mui/material';

const DateDropList = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 57,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        borderBottom: '1px solid #7F7F7F',
      }}
    >
      <AFixedInput placeholder="년(4자)" width={140} />
      <AMonthSelector />
      <ADatesSelector />
    </Box>
  );
};

export default DateDropList;
