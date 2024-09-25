import { AVariableInputProps } from '@/components/atom/Input/VariableInput/AVariableInput';
import { FormFieldType } from '@/components/molecules/Form/FormField';
import { Percentage } from './Percentage';
import { ADropdownProps } from '@/components/atom/DropdownBox/ADropdown';
import { Days } from './Days';

export const PaymentInfo = [
  {
    titleprops: {
      text: '기사성함',
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
      text: '수당률',
    },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'ADropdownBox' as FormFieldType,
          prevprops: {
            label: '선택',
            width: 'medium',
            options: Percentage.map((payment) => ({
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
      text: '급여요일',
    },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'ADropdownBox' as FormFieldType,
          prevprops: {
            label: '선택',
            width: 'medium',
            options: Days.map((days) => ({
              value: days,
              text: days,
            })),
          } as ADropdownProps,
        },
      ],
    },
  },
];
