import { CheckboxProps } from '@/conponents/atom/CheckBox/ACheckbox';
import { GenericDropdownBoxProps } from '@/conponents/atom/DropdownBox/ADropdownBox';
import { checkboxData, CheckboxGroupProps } from '@/conponents/molecules/checkbox/OneCheckbox';
import { AFixedModifyInputBoxProp } from '@/conponents/molecules/Input/AFixedModifyInputBox';
import { FormFieldType } from '@/conponents/molecules/SalesForm/FormField';
import { TitledFormControlProps } from '@/conponents/molecules/SalesForm/TitledFormControl';
import { airConditionerCategories } from '@/constants/airConditionerCategories';

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
            label: '선택',
            options: airConditionerCategories.map((category) => ({
              value: category,
              text: category,
            })),
          } as GenericDropdownBoxProps,
        },
        {
          formfieldtype: 'AFixedModifyInputBox' as FormFieldType,
          prevprops: {
            placeholder: '직접 입력',
            inputVariant: 'outlined',
          } as AFixedModifyInputBoxProp<string>,
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
          formfieldtype: 'AFixedModifyInputBox' as FormFieldType,
          prevprops: {
            placeholder: '직접 수정',
            inputVariant: 'outlined',
          } as AFixedModifyInputBoxProp<string>,
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
            checkboxes: checkboxData,
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
          formfieldtype: 'ACheckbox' as FormFieldType,
          prevprops: {
            textprops: {
              text: '할인적용',
            },
            isCheck: false,
          } as CheckboxProps,
        },
        {
          formfieldtype: 'AFixedModifyInputBox' as FormFieldType,
          prevprops: {
            placeholder: '직접 입력',
            inputVariant: 'outlined',
          } as AFixedModifyInputBoxProp<string>,
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
          formfieldtype: 'AFixedModifyInputBox' as FormFieldType,
          prevprops: {
            placeholder: '직접 입력',
            inputVariant: 'outlined',
          } as AFixedModifyInputBoxProp<string>,
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
          formfieldtype: 'AFixedModifyInputBox' as FormFieldType,
          prevprops: {
            placeholder: '직접 입력',
            inputVariant: 'outlined',
          } as AFixedModifyInputBoxProp<string>,
        },
      ],
    },
  },
];
