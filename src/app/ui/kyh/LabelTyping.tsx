import AText from '@/conponents/atom/Text/AText';
import AVariableModifyInputBox from '@/conponents/molecules/Input/AVariableModifyInputBox';
import { Box } from '@mui/material';

type LabelTypingProps = {
  labeltext: string;
};

const LabelTyping = ({ labeltext }: LabelTypingProps) => {
  return (
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
        <AText text={labeltext} />
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
  );
};

export default LabelTyping;
