import InfoForm from "@/components/molecules/Form/InfoForm";
import { customerInfoFormData } from "@/constants/customerInfoFormData";

const Page = () => {
  return <InfoForm titledformcontrolprops={customerInfoFormData} />;
};

export default Page;
