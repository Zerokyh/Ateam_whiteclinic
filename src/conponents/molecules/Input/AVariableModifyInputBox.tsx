'use client';
import VFilledInput from '@/conponents/atom/Input/VariableInput/VFilledInput';
import VOutlinedInput from '@/conponents/atom/Input/VariableInput/VOutlinedInput';
import VStandardInput from '@/conponents/atom/Input/VariableInput/VStandardInput';
import * as React from 'react';

type InputVariantType = 'outlined' | 'standard' | 'filled';

type InputTextType<T extends string> = {
  text?: T;
  password?: T;
};

type AVariableModifyInputBoxProp<T extends string> = {
  type?: keyof InputTextType<T>;
  placeholder?: T;
  isInvisible?: boolean;
  width?: number;
  height?: number;
  sx?: object;
  isMultiline?: boolean;
  inputVariant?: InputVariantType;
};

const AVariableModifyInputBox = <T extends string>({
  type = 'text',
  placeholder,
  isInvisible = true,
  width = 4,
  sx,
  isMultiline = false,
  inputVariant = 'outlined',
}: AVariableModifyInputBoxProp<T>) => {
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
      return <VOutlinedInput {...commonProps} />;
    case 'filled':
      return <VFilledInput {...commonProps} />;
    case 'standard':
      return <VStandardInput {...commonProps} />;
    default:
      return null;
  }
};

export default AVariableModifyInputBox;
