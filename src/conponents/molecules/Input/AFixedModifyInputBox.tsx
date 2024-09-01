'use client';
import FFilledInput from '@/conponents/atom/Input/FixedInput/FFilledInput';
import FOutLinedInput from '@/conponents/atom/Input/FixedInput/FOutLinedInput';
import FStandardInput from '@/conponents/atom/Input/FixedInput/FStandardInput';
import * as React from 'react';

type InputVariantType = 'outlined' | 'standard' | 'filled';

type AFixedModifyInputBoxProp<T extends string> = {
  type?: string;
  placeholder?: T;
  isInvisible?: boolean;
  width?: number;
  sx?: object;
  isMultiline?: boolean;
  inputVariant?: InputVariantType;
};

const AFixedModifyInputBox = <T extends string>({
  type = 'text',
  placeholder,
  isInvisible = true,
  width = 160,
  sx,
  isMultiline = false,
  inputVariant = 'outlined',
}: AFixedModifyInputBoxProp<T>) => {
  // 반복되는 props를 객체로 묶음
  const commonProps = {
    type,
    placeholder,
    isInvisible,
    width,
    sx,
    isMultiline,
  };

  switch (inputVariant) {
    case 'outlined':
      return <FOutLinedInput {...commonProps} />;
    case 'filled':
      return <FFilledInput {...commonProps} />;
    case 'standard':
      return <FStandardInput {...commonProps} />;
    default:
      return null;
  }
};

export default AFixedModifyInputBox;
