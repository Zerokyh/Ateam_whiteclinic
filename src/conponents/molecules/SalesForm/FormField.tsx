import React from 'react';
import ACustomButton from '@/conponents/atom/Button/ACustomButton';
import { ACustomButtonProps } from '@/util/ButtonType';
import { Box } from '@mui/material';
import ACheckbox, { CheckboxProps } from '@/conponents/atom/CheckBox/ACheckbox';
import AFixedModifyInputBox, {
  AFixedModifyInputBoxProp,
} from '@/conponents/molecules/Input/AFixedModifyInputBox';
import ADropdownBox, { GenericDropdownBoxProps } from '@/conponents/atom/DropdownBox/ADropdownBox';
import OneCheckbox, { CheckboxGroupProps } from '@/conponents/molecules/checkbox/OneCheckbox';

export type FormFieldType =
  | 'ACustomButton'
  | 'ACheckbox'
  | 'OneCheckbox'
  | 'AFixedModifyInputBox'
  | 'ADropdownBox';

export type FormFieldConfigProps = {
  formfieldtype: FormFieldType;
  prevprops:
    | ACustomButtonProps
    | CheckboxProps
    | CheckboxGroupProps
    | AFixedModifyInputBoxProp<string>
    | GenericDropdownBoxProps;
};

export type FormFieldProps = {
  fields: FormFieldConfigProps[];
};

// 각 타입에 대한 컴포넌트 매핑
const fieldTypeToComponentMap: Record<FormFieldType, React.ElementType> = {
  ACustomButton,
  ACheckbox,
  OneCheckbox,
  AFixedModifyInputBox,
  ADropdownBox,
};

const FormField = ({ fields }: FormFieldProps) => {
  return (
    <Box sx={{ display: 'flex', gap: '20px' }}>
      {fields.map((field, index) => {
        const Component = fieldTypeToComponentMap[field.formfieldtype];

        return Component ? <Component key={index} {...field.prevprops} /> : null;
      })}
    </Box>
  );
};

export default FormField;
