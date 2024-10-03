'use client';
import * as React from 'react';
import { useState } from 'react';
import '../../../styles/global.css';
import { Box, Typography } from '@mui/material';
import { formatDate } from '@/util/dateUtil';
import ScheduleInfo from '@/components/organism/Schedule/ScheduleInfo';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import { sizes } from '@/styles/sizes';
import ADatePicker from '@/components/atom/Calendar/ADatePicker';
import AButton from '@/components/atom/Button/AButton';

// 일정 등록
const registeredDates = [new Date('2024-09-01')];
const engineers = ['김의덕', '이몽룡', '강철'];

const isRegisteredDate = (date: Date | null) => {
  if (!date) return false;
  return registeredDates.some(
    (registeredDate) => date.toDateString() === registeredDate.toDateString()
  );
};

const containerStyle = {
  width: 'calc(100vw - 240px)',
  height: 'calc(100vh - 65px)',
  display: 'flex',
  flexDirection: 'column',
  bgcolor: '#f2f2f2',
};

const scheduleInfoContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  overflowY: 'auto',
};

const dateDisplayStyle = {
  width: '100%',
  minHeight: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#3F4D67',
  fontSize: sizes.fontSize.large,
  fontWeight: 800,
};

const Page = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue ? newValue.toDate() : null);
  };

  const displayDate = selectedDate ? formatDate(selectedDate) : '';
  const displayDayOfWeek = selectedDate
    ? selectedDate.toLocaleDateString('ko-KR', { weekday: 'long' })
    : '';

  return (
    <Box sx={containerStyle}>
      <Box>
        <Typography variant="h5">스케줄 추가</Typography>
      </Box>
      <Box sx={{ p: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
        <ADatePicker
          label="날짜 선택"
          value={selectedDate ? dayjs(selectedDate) : null}
          onChange={handleDateChange}
        />
        <AButton text="수정" variant="contained" color="primary" />
      </Box>
      <Box sx={scheduleInfoContainerStyle}>
        <Box sx={dateDisplayStyle}>
          {displayDate} {displayDayOfWeek}
        </Box>
        {isRegisteredDate(selectedDate) &&
          engineers.map((engineer, index) => (
            <ScheduleInfo key={index} selectedDate={selectedDate} engineerName={engineer} />
          ))}
      </Box>
    </Box>
  );
};

export default Page;
