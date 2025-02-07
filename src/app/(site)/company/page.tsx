import Breadcrumb from "@/components/Common/Breadcrumb";
import OurMission from "@/components/OurMission";
import WhoAreWe from "@/components/WhoAreWe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Page",
  description: "This is contact page description",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Company" />
      <WhoAreWe />
      <OurMission />
    </>
  );
};

export default ContactPage;
