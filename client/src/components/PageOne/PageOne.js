import React from 'react';
import Header from '../Header/Header';
import SectionPageOne from '../Sections/SectionPageOne';
import Footer from '../Footer/Footer';
import AsidePageOne from '../Asides/AsidePageOne';

const PageOne = () => {
  return (
    <>
     <div id="page1">
        <div className="bg">
            <Header />
            <SectionPageOne />
        </div>
        <AsidePageOne />
        <Footer />
    </div>
    </>
  )
}

export default PageOne