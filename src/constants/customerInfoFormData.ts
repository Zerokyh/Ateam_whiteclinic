import { TitledFormControlProps } from '@/components/molecules/Form/TitledFormControl';
import { FormFieldType } from '@/components/molecules/Form/FormField';
import { ADatePickerProps } from '@/components/atom/Calendar/ADatePicker';
import { AVariableInputProps } from '@/components/atom/Input/VariableInput/AVariableInput';
import { ADropdownProps } from '@/components/atom/DropdownBox/ADropdown';
import { OneCheckboxProps } from '@/components/molecules/checkbox/OneCheckbox';
import { publishedCheckboxData } from './customerData';
import { paymentMethods, supportingDocuments } from './customerCategory';

export const customerInfoFormData: TitledFormControlProps[] = [
  {
    titleprops: {
      text: '예약일시',
    },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'ADatePicker' as FormFieldType,
          prevprops: {
            label: '예약일',
            placeholder: '날짜 선택',
          } as ADatePickerProps,
        },

        {
          formfieldtype: 'AVariableInput' as FormFieldType,
          prevprops: {
            placeholder: '시간',
            isInvisible: false,
          } as AVariableInputProps,
        },
      ],
    },
  },
  {
    titleprops: {
      text: '고객성함',
    },
    formfieldprops: {
      fields: [
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
      text: '연락처',
    },
    formfieldprops: {
      fields: [
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
      text: '방문주소',
    },
    formfieldprops: {
      fields: [
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
      text: '특이사항',
    },
    formfieldprops: {
      fields: [
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
      text: '결제방식',
    },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'ADropdownBox' as FormFieldType,
          prevprops: {
            label: '선택',
            width: 'medium',
            options: paymentMethods.map((payment) => ({
              value: payment,
              text: payment,
            })),
          } as ADropdownProps,
        },
      ],
    },
  },
  {
    titleprops: {
      text: '증빙서류',
    },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'ADropdownBox' as FormFieldType,
          prevprops: {
            label: '선택',
            width: 'medium',
            options: supportingDocuments.map((receipt) => ({
              value: receipt,
              text: receipt,
            })),
          } as ADropdownProps,
        },
        {
          formfieldtype: 'OneCheckbox' as FormFieldType,
          prevprops: {
            checkboxes: publishedCheckboxData,
          } as OneCheckboxProps,
        },
      ],
    },
  },
];
