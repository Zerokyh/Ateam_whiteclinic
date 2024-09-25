import { ADropdownProps } from '@/components/atom/DropdownBox/ADropdown';
import { AFixedInputProps } from '@/components/atom/Input/FixedInput/AFixedInput';
import { AVariableInputProps } from '@/components/atom/Input/VariableInput/AVariableInput';
import { LabelCheckBoxProps } from '@/components/molecules/Engineer/LabelCheckBox';
import { FormFieldType } from '@/components/molecules/Form/FormField';
import { TitledFormControlProps } from '@/components/molecules/Form/TitledFormControl';
import { Days } from './Days';
import { Percentage } from './Percentage';
import { ADatePickerProps } from '@/components/atom/Calendar/ADatePicker';
import { AButtonProps } from '@/components/atom/Button/AButton';

export const EngineerFormData: TitledFormControlProps[] = [
  {
    titleprops: {
      text: '기사성함',
    },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'AFixedInput' as FormFieldType,
          prevprops: {
            placeholder: '기사성함',
            isInvisible: false,
            value: '',
          } as AFixedInputProps,
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
            placeholder: '연락처',
            isInvisible: false,
          } as AVariableInputProps,
        },
      ],
    },
  },
  {
    titleprops: {
      text: '거주지역',
    },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'AFixedInput' as FormFieldType,
          prevprops: { placeholder: '거주지역', isInvisible: false } as AFixedInputProps,
        },
      ],
    },
  },
  {
    titleprops: {
      text: '가능품목',
    },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'LabelCheckBox' as FormFieldType,
          prevprops: {} as LabelCheckBoxProps,
        },
        {
          formfieldtype: 'AFixedInput' as FormFieldType,
          prevprops: {
            placeholder: '특이사항',
            isInvisible: false,
            isMultiline: true,
          } as AFixedInputProps,
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
            placeholder: '특이사항',
            isInvisible: false,
            isMultiline: true,
          } as AFixedInputProps,
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
  {
    titleprops: {
      text: '휴무등록',
    },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'ADatePicker' as FormFieldType,
          prevprops: {
            label: '선택',
            width: 'medium',
            options: Days.map((days) => ({
              value: days,
              text: days,
            })),
          } as ADatePickerProps,
        },
        {
          formfieldtype: 'ADropdownBox' as FormFieldType,
          prevprops: {
            options: Days.map((days) => ({
              value: days,
              text: days,
            })),
          } as ADropdownProps,
        },
        {
          formfieldtype: 'AButton' as FormFieldType,
          prevprops: {
            text: '등록',
            size: 'small',
            color: 'primary',
          } as AButtonProps,
        },
      ],
    },
  },
];
