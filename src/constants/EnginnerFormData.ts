import { AFixedInputProps } from '@/components/atom/Input/FixedInput/AFixedInput';
import { AVariableInputProps } from '@/components/atom/Input/VariableInput/AVariableInput';
import { LabelCheckBoxProps } from '@/components/molecules/Engineer/LabelCheckBox';
import { FormFieldType } from '@/components/molecules/Form/FormField';
import { TitledFormControlProps } from '@/components/molecules/Form/TitledFormControl';

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
            onChange: onchange,
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
];
