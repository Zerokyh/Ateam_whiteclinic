import { Box, ThemeProvider } from '@mui/material';
import CEngineerTitle from './CEngineerTitle';
import CScheduleTimeMapping from './CScheduleTimeMapping';
import { Dayjs } from 'dayjs';

import { CScheduleTimeLineProps, StyledScheduleTimeline } from './CShowScheduleDef';
import { theme } from './theme';

const CScheduleTimeLine = ({ engineerName, selectDate, orderInfo }: CScheduleTimeLineProps) => {
  console.log('timeLineData:', engineerName, selectDate, orderInfo);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ ...StyledScheduleTimeline }}>
        <CEngineerTitle engineerName={engineerName} />
        <CScheduleTimeMapping selectDate={selectDate} orderInfo={orderInfo} />
      </Box>
    </ThemeProvider>
  );
};

export default CScheduleTimeLine;
