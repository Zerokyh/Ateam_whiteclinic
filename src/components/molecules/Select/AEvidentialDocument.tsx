import ADropdown from '@/components/atom/DropdownBox/ADropdown';
import { Document } from '@/constants/Document';

const AEvidentialDocument = () => {
  const DocumentOption = Document.map((doc) => ({ text: doc, value: doc }));

  return <ADropdown label="선택" options={DocumentOption} width="medium" />;
};

export default AEvidentialDocument;
