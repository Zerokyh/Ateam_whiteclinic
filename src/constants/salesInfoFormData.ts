import { FormFieldType } from '@/components/molecules/Form/FormField';
import { TitledFormControlProps } from '@/components/molecules/Form/TitledFormControl';
import { AVariableInputProps } from '@/components/atom/Input/VariableInput/AVariableInput';
import { AFixedInputProps } from '@/components/atom/Input/FixedInput/AFixedInput';
import { ANumericInputProps } from '@/components/molecules/input/ANumericInput';
import { CheckboxProps } from '@/components/atom/CheckBox/ACheckbox';
import { CheckboxDropdownSelectorProps } from '@/components/molecules/Customer/CheckboxDropdownSelector';
import { productCategories } from './productCategory';
import { OneCheckboxProps } from '@/components/molecules/checkbox/OneCheckbox';
import { ADropdownProps } from '@/components/atom/DropdownBox/ADropdown';
import { DiscountCheckboxProps } from '@/components/molecules/Customer/DiscountCheckbox';

export const salesInfoFormData: TitledFormControlProps[] = [
  {
    titleprops: {
      text: '세척품목',
    },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'CheckboxDropdownSelector' as FormFieldType,
          prevprops: {
            onecheckboxprops: {
              checkboxes: {
                airConditioner: {
                  textprops: { text: productCategories.airConditioner.product },
                },
                washingMachine: {
                  textprops: { text: productCategories.washingMachine.product },
                },
              },
            } as OneCheckboxProps,
            dropdownprops: {
              label: '카테고리 선택',
            } as ADropdownProps,
          } as CheckboxDropdownSelectorProps,
        },
        {
          formfieldtype: 'AVariableInput' as FormFieldType,
          prevprops: {
            isInvisible: false,
          } as AVariableInputProps,
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
          formfieldtype: 'ANumericInput' as FormFieldType,
          prevprops: {
            avariableinputprops: {
              isInvisible: false,
            },
          } as ANumericInputProps,
        },
      ],
    },
  },
  {
    titleprops: {
      text: '할인 여부',
    },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'DiscountCheckbox' as FormFieldType,
          prevprops: {
            checkboxprops: {
              isChecked: false,
              textprops: { text: '할인 적용' },
            } as CheckboxProps,
            anumericInputprops: {
              avariableinputprops: {
                isInvisible: false,
              },
              max: 100000,
            } as ANumericInputProps,
          } as DiscountCheckboxProps,
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
          formfieldtype: 'ANumericInput' as FormFieldType,
          prevprops: {
            avariableinputprops: {},
          } as ANumericInputProps,
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
          formfieldtype: 'AFixedInput' as FormFieldType,
          prevprops: {
            placeholder: '직접 입력',
            isInvisible: false,
          } as AFixedInputProps,
        },
      ],
    },
  },
];
