import { TypographyProps } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';

//----타입지정----

//schedule에 표시할 사용자 정보
export type CustomerInfo = {
  customerName: string;
  customerContact: string;
  customerAddress: string;
  cleaningItem: string;
  customerComments?: string;
  cleaningType: string;
  itemQuantity: number;
  totalPrice: number;
  appointmentDate: string;
  appointmentTime: string;
  assignedEngineer: string;
};

//기사 타입
export type engineerInfo = {
  engineerId: number;
  engineerName: string;
  engineerContact: string;
  engineerAddress: string;
  engineerAbleItem: string;
  engineerSignificant: string;
  engineerWorkDay: string;
  engineerClosedDay: string;
  engineerClosedDate: string;
  engineerSalary: number;
  engineerImgUrl?: string;
};
//일하는 시간 설정
export const workTimeLine: ProductDropdownList[] = [
  { label: '8시 이전' },
  { label: '8시 ~ 9시' },
  { label: '9시 ~ 10시' },
  { label: '10시 ~ 11시' },
  { label: '11시 ~ 12시' },
  { label: '12시 ~ 13시' },
  { label: '13시 ~ 14시' },
  { label: '14시 ~ 15시' },
  { label: '15시 ~ 16시' },
  { label: '16시 ~ 17시' },
  { label: '17시 ~ 18시' },
  { label: '18시 ~ 19시' },
  { label: '19시 이후' },
];

//제목 내용 컴포넌트
export type CTitleContentProps = {
  content: string | null;
  variant?: TypographyProps['variant'];
  subContent?: string;
};

export type CustomerInfoProps = {
  customer?: CustomerInfo;
};

//고객 정보와 예약 시간을 가져오는데 사용하는 타입
export type CustomerTimeSlotProps = {
  timeSlot: string;
  customer?: CustomerInfo;
};

//고객과 기사의 시간을 매치하는데 사용하는 타입
export type CustomerTimeMappingProps = {
  selectDate: string;
  orderInfo?: CustomerInfo[];
};

//기사 한 명의 timeLine 컴포넌트
export type CScheduleTimeLineProps = {
  engineerName: string;
  selectDate: string;
  orderInfo?: CustomerInfo[];
};

//날짜 제목 컴포넌트
export type CScheduleDateBoxProps = {
  dateInfo?: Dayjs | null;
};

//timeslot 하나 컴포넌트
export type CScheduleTimeContentProps = {
  content: string;
};

export type CScheduleTimeLineListProps = {
  selectDate: string;
  engineers?: engineerInfo[];
  orderInfo?: CustomerInfo[];
};

export type ProductDropdownList = {
  label?: string;
};

// 현재 날짜 초기화
export const TODAY = dayjs();
export const CURRENT_YEAR = TODAY.year();
export const CURRENT_MONTH = TODAY.month() + 1; // dayjs에서 month()는 0-11을 반환
export const CURRENT_DAY = TODAY.date();
export const MIN_DATE = dayjs(`${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DAY}`);

export type DatePickerProps = {
  label?: '일정 선택' | '출발 날짜' | '도착 날짜';
  value?: Dayjs | null;
  mindateValue?: Dayjs | null; // null을 허용
  handleChange?: (date: Dayjs | null) => void; //스케쥴에 필요해서 매개변수 입력
};

//----모델 선언----

//전체 스케쥴 state 관리를 위한 모델 선언
export type SchInfoModel = {
  selectedDate: Dayjs | null;
  engineers: engineerInfo[];
  customerInfo: CustomerInfo[];
  isLoading: boolean;
};

//기사 상세 페이지 state 관리를 위한 모델 선언
export type EngSchModel = {
  engineer: engineerInfo | null;
  customerInfo: CustomerInfo[];
  selectedDate: Dayjs | null;
};

//스케쥴 편집 state 관리를 위한 모델 선언
export type EditSchModel = {
  selectedDate: Dayjs | null;
  selectEng: engineerInfo | null;
  startTime: Dayjs | null;
  endTime: Dayjs | null;
  selectCustomer: CustomerInfo | null;
};
//---- 함수 지정 ----

//엔지니어와 주문 정보를 매칭함
export const filterOrdersForEngineer = (
  orders: CustomerInfo[] | undefined,
  engineerName: string,
  date: string
) => {
  return orders?.filter(
    (order) => order.assignedEngineer === engineerName && order.appointmentDate === date
  );
};

export const priceRender = (customer: CustomerInfo) => {
  const cPrice = customer.totalPrice;
  const customerPrice = cPrice > 10000;
  return customerPrice ? cPrice / 10000 + '만원' : cPrice + '원';
};

// ----스타일----
export const StyledScheduleTable = { display: 'flex', gap: '10px' };
export const StyledScheduleTimeline = { display: 'flex', flexDirection: 'column', gap: '6px' };
export const StyledTimeSlot = {
  display: 'flex',
  gap: '4px',
};

export const StyledTimeContent = {
  width: '100px',
  height: '30px',
  padding: '3px',
  textAlign: 'center',
};

export const StyledCustomerInfo = {
  width: '100%',
  height: '30px',
  padding: '3px',
};

export const StyledTitleBox = {
  backgroundColor: '#007fff',
  color: '#fff',
  borderRadius: '8px',
  textAlign: 'center',
  width: '1000px',
  height: '70px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
