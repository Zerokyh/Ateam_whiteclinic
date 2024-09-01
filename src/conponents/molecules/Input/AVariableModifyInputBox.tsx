'use client';
import * as React from 'react';
import AVFilledInput from '@/conponents/atom/Input/VariableInput/AVFilledInput';
import AVOutlinedInput from '@/conponents/atom/Input/VariableInput/AVOutlinedInput';
import AVStandardInput from '@/conponents/atom/Input/VariableInput/AVStandardInput';

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
      return <AVOutlinedInput {...commonProps} />;
    case 'filled':
      return <AVFilledInput {...commonProps} />;
    case 'standard':
      return <AVStandardInput {...commonProps} />;
    default:
      return null;
  }
};

export default AVariableModifyInputBox;
