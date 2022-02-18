import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SectionPageThree from '../Sections/SectionPageThree';

const PageThree = () => {
  return (
    <div id='page3'>
        <div className='bg'>
            <Header />
        </div>
        <SectionPageThree />
        <Footer />
    </div>
  )
}

export default PageThree