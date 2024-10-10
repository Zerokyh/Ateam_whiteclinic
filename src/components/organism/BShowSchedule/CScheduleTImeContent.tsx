import { Box, Typography } from '@mui/material';
import { CScheduleTimeContentProps, StyledTimeContent } from './CShowScheduleDef';

const CScheduleTimeContent = ({ content }: CScheduleTimeContentProps) => {
  return (
    <Box sx={{ ...StyledTimeContent }}>
      <Typography variant="subtitle1" component="span">
        {content}
      </Typography>
    </Box>
  );
};

export default CScheduleTimeContent;
