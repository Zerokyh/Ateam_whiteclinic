'use client';

import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import ModalButton from '@/components/molecules/Customer/ModalButton';
import InfoForm from '@/components/molecules/Form/InfoForm';
import { salesInfoFormData } from '@/constants/salesInfoFormData';
import { productCategories } from '@/constants/productCategory';

const SalesInfo = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // 선택된 품목 카테고리
  const [selectedDropdownValue, setSelectedDropdownValue] = useState<string>(''); // 추가된 상태: 드롭다운 값
  const [itemCount, setItemCount] = useState<number>(1); // 세척대수
  const [discountAmount, setDiscountAmount] = useState<number>(0); // 할인금액
  const [finalPrice, setFinalPrice] = useState<number>(0); // 최종가격
  const [uniqueDetails, setUniqueDetails] = useState<string>(''); // 특이사항
  const [customProduct, setCustomProduct] = useState<string>(''); // 직접 입력된 품목

  // 세척 품목 선택 핸들러
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    console.log(`품목 선택: ${category}`);
  };

  // 드롭다운 선택 핸들러 추가
  const handleDropdownChange = (value: string) => {
    setSelectedDropdownValue(value);
    console.log(`드롭다운 선택: ${value}`);
  };

  // 세척대수 변경 핸들러
  const handleItemCountChange = (value: string) => {
    setItemCount(Number(value));
    console.log(`세척대수 변경: ${value}`); // 세척대수 변경 확인
  };

  // 할인 금액 변경 핸들러
  const handleDiscountChange = (value: string) => {
    setDiscountAmount(Number(value));
    console.log(`할인 금액 변경: ${value}`);
  };

  // 특이사항 변경 핸들러
  const handleUniqueDetailsChange = (value: string) => {
    setUniqueDetails(value);
  };

  // 직접 입력된 품목 변경 핸들러
  const handleCustomProductChange = (value: string) => {
    setCustomProduct(value);
  };

  // 세척금액을 계산하는 로직
  useEffect(() => {
    let itemPrice = 0;

    // 선택된 품목의 가격을 계산
    Object.values(productCategories).forEach((category) => {
      const foundItem = category.categories.find((item) => item.category === selectedDropdownValue);
      if (foundItem && foundItem.price) {
        itemPrice = foundItem.price;
        console.log(`선택된 품목: ${selectedDropdownValue}, 가격: ${itemPrice}`);
      }
    });

    // 총 가격 계산
    const totalPrice = itemPrice * itemCount;
    // 할인 적용
    const finalCalculatedPrice = totalPrice - discountAmount;

    setFinalPrice(finalCalculatedPrice);
  }, [selectedDropdownValue, itemCount, discountAmount]);

  return (
    <Box>
      <InfoForm
        titledformcontrolprops={salesInfoFormData({
          onCategoryChange: handleCategoryChange,
          onItemCountChange: handleItemCountChange,
          onDiscountChange: handleDiscountChange,
          onUniqueDetailsChange: handleUniqueDetailsChange,
          onCustomProductChange: handleCustomProductChange,
          itemCount,
          discountAmount,
          finalPrice,
          uniqueDetails,
          customProduct,
          selectedDropdownValue, // 드롭다운 값 전달
        })}
      />
      <ModalButton
        leftButton={{ text: '취소', size: 'full' }}
        rightButton={{ text: '등록', color: 'primary', size: 'full' }}
      />
    </Box>
  );
};

export default SalesInfo;
