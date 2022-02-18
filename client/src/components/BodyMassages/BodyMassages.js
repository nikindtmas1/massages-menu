import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SectionPageMassages from "../Sections/SectionPageMassages";

const BodyMassages = () => {
  return (
    <div id="page3">
      <div className="bg">
          <Header />
          <SectionPageMassages />
          </div>
        <Footer />
    </div>
  );
};

export default BodyMassages;
