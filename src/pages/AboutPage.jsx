import AboutInfo from "../components/about/AboutInfo";
import Services from "../components/services/Services";
import Parallax from "../components/parallax/Parallax";

const AboutPage = () => {
  return (
    <section id="AboutUs">
      {/* About Us Information */}
      <AboutInfo />

      {/* Parallax effect for transition */}

      {/* Services Information */}
      <Services />
    </section>
  );
};

export default AboutPage;
