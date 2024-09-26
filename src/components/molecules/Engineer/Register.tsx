import InfoForm from '../Form/InfoForm';
import { EngineerFormData } from '@/constants/EnginnerFormData';
import CenteredLayout from '@/styles/layout/CenterLayout';
import TwoButtons from '../Button/TwoButton';

const Register = () => {
  return (
    <>
      <CenteredLayout>
        <InfoForm titledformcontrolprops={EngineerFormData} />
        <TwoButtons
          leftButton={{ text: '취소', color: 'default', size: 'full' }}
          rightButton={{ text: '등록', color: 'primary', size: 'full' }}
        ></TwoButtons>
      </CenteredLayout>
    </>
  );
};

export default Register;
