import { useHistory } from 'react-router-dom';


import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SectionRegister  from '../Sections/SectionRegister';

const Register = () => {
    const history = useHistory();
    return (
        <div id='page3'>
        <div className='bg'>
            <Header />
            <SectionRegister />
        </div>
        <Footer />
        </div>
    )
}

export default Register