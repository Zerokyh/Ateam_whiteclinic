import * as React from 'react';
import AFixedInput from '@/components/atom/Input/FixedInput/AFixedInput';
import { TimeSlot } from '@/constants/timeSlots';
import { Box } from '@mui/material';

type DateInfoProps = {
  time?: TimeSlot;
  timeslotschedule?: string;
};

const DateInfo = ({ time, timeslotschedule }: DateInfoProps) => {
  const [inputValue, setInputValue] = React.useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    console.log(inputValue);
  };

  return (
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
        sx={{
          width: '100%',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          left: 20,
        }}
      >
        {/* {timeslotschedule} */}
        <AFixedInput value={inputValue} onChange={handleInputChange} />
      </Box>
    </Box>
  );
};

export default DateInfo;
