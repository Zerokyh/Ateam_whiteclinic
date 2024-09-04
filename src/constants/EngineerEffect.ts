'use client';

import { useEffect, useState, ChangeEvent } from 'react';
import { generateEngineerData, EngineerData } from './Engineer';

export const useEngineerData = () => {
  const [engineerData, setEngineerData] = useState<EngineerData | null>(null);
  const [customSkill, setCustomSkill] = useState<string>('');

  useEffect(() => {
    setEngineerData(generateEngineerData());
  }, []);

  const handleCustomSkillChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomSkill(event.target.value);
  };

  const handleCustomSkillAdd = () => {
    if (customSkill && engineerData) {
      setEngineerData((prevData): EngineerData => {
        if (prevData === null) {
          return generateEngineerData();
        }
        return {
          ...prevData,
          items: [...prevData.items, customSkill],
        };
      });
      setCustomSkill('');
    }
  };

  return {
    engineerData,
    customSkill,
    handleCustomSkillChange,
    handleCustomSkillAdd,
  };
};

export default useEngineerData;
