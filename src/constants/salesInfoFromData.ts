import { FormFieldType } from "@/components/molecules/Form/FormField";
import { TitledFormControlProps } from "@/components/molecules/Form/TitledFormControl";
import { airConditionerCategories, washingMachineCategories } from "./productCategory";
import { ADropdownProps } from "@/components/atom/DropdownBox/ADropdown";


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
          } as ADropdownProps,
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
          } as GenericDropdoADropdownPropswnBoxProps,
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
