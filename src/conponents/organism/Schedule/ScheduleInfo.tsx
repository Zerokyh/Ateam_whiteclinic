import { timeSlots } from '@/constants/timeSlots';
import { Box } from '@mui/material';
import DateInfo from '../../molecules/Schedule/DateInfo';
import { sizes } from '@/styles/sizes';

type ScheduleInfoProps = {
  selectedDate: Date | null;
  engineerName?: string;
};

const ScheduleInfo = ({ selectedDate, engineerName }: ScheduleInfoProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#3F4D67',
          color: 'white',
          fontSize: sizes.fontSize.large,
          fontWeight: 800,
        }}
      >
        {engineerName} 기사
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', py: 1 }}>
        {timeSlots.map((slot, index) => (
          <DateInfo key={index} time={slot} timeslotschedule={'일정 입력'} />
        ))}
      </Box>
    </Box>
  );
};

export default ScheduleInfo;
