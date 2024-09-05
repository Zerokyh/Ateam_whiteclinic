'use client';

import ACustomButton from '@/conponents/atom/Button/ACustomButton';
import WorkerCheckbox from '@/conponents/molecules/checkbox/WorkerCheckbox';
import AVariableModifyInputBox from '@/conponents/molecules/Input/AVariableModifyInputBox';
import ADaySelector from '@/conponents/molecules/Select/ADaySelector';
import APercent from '@/conponents/molecules/Select/APercent';
import LabelBox from '@/conponents/organism/yh/LabelBox';
import Table from '@/conponents/organism/yh/Table';
import { Box } from '@mui/material';
import { useState } from 'react';

const Page = () => {
  const [wage, setWage] = useState([
    { date: '6월 1일', amount: 100000 },
    { date: '6월 2일', amount: 100000 },
    { date: '6월 3일', amount: 50000 },
    { date: '6월 4일', amount: 100000 },
    { date: '6월 5일', amount: 100000 },
    { date: '6월 6일', amount: 100000 },
  ]);

  const [wageRate, setWageRate] = useState('0%');
  const [paymentDay, setPaymentDay] = useState('');

  let totalWage = 0;
  wage.forEach((wage) => {
    totalWage += wage.amount;
  });
  const [manualWageAmount, setManualWageAmount] = useState<number | null>(null);

  const handleWageAmountChange = (newAmount: number) => {
    setManualWageAmount(newAmount);
  };
  const wageAmount =
    manualWageAmount !== null ? manualWageAmount : totalWage * (parseInt(wageRate) / 100);
  const handleWageRateChange = (newRate: string) => {
    setWageRate(newRate);
  };

  const handlePaymentDayChange = (newDay: string) => {
    setPaymentDay(newDay);
  };

  return (
    <>
      <Box
        sx={{
          height: 'calc(100vh - 112px)',
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
            gap: '20px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <LabelBox text="기사성함">
              <AVariableModifyInputBox placeholder="직접입력" />
            </LabelBox>
            <LabelBox text="수당률">
              <APercent value={wageRate} onChange={handleWageRateChange} />
            </LabelBox>
            <LabelBox text="급여요일">
              <ADaySelector value={paymentDay} onChange={handlePaymentDayChange} />
            </LabelBox>

            <Box
              sx={{
                width: '502px',
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ACustomButton
                text="취소"
                color="default"
                variant="contained"
                sx={{ width: '100%' }}
              />
              <ACustomButton
                text="등록"
                color="primary"
                variant="contained"
                sx={{ width: '100%' }}
              />
            </Box>
          </Box>
        </Box>
        <WorkerCheckbox />
        <Table
          wage={wage}
          totalWage={totalWage}
          wageRate={wageRate}
          paymentDay={paymentDay}
          wageAmount={wageAmount}
          onWageAmountChange={handleWageAmountChange}
        />
      </Box>
    </>
  );
};
export default Page;
