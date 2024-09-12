import React, { useState } from 'react';
import InfoForm from '../Form/InfoForm';
import { EngineerFormData } from '@/constants/EnginnerFormData';
import CenteredLayout from '@/styles/layout/CenterLayout';

const Register = () => {
  return (
    <CenteredLayout>
      <InfoForm titledformcontrolprops={EngineerFormData} />
    </CenteredLayout>
  );
};

export default Register;
