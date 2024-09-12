import AButton, { AButtonProps } from '@/components/atom/Button/AButton';
import ADatePicker, { ADatePickerProps } from '@/components/atom/Calendar/ADatePicker';
import ACheckbox, { CheckboxProps } from '@/components/atom/CheckBox/ACheckbox';
import ADropdownBox, { ADropdownProps } from '@/components/atom/DropdownBox/ADropdown';
import AFixedInput, { AFixedInputProps } from '@/components/atom/Input/FixedInput/AFixedInput';
import WorkcerCheckbox, { WorkerCheckboxGroupProps } from '../checkbox/WorkerCheckbox';
import LabelCheckBox, { LabelCheckBoxProps } from '@/components/molecules/Engineer/LabelCheckBox';
import AVariableInput, {
  AVariableInputProps,
} from '@/components/atom/Input/VariableInput/AVariableInput';
import OneCheckbox, { CheckboxGroupProps } from '@/components/molecules/checkbox/OneCheckbox';
import { Box } from '@mui/material';

export type FormFieldType =
  | 'AButton'
  | 'ACheckbox'
  | 'ADatePicker'
  | 'ADropdownBox'
  | 'AFixedInput'
  | 'AVariableInput'
  | 'OneCheckbox'
  | 'WorkcerCheckbox'
  | 'LabelCheckBox';

export type FormFieldConfigProps = {
  formfieldtype: FormFieldType;
  prevprops:
    | AButtonProps
    | CheckboxProps
    | ADatePickerProps
    | ADropdownProps
    | AFixedInputProps
    | AVariableInputProps
    | CheckboxGroupProps
    | WorkerCheckboxGroupProps
    | LabelCheckBoxProps;
};

export type FormFieldProps = {
  fields: FormFieldConfigProps[];
};

// 각 타입에 대한 컴포넌트 매핑
const fieldTypeToComponentMap: Record<FormFieldType, React.ElementType> = {
  AButton,
  ACheckbox,
  ADatePicker,
  ADropdownBox,
  AFixedInput,
  AVariableInput,
  OneCheckbox,
  WorkcerCheckbox,
  LabelCheckBox,
};

const FormField = ({ fields }: FormFieldProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {fields.map((field, index) => {
        const Component = fieldTypeToComponentMap[field.formfieldtype];

        return Component ? <Component key={index} {...field.prevprops} /> : null;
      })}
    </Box>
  );
};

export default FormField;
