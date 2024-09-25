'use client';

import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import ADatePicker, { ADatePickerProps } from '@/components/atom/Calendar/ADatePicker';
import AButton, { AButtonProps } from '@/components/atom/Button/AButton';

const HolidayRegistration = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [registeredHolidays, setRegisteredHolidays] = useState<Dayjs[]>([]);

  const handleDateChange: ADatePickerProps['onChange'] = (newValue) => {
    setSelectedDate(newValue);
  };

  const handleRegister: AButtonProps['onClick'] = () => {
    if (selectedDate) {
      const isDuplicate = registeredHolidays.some((date) => date.isSame(selectedDate, 'day'));
      if (isDuplicate) {
        alert('이미 등록된 날짜입니다.');
        return;
      }

      const newHolidays = [...registeredHolidays, selectedDate];
      newHolidays.sort((a, b) => a.valueOf() - b.valueOf());
      setRegisteredHolidays(newHolidays);
      setSelectedDate(null);
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center space-x-4 mb-4">
        <ADatePicker
          label="선택"
          value={selectedDate}
          onChange={handleDateChange}
          format="YYYY년 MM월 DD일"
          size="small"
        />
        <AButton
          text="등록"
          onClick={handleRegister}
          color="primary"
          size="small"
          variant="contained"
        />
      </div>

      <div className="mt-4">
        {registeredHolidays.map((holiday, index) => (
          <div key={index}>{holiday.format('YYYY년 MM월 DD일')}</div>
        ))}
      </div>
    </div>
  );
};

export default HolidayRegistration;
