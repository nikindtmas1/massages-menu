import React from 'react';
import Header from '../Header/Header';
import SectionPageBodyTherapy from '../Sections/SectionPageBodyTherapy';
import Footer from '../Footer/Footer';

const BodyTherapies = () => {
  return (
    <div id="page3">
        <div className="bg">
            <Header />
            <SectionPageBodyTherapy />
        </div>
        <Footer />
    </div>
  )
}

export default BodyTherapies