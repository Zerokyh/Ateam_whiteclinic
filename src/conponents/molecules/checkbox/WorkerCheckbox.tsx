'use client';

import ACheckbox from '@/conponents/atom/CheckBox/ACheckbox';
import { WORKERS } from '@/constants/Workers';
import { colors } from '@/styles/colors';
import { Box } from '@mui/material';
import { useState } from 'react';

const WorkerCheckbox = () => {
  const [checkedWorkers, setCheckedWorkers] = useState<{ [key: string]: boolean }>({});

  const handleCheckboxChange = (worker: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setCheckedWorkers((prev) => ({
      ...prev,
      [worker]: isChecked,
    }));
    console.log(`${worker}가 ${isChecked ? '체크' : '체크해제'}되었습니다.`);
  };

  return (
    <Box sx={{ display: 'flex', gap: 1, backgroundColor: colors.background.drawer }}>
      {WORKERS.map((worker) => (
        <ACheckbox
          key={worker}
          isCheck={checkedWorkers[worker] || false}
          onChange={handleCheckboxChange(worker)}
          textprops={{
            text: worker,
          }}
        />
      ))}
    </Box>
  );
};

export default WorkerCheckbox;
