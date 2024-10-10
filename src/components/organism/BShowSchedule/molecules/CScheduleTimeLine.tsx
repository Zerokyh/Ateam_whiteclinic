import { Box, ThemeProvider } from '@mui/material';
import CEngineerTitle from './CEngineerTitle';
import { CScheduleTimeLineProps, StyledScheduleTimeline } from '../ts/CShowScheduleDef';
import { theme } from '../ts/theme';
import CScheduleTimeMapping from './CScheduleTimeMapping';

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
