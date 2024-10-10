import CScheduleTimeLine from './CScheduleTimeLine';
import { Box } from '@mui/material';
import { CScheduleTimeLineListProps, filterOrdersForEngineer } from './CShowScheduleDef';

const CScheduleTimeLineList = ({
  selectDate,
  engineers,
  orderInfo,
}: CScheduleTimeLineListProps) => {
  if (!engineers) {
    return <div></div>;
  }

  console.log('timeLineLIstData:', selectDate, engineers, orderInfo);
  return (
    <Box>
      {engineers.map((engineer, i) => {
        // console.log('엔지티어 이름과 예약 정보:', engineer.engineerName, filteredOrderInfo);
        return (
          <CScheduleTimeLine
            key={i}
            engineerName={engineer.engineerName}
            selectDate={selectDate}
            orderInfo={filterOrdersForEngineer(orderInfo, engineer.engineerName, selectDate)}
          />
        );
      })}
    </Box>
  );
};

export default CScheduleTimeLineList;
