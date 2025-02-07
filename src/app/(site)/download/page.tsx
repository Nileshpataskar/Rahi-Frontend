import About from "@/components/OurMission";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";
import Downloads from "@/components/Download";

export const metadata: Metadata = {
  title: "About Us | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is About page description",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Download Media" />
      <Downloads />
      {/* <About />
      <Team /> */}
    </main>
  );
};

export default AboutPage;
