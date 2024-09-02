type EngineerRegisterObjectType = {
  [key: string]: {
    title: string;
    type: 'input' | 'checkbox';
  };
};
export const EngineerRegister: EngineerRegisterObjectType = {
  name: {
    title: '기사성함',
    type: 'input',
  },
  contact: {
    title: '연락처',
    type: 'input',
  },
  area: {
    title: '거주지역',
    type: 'input',
  },
  items: {
    title: '가능품목',
    type: 'checkbox',
  },
  specialNotes: {
    title: '특이사항',
    type: 'input',
  },
};

export const EngineerWashingMachineCategory = [
  '벽걸이',
  '원웨이',
  '포웨이',
  '원형',
  '스탠드',
  '실외기',
  '덕트',
  '창문형',
  '통돌이',
  '드럼',
  '빌트인',
  '건조기',
];
