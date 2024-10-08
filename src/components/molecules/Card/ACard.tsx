import { CardContent } from '@mui/material';
import AText from '../../atom/Text/AText';
import { colors } from '@/styles/colors';

type ACardProps = {
  name: string;
  tel: string;
  address: string;
  available?: string;
  remark?: string;
  onClick: () => void;
};

const ACard = ({ name, tel, address, onClick }: ACardProps) => {
  return (
    <>
      <CardContent
        onClick={onClick}
        sx={{
          border: '1px solid black',
          width: '200px',
          height: 'auto',
          '&:hover': {
            cursor: 'pointer',
            backgroundColor: colors.background.drawer,
            color: 'white',
          },
          borderRadius: '20px',
        }}
      >
        <AText text={`이름: ${name}`} />
        <AText text={`연락처: ${tel}`} />
        <AText text={`거주지역: `} />
        <AText text={`${address}`} />
      </CardContent>
    </>
  );
};

export default ACard;
