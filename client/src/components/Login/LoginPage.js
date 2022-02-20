import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SectionLogin from '../Sections/SectionLogin';

const LoginPage = () => {
  return (
    <div id='page3'>
        <div className='bg'>
            <Header />
           <SectionLogin />
        </div>
        <Footer />
        </div>
  )
}

export default LoginPage