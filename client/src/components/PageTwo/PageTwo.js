import React from 'react';
import Header from '../Header/Header';
import SectionPageTwo from '../Sections/SectionPageTwo';
import Footer from '../Footer/Footer';
import AsidePageTwo from '../Asides/AsidePageTwo';

const PageTwo = () => {
  return (
    <div id="page2">
  
        <div className='bg'>
            <Header />
            <SectionPageTwo />
        </div>
        <AsidePageTwo />
        <Footer />
      
    </div>
  )
}

export default PageTwo