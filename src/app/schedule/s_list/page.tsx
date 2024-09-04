'use client';

import ACustomButton from '@/conponents/atom/Button/ACustomButton';
import ACheckbox from '@/conponents/atom/CheckBox/ACheckbox';
import AText from '@/conponents/atom/Text/AText';
import WorkerCheckbox from '@/conponents/molecules/checkbox/WorkerCheckbox';
import AVariableModifyInputBox from '@/conponents/molecules/Input/AVariableModifyInputBox';
import ADaySelector from '@/conponents/molecules/Select/ADaySelector';
import APercent from '@/conponents/molecules/Select/APercent';
import { Box } from '@mui/material';
import { useState } from 'react';

const Page = () => {
  const [wage, setWage] = useState([
    { date: '6월 1일', amount: 100000 },
    { date: '6월 2일', amount: 100000 },
    { date: '6월 3일', amount: 100000 },
    { date: '6월 4일', amount: 100000 },
    { date: '6월 5일', amount: 100000 },
    { date: '6월 6일', amount: 100000 },
  ]);

  const [allowanceRate, setAllowanceRate] = useState('0%');
  const [paymentDay, setPaymentDay] = useState('');

  let totalWage = 0;
  wage.forEach((wage) => {
    totalWage += wage.amount;
  });

  const allowanceAmount = totalWage * (parseInt(allowanceRate) / 100);
  const handleAllowanceRateChange = (newRate: string) => {
    setAllowanceRate(newRate);
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
        {' '}
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
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 110,
                  height: 56,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: '#F2F2F2',
                  borderRight: '1px solid #7F7F7F',
                  borderBottom: '1px solid #7F7F7F',
                }}
              >
                <AText text="기사 성함" />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  borderBottom: '1px solid #7F7F7F',
                  width: '392px',
                }}
              >
                <AVariableModifyInputBox placeholder="직접수정" isInvisible={false} />
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 110,
                  height: 56,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: '#F2F2F2',
                  borderRight: '1px solid #7F7F7F',
                  borderBottom: '1px solid #7F7F7F',
                }}
              >
                <AText text="수당률" />
              </Box>
              <Box
                sx={{
                  width: '392px',
                  height: 56,
                  display: 'flex',
                  borderBottom: '1px solid #7F7F7F',
                  p: 1,
                }}
              >
                <APercent value={allowanceRate} onChange={handleAllowanceRateChange} />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 110,
                  height: 56,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: '#F2F2F2',
                  borderRight: '1px solid #7F7F7F',
                  // borderBottom: "1px solid #7F7F7F",
                }}
              >
                <AText text="급여요일" />
              </Box>
              <Box
                sx={{
                  width: '392px',
                  height: 56,
                  display: 'flex',
                  // borderBottom: "1px solid #7F7F7F",
                  p: 1,
                  gap: 1,
                }}
              >
                <ADaySelector value={paymentDay} onChange={handlePaymentDayChange} />
              </Box>
            </Box>
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
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 2fr)',
            // flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #7F7F7F' }}>
              <Box
                sx={{
                  width: 110,
                  height: 56,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: '#F2F2F2',
                  borderRight: '1px solid #7F7F7F',
                }}
              >
                <AText text="6월 1일" />
              </Box>
              <Box
                sx={{
                  display: 'flex',

                  width: '250px',
                  paddingLeft: '10px',
                }}
              >
                <AText text="100000원" />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #7F7F7F' }}>
              <Box
                sx={{
                  width: 110,
                  height: 56,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: '#F2F2F2',
                  borderRight: '1px solid #7F7F7F',
                }}
              >
                <AText text="6월 2일" />
              </Box>
              <Box
                sx={{
                  display: 'flex',

                  width: '250px',
                  paddingLeft: '10px',
                }}
              >
                <AText text="100000원" />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #7F7F7F' }}>
              <Box
                sx={{
                  width: 110,
                  height: 56,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: '#F2F2F2',
                  borderRight: '1px solid #7F7F7F',
                }}
              >
                <AText text="6월 3일" />
              </Box>
              <Box
                sx={{
                  display: 'flex',

                  width: '250px',
                  paddingLeft: '10px',
                }}
              >
                <AText text="100000원" />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #7F7F7F' }}>
              <Box
                sx={{
                  width: 110,
                  height: 56,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: '#F2F2F2',
                  borderRight: '1px solid #7F7F7F',
                }}
              >
                <AText text="6월 4일" />
              </Box>
              <Box
                sx={{
                  display: 'flex',

                  width: '250px',
                  paddingLeft: '10px',
                }}
              >
                <AText text="100000원" />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #7F7F7F' }}>
              <Box
                sx={{
                  width: 110,
                  height: 56,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: '#F2F2F2',
                  borderRight: '1px solid #7F7F7F',
                }}
              >
                <AText text="6월 5일" />
              </Box>
              <Box
                sx={{
                  display: 'flex',

                  width: '250px',
                  paddingLeft: '10px',
                }}
              >
                <AText text="100000원" />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid #7F7F7F',
              }}
            >
              <Box
                sx={{
                  width: 110,
                  height: 56,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: '#F2F2F2',
                  borderRight: '1px solid #7F7F7F',
                }}
              >
                <AText text="6월 6일" />
              </Box>
              <Box
                sx={{
                  display: 'flex',

                  width: '250px',
                  paddingLeft: '10px',
                }}
              >
                <AText text="100000원" />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #7F7F7F' }}>
              <Box
                sx={{
                  width: 110,
                  height: 56,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: '#F2F2F2',
                  borderRight: '1px solid #7F7F7F',
                }}
              >
                <AText text="합계 수당" />
              </Box>
              <Box
                sx={{
                  display: 'flex',

                  width: '250px',
                  paddingLeft: '10px',
                }}
              >
                <AText text={`${totalWage}원`} />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #7F7F7F' }}>
              <Box
                sx={{
                  width: 110,
                  height: 56,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: '#F2F2F2',
                  borderRight: '1px solid #7F7F7F',
                }}
              >
                <AText text="수당률" />
              </Box>
              <Box
                sx={{
                  display: 'flex',

                  width: '250px',
                  paddingLeft: '10px',
                }}
              >
                <AText text={allowanceRate} />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #7F7F7F' }}>
              <Box
                sx={{
                  width: 110,
                  height: 56,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: '#F2F2F2',
                  borderRight: '1px solid #7F7F7F',
                }}
              >
                <AText text="수당금액" />
              </Box>
              <Box
                sx={{
                  display: 'flex',

                  width: '250px',
                  paddingLeft: '10px',
                }}
              >
                <AText text={`${allowanceAmount}원`} />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #7F7F7F' }}>
              <Box
                sx={{
                  width: 110,
                  height: 56,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: '#F2F2F2',
                  borderRight: '1px solid #7F7F7F',
                }}
              >
                <AText text="지급요일" />
              </Box>
              <Box
                sx={{
                  display: 'flex',

                  width: '250px',
                  paddingLeft: '10px',
                }}
              >
                <AText text={paymentDay} />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #7F7F7F' }}>
              <Box
                sx={{
                  width: 110,
                  height: 56,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: '#F2F2F2',
                  borderRight: '1px solid #7F7F7F',
                }}
              >
                <AText text="지급여부" />
              </Box>
              <Box
                sx={{
                  display: 'flex',

                  width: '250px',
                  paddingLeft: '10px',
                }}
              >
                <ACheckbox textprops={{ text: '지급완료' }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Page;
