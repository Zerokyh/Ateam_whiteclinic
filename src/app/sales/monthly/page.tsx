'use client';

import { useState } from 'react';
import '../../../styles/global.css';
import { Box } from '@mui/material';
import DateSelectBar from '@/app/ui/kyh/DateSelectBar';
import ScheduleInfo from '@/app/ui/kyh/ScheduleInfo';
import { formatDate } from '@/util/dateUtil';

// 일정 등록
const registeredDates = [new Date('2024-09-01')];

const isRegisteredDate = (date: Date | null) => {
  if (!date) return false;
  return registeredDates.some(
    (registeredDate) => date.toDateString() === registeredDate.toDateString()
  );
};

const Page = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const displayDate = selectedDate ? formatDate(selectedDate) : '';
  const displayDayOfWeek = selectedDate
    ? selectedDate.toLocaleDateString('ko-KR', { weekday: 'long' })
    : '';
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                width: 'calc(100vw - 240px)',
                height: 'calc(100vh - 73px)',
                display: 'flex',
                bgcolor: '#f2f2f2',
              }}
            >
              <DateSelectBar onSelectDate={setSelectedDate} />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: 'calc(100vh - 73px)',
                  overflowY: 'auto',
                  // overflowX: 'hidden',
                }}
              >
                <Box
                  sx={{
                    width: 'calc(100vw - 417px)',
                    minHeight: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: '#F2F2F2',
                    color: '#3F4D67',
                  }}
                >
                  {displayDate} {displayDayOfWeek}
                </Box>
                {isRegisteredDate(selectedDate) && (
                  <>
                    <ScheduleInfo selectedDate={selectedDate} engineerName="김의덕" />
                    <ScheduleInfo selectedDate={selectedDate} engineerName="이몽룡" />
                    <ScheduleInfo selectedDate={selectedDate} engineerName="강철" />
                  </>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
