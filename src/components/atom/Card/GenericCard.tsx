import { Card, CardContent } from '@mui/material';
import AText from '../Text/AText';
import { CustomerProps } from '@/constants/CustomerInfo';
import { WorkerProps } from '@/constants/Workers';

// 새로운 타입을 여기에 추가할 수 있습니다.

// 모든 가능한 데이터 타입을 포함하는 유니온 타입
type InfoDataType = WorkerProps | CustomerProps; // | SupplierProps | ...

// 필드 렌더링 함수 타입 정의
type FieldRenderer = (key: string, value: any) => React.ReactNode;

// 카드 설정 인터페이스
type CardConfig = {
  title: string;
  fields: string[];
  fieldRenderer?: FieldRenderer;
};

// 타입별 카드 설정
const cardConfigs: Record<string, CardConfig> = {
  worker: {
    title: 'Worker Info',
    fields: ['name', 'tel', 'address', 'available', 'percent', 'payday'],
    fieldRenderer: (key, value) => {
      if (key === 'available') return `${key}: ${value.join(', ')}`;
      return `${key}: ${value}`;
    },
  },
  customer: {
    title: 'Customer Info',
    fields: ['name', 'tel', 'address', 'info', 'bookingDate', 'engineer', 'cleaning'],
  },
  // 새로운 타입에 대한 설정을 여기에 추가할 수 있습니다.
  // supplier: { ... }
};

interface InfoCardProps {
  data: InfoDataType;
  type: keyof typeof cardConfigs;
  onClick: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({ data, type, onClick }) => {
  const config = cardConfigs[type];

  const renderField = (key: string) => {
    const value = data[key as keyof InfoDataType];
    if (config.fieldRenderer) {
      return <AText key={key} text={config.fieldRenderer(key, value)} />;
    }
    return <AText key={key} text={`${key}: ${value}`} />;
  };

  return (
    <Card>
      <CardContent
        onClick={onClick}
        sx={{
          border: '1px solid black',
          width: '300px',
          height: 'auto',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      >
        <AText text={config.title} />
        {config.fields.map(renderField)}
      </CardContent>
    </Card>
  );
};

export default InfoCard;
