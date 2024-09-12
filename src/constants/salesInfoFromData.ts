import { GenericDropdownBoxProps } from '@/components/atom/DropdownBox/ADropdownBox';
import { CheckboxGroupProps } from '@/components/molecules/checkbox/OneCheckbox';
import { FormFieldType } from '@/components/molecules/SalesForm/FormField';
import { TitledFormControlProps } from '@/components/molecules/SalesForm/TitledFormControl';
import { airConditionerCategories, washingMachineCategories } from './productCategory';
import { AVariableModifyInputBoxProp } from '@/conponents/molecules/Input/AVariableModifyInputBox';
import { discountCheckboxData, washCheckboxData } from './salesData';
import { AVariableNumericInputBoxProps } from '@/components/molecules/SalesForm/AVariableNumericInputBox';

export const salesInfoFormData: TitledFormControlProps[] = [
  {
    titleprops: {
      text: '세척품목',
    },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'ADropdownBox' as FormFieldType,
          prevprops: {
            label: '에어컨',
            width: 'large',
            options: airConditionerCategories.map((ac) => ({
              value: ac.category,
              text: ac.category,
            })),
          } as GenericDropdownBoxProps,
        },
        {
          formfieldtype: 'ADropdownBox' as FormFieldType,
          prevprops: {
            label: '세탁기',
            width: 'large',
            options: washingMachineCategories.map((wm) => ({
              value: wm.category,
              text: wm.category,
            })),
          } as GenericDropdownBoxProps,
        },
        {
          formfieldtype: 'AVariableModifyInputBox' as FormFieldType,
          prevprops: {
            placeholder: '직접 입력',
            inputVariant: 'outlined',
          } as AVariableModifyInputBoxProp<string>,
        },
      ],
    },
  },
  {
    titleprops: {
      text: '세척대수',
    },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'AVariableNumericInputBox' as FormFieldType,
          prevprops: {
            placeholder: '직접 수정',
            inputVariant: 'outlined',
          } as AVariableNumericInputBoxProps,
        },
      ],
    },
  },
  {
    titleprops: {
      text: '세척방식',
    },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'OneCheckbox' as FormFieldType,
          prevprops: {
            checkboxes: washCheckboxData,
          } as CheckboxGroupProps,
        },
      ],
    },
  },
  {
    titleprops: {
      text: '할인여부',
    },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'OneCheckbox' as FormFieldType,
          prevprops: {
            checkboxes: discountCheckboxData,
          } as CheckboxGroupProps,
        },
        {
          formfieldtype: 'AVariableNumericInputBox' as FormFieldType,
          prevprops: {
            placeholder: '직접 입력',
            inputVariant: 'outlined',
          } as AVariableNumericInputBoxProps,
        },
      ],
    },
  },
  {
    titleprops: {
      text: '세척금액',
    },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'AVariableNumericInputBox' as FormFieldType,
          prevprops: {
            placeholder: '직접 입력',
            inputVariant: 'outlined',
          } as AVariableNumericInputBoxProps,
        },
      ],
    },
  },
  {
    titleprops: {
      text: '특이사항',
    },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'AVariableModifyInputBox' as FormFieldType,
          prevprops: {
            placeholder: '직접 입력',
            inputVariant: 'outlined',
          } as AVariableModifyInputBoxProp<string>,
        },
      ],
    },
  },
];
