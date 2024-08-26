import AboutNav from "@/components/AboutNav";
import Link from "next/link";

const AboutPage = ({ children }) => {
  return (
    <div>
      This is about page
      <AboutNav/>
      {children}
    </div>
  );
};

export default AboutPage;
