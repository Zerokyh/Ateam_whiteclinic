import { CardContent } from '@mui/material';
import AText from '../../atom/Text/AText';

type ACardProps = {
  name: string;
  tel: string;
  address: string;
  available?: string;
  remark?: string;
  onClick: () => void;
};

const ACard = ({ name, tel, address, available, remark, onClick }: ACardProps) => {
  return (
    <>
      <CardContent
        onClick={onClick}
        sx={{
          border: '1px solid black',
          width: '215px',
          height: '215px',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      >
        <AText text={`이름: ${name}`} />
        <AText text={`연락처: ${tel}`} />
        <AText text={`거주지역: ${address}`} />
        <AText text={`가능품목: ${available}`} />
        <AText text={`비고: ${remark}`} />
      </CardContent>
    </>
  );
};

export default ACard;
