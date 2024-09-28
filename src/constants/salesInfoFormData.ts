import { TitledFormControlProps } from '@/components/molecules/Form/TitledFormControl';
import { FormFieldType } from '@/components/molecules/Form/FormField';
import { CheckboxDropdownSelectorProps } from '@/components/molecules/Customer/CheckboxDropdownSelector';
import { productCategories } from '@/constants/productCategory';
import { OneCheckboxProps } from '@/components/molecules/checkbox/OneCheckbox';
import { ANumericInputProps } from '@/components/molecules/input/ANumericInput';
import { DiscountCheckboxProps } from '@/components/molecules/Customer/DiscountCheckbox';
import { AFixedInputProps } from '@/components/atom/Input/FixedInput/AFixedInput';
import { AVariableInputProps } from '@/components/atom/Input/VariableInput/AVariableInput';
import { CheckboxProps } from '@/components/atom/CheckBox/ACheckbox';
import { ADropdownProps } from '@/components/atom/DropdownBox/ADropdown';

type SalesInfoHandlers = {
  onCategoryChange: (category: string) => void;
  onItemCountChange: (value: string) => void;
  onDiscountChange: (value: string) => void;
  onUniqueDetailsChange: (value: string) => void;
  onCustomProductChange: (value: string) => void;
  itemCount: number;
  discountAmount: number;
  finalPrice: number;
  uniqueDetails: string;
  customProduct: string;
  selectedDropdownValue: string;
};

export const salesInfoFormData = ({
  onCategoryChange,
  onItemCountChange,
  onDiscountChange,
  onUniqueDetailsChange,
  onCustomProductChange,
  itemCount,
  discountAmount,
  finalPrice,
  uniqueDetails,
  customProduct,
  selectedDropdownValue,
}: SalesInfoHandlers): TitledFormControlProps[] => [
  {
    titleprops: { text: '세척품목' },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'CheckboxDropdownSelector' as FormFieldType,
          prevprops: {
            onecheckboxprops: {
              checkboxes: {
                airConditioner: { textprops: { text: productCategories.airConditioner.product } },
                washingMachine: { textprops: { text: productCategories.washingMachine.product } },
              },
            } as OneCheckboxProps,
            dropdownprops: {
              label: '카테고리 선택',
              onChange: (event) => onCategoryChange(event.target.value),
            } as ADropdownProps,
          } as CheckboxDropdownSelectorProps,
        },
        // 조건부 렌더링: selectedDropdownValue가 '스탠드' 또는 '투인원'인 경우에만 렌더링 - 수정할 예정
        ...(selectedDropdownValue === '스탠드' || selectedDropdownValue === '투인원'
          ? [
              {
                formfieldtype: 'AVariableInput' as FormFieldType,
                prevprops: {
                  isInvisible: false,
                  initialValue: customProduct,
                  onValueChange: onCustomProductChange,
                } as AVariableInputProps,
              },
            ]
          : []),
      ],
    },
  },
  {
    titleprops: { text: '세척대수' },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'ANumericInput' as FormFieldType,
          prevprops: {
            avariableinputprops: {
              isInvisible: false,
              value: itemCount.toString(),
              onValueChange: onItemCountChange,
            },
          } as ANumericInputProps,
        },
      ],
    },
  },
  {
    titleprops: { text: '할인 여부' },
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
                value: discountAmount.toString(),
                onValueChange: onDiscountChange,
              },
              max: 100000,
            } as ANumericInputProps,
          } as DiscountCheckboxProps,
        },
      ],
    },
  },
  {
    titleprops: { text: '세척금액' },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'ANumericInput' as FormFieldType,
          prevprops: {
            avariableinputprops: {
              value: finalPrice.toString(), // Ensure value is a string
              isInvisible: false,
            },
          } as ANumericInputProps,
        },
      ],
    },
  },
  {
    titleprops: { text: '특이사항' },
    formfieldprops: {
      fields: [
        {
          formfieldtype: 'AFixedInput' as FormFieldType,
          prevprops: {
            placeholder: '직접 입력',
            isInvisible: false,
            value: uniqueDetails,
            onChange: (event) => onUniqueDetailsChange(event.target.value),
          } as AFixedInputProps,
        },
      ],
    },
  },
];
