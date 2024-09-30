import { TimeSlot } from '@/constants/timeSlots';
import { Box } from '@mui/material';

type DateInfoProps = {
  time?: TimeSlot;
  timeslotschedule?: string;
};

const DateInfo = ({ time, timeslotschedule }: DateInfoProps) => (
  <Box sx={{ display: 'flex', borderBottom: '1px solid #3F4D67' }}>
    <Box
      sx={{
        width: '140px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        borderRight: '1px solid #3F4D67',
        position: 'relative',
        left: 10,
      }}
    >
      {time}
    </Box>
    <Box
      sx={{ height: '40px', display: 'flex', alignItems: 'center', position: 'relative', left: 20 }}
    >
      {timeslotschedule}
    </Box>
  </Box>
);

export default DateInfo;
