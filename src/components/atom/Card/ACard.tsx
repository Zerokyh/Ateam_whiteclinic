import { CardContent } from '@mui/material';
import AText from '../Text/AText';
import { Worker } from '@/constants/Workers';

type ACardProps = {
  worker: Worker;
  onClick: () => void;
};

const ACard = ({ worker, onClick }: ACardProps) => {
  return (
    <CardContent
      onClick={onClick}
      sx={{
        border: '1px solid black',
        width: '200px',
        height: 'auto',
        padding: '16px',
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: '#f5f5f5',
        },
      }}
    >
      <AText text={`이름: ${worker.name}`} />
      {worker.tel && <AText text={`전화: ${worker.tel}`} />}
      {worker.address && <AText text={`주소: ${worker.address}`} />}
      {worker.available && <AText text={`가능 업무: ${worker.available.join(', ')}`} />}
    </CardContent>
  );
};

export default ACard;
