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
              isChecked: false, // 초기 상태는 false
              textprops: { text: '할인 적용' }, // 체크박스 텍스트 설정
            } as CheckboxProps,
            anumericInputprops: {
              avariableinputprops: {
                isInvisible: false, // 숫자 입력 필드는 항상 보이도록 설정
              },
              max: 100000, // 숫자 입력 필드의 최대값 설정
            } as ANumericInputProps,
          },
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
            avariableinputprops: {
            },
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
