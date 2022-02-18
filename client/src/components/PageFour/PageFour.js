import React from 'react';
import Header from '../Header/Header';
import SectionPageFour from '../Sections/SectionPageFour';
import Footer from '../Footer/Footer';

const PageFour = () => {
  return (
    <div id='page4'>
        <div className='bg'>
            <Header />
            <SectionPageFour />
        </div>
        <Footer />
    </div>
  )
}

export default PageFour