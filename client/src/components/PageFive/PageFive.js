import React from 'react';
import Header from '../Header/Header';
import SectionPageFive from '../Sections/SectionPageFive';
import AsidePageFive from '../Asides/AsidePageFive';
import Footer from '../Footer/Footer';

const PageFive = () => {
  return (
    <div id='page5'>
        <div className='bg'>
            <Header />
            <SectionPageFive />
        </div>
        <AsidePageFive />
        <Footer />
    </div>
  )
}

export default PageFive