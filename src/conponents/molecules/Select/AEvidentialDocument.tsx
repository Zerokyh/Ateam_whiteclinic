import ADropdownBox from '@/conponents/atom/DropdownBox/ADropdownBox';
import { DocumentType } from '@/constants/DocumentType';

const AEvidentialDocument = () => {
  const DocumentOption = DocumentType.map((doc) => ({ text: doc, value: doc }));

  return <ADropdownBox label="선택" options={DocumentOption} />;
};

export default AEvidentialDocument;
