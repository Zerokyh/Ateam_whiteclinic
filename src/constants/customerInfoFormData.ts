import { TitledFormControlProps } from '@/components/molecules/Form/TitledFormControl';
import { FormFieldType } from '@/components/molecules/Form/FormField';
import { ADatePickerProps } from '@/components/atom/Calendar/ADatePicker';
import { AVariableInputProps } from '@/components/atom/Input/VariableInput/AVariableInput';
import { OneCheckboxProps } from '@/components/molecules/checkbox/OneCheckbox';
import { publishedCheckboxData } from './customerData';
import dayjs, { Dayjs } from 'dayjs';

import { CustomerInfoValues } from '@/components/organism/Customer/CustomerInfo';
import { SelectProps } from '@/components/molecules/Select/APayment';

export const CustomerInfoFormData = (
  formValues: CustomerInfoValues,
  handleFieldChange: (fieldName: keyof CustomerInfoValues, value: string) => void
): TitledFormControlProps[] => [
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
            value: formValues.reservationDate ? dayjs(formValues.reservationDate) : null,
            onChange: (newValue: Dayjs | null) => {
              handleFieldChange('reservationDate', newValue ? newValue.format('YYYY-MM-DD') : '');
            },
          } as ADatePickerProps,
        },
        {
          formfieldtype: 'AVariableInput' as FormFieldType,
          prevprops: {
            placeholder: '시간',
            isInvisible: false,
            value: formValues.time || '',
            onValueChange: (value: string) => {
              handleFieldChange('time', value);
            },
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
            value: formValues.name || '',
            onValueChange: (value: string) => {
              handleFieldChange('name', value);
            },
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
            value: formValues.phoneNumber || '',
            onValueChange: (value: string) => {
              handleFieldChange('phoneNumber', value);
            },
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
            value: formValues.address || '',
            onValueChange: (value: string) => {
              handleFieldChange('address', value);
            },
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
            value: formValues.uniqueDetails || '',
            onValueChange: (value: string) => {
              handleFieldChange('uniqueDetails', value);
            },
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
          formfieldtype: 'APayment' as FormFieldType,
          prevprops: {
            adropdownprops: {
              label: '결제방식 선택',
              value: formValues.payment || '',
              onChange: (event: React.ChangeEvent<{ value: string }>) => {
                handleFieldChange('payment', event.target.value);
              },
            },
          } as SelectProps,
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
          formfieldtype: 'AEvidentialDocument' as FormFieldType,
          prevprops: {
            adropdownprops: {
              label: '증빙서류 선택',
              value: formValues.document || '',
              onChange: (event: React.ChangeEvent<{ value: string }>) => {
                handleFieldChange('document', event.target.value);
              },
            },
          } as SelectProps,
        },
        {
          formfieldtype: 'OneCheckbox' as FormFieldType,
          prevprops: {
            checkboxes: publishedCheckboxData,
            value: formValues.published || '',
            onChange: (value: string) => {
              handleFieldChange('published', value);
            },
          } as OneCheckboxProps,
        },
      ],
    },
  },
];
