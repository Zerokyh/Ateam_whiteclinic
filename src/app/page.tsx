'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import ABasicInput from '@/conponents/atom/Input/Basic/ABasicInput';
import AText from '@/conponents/atom/Text/AText';
import ADatesSelector from '@/conponents/organism/Select/ADateSelector';
import AMonthSelector from '@/conponents/organism/Select/AMonthSelector';
import AVariableModifyInputBox from '@/conponents/molecules/Input/AVariableModifyInputBox';
import ACustomButton from '@/conponents/atom/Button/ACustomButton';
import ACheckbox from '@/conponents/atom/CheckBox/ACheckbox';
import ReservationOrder from './ui/kyh/ReservationOrder';

const Home = () => {
  return (
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
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <ReservationOrder labeltext="예약일시" />
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
              <AText text="고객성함" />
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
              <AText text="연락처" />
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
              <AText text="방문주소" />
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
              <AText text="특이사항" />
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
              <AText text="결제방식" />
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
              <AMonthSelector />
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
              <AText text="증빙서류" />
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
              <AMonthSelector />
              <ACheckbox textprops={{ text: '발행 완료' }} />
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
            <ACustomButton text="취소" color="default" variant="contained" sx={{ width: '100%' }} />
            <ACustomButton text="등록" color="primary" variant="contained" sx={{ width: '100%' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
