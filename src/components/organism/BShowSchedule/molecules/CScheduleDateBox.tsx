import { Box } from '@mui/material';
import CTitleContent from './CTitleContent';
import { Dayjs } from 'dayjs';
import { CScheduleDateBoxProps, StyledTitleBox, TODAY } from '../ts/CShowScheduleDef';

//날짜 제목 컴포넌트

const CScheduleDateBox = ({ dateInfo = TODAY }: CScheduleDateBoxProps) => {
  const formattedContent = () =>
    typeof dateInfo === 'string' || dateInfo === null
      ? dateInfo
      : dateInfo.format('YYYY년 MM월 DD일');
  return (
    <Box
      sx={{
        ...StyledTitleBox,
        backgroundColor: '#fff',
        color: '#007fff',
      }}
    >
      <CTitleContent variant="namebox" content={formattedContent()} />
    </Box>
  );
};

export default CScheduleDateBox;
