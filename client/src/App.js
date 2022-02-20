//import './App.css';
import {Route, Switch} from 'react-router-dom';
import PageOne from "./components/PageOne/PageOne";
import PageTwo from './components/PageTwo/PageTwo';
import PageThree from './components/PageThree/PageThree';
import PageFour from './components/PageFour/PageFour';
import PageFive from './components/PageFive/PageFive';
import Register from './components/Register/Register';
import LoginPage from './components/Login/LoginPage';

import BodyMassages from './components/BodyMassages/BodyMassages';

function App() {
  return (

    <Switch>
      <Route path='/' exact component={PageOne} />
      <Route path='/services' component={PageTwo} />
      <Route path='/therapies' component={PageThree} />
      <Route path='/staff' component={PageFour} />
      <Route path='/contacts' component={PageFive} />
      <Route path='/bodyMassages' component={BodyMassages} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={LoginPage} />
    </Switch>
    
    // <div id="page1">
    //   <div className="bg">
    //     <header>
    //       <div className="menu-row">
    //         <div className="main">
    //           <div className="container_12">
    //             <div className="wrapper">
    //               <div className="grid_12">
    //                 <nav className="wrapper">
    //                   <ul className="menu">
    //                     <li>
    //                       <a className="active" href="index.html">
    //                         About us
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a href="services.html">Services</a>
    //                     </li>
    //                     <li>
    //                       <a href="therapies.html">Therapies</a>
    //                     </li>
    //                     <li>
    //                       <a href="staff.html">Our Staff</a>
    //                     </li>
    //                     <li className="last-item">
    //                       <a href="contacts.html">Contacts</a>
    //                     </li>
    //                   </ul>
    //                 </nav>
    //                 <h1>
    //                   <a href="index.html">SpaSalon</a>
    //                 </h1>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </header>

    //     <section id="content">
    //       <div className="main">
    //         <div className="container_12">
    //           <div className="wrapper">
    //             <article className="grid_3">
    //               <h3>Latest News</h3>
    //               <time className="tdate-1" datetime="2011-08-22">
    //                 <a href="/">22.08.2011</a>
    //               </time>
    //               <p className="indent-bot2">
    //                 Consectetur adipisicing elit sed do eiusmod. tempor
    //                 incididunt.
    //               </p>
    //               <time className="tdate-1" datetime="2011-08-17">
    //                 <a href="/">17.08.2011</a>
    //               </time>
    //               <p className="indent-bot2">
    //                 Laboret dolore magna aliqua enim ad minim veniam.
    //               </p>
    //               <time className="tdate-1" datetime="2011-08-09">
    //                 <a href="/">09.08.2011</a>
    //               </time>
    //               Nostrud exercn ullamco laboris nisi ut aliquip ex ea commodo.{" "}
    //             </article>
    //             <article className="grid_6">
    //               <div className="indent-left">
    //                 <h2>Most Popular Procedures</h2>
    //                 <div className="wrapper border-bot indent-bot">
    //                   <figure className="img-indent border">
    //                     <a href="/">
    //                       <img src="images/page1-img1.jpg" alt="" />
    //                     </a>
    //                   </figure>
    //                   <div className="extra-wrap">
    //                     <h4>Massage Therapy</h4>
    //                     Consectetur adipcing elsed eiusmod tempor incidint
    //                     utabore dolore magna aliquat enim ad minim.{" "}
    //                   </div>
    //                 </div>
    //                 <div className="wrapper">
    //                   <figure className="img-indent border">
    //                     <a href="/">
    //                       <img src="images/page1-img2.jpg" alt="" />
    //                     </a>
    //                   </figure>
    //                   <div className="extra-wrap">
    //                     <h4>Spa Aromatherapy</h4>
    //                     Consectetur adipcing elsed eiusmod tempor incidint
    //                     utabore dolore magna aliquat enim ad minim.{" "}
    //                   </div>
    //                 </div>
    //               </div>
    //             </article>
    //             <article className="grid_3">
    //               <h3>Our Services</h3>
    //               <div className="wrapper indent-bot2">
    //                 <div className="numb first">1</div>
    //                 <div className="extra-wrap">
    //                   {" "}
    //                   <strong className="text-1">
    //                     <a href="/">Lorem ipsumolor</a>
    //                   </strong>{" "}
    //                   Consectetur adipisic ing elit sed do.{" "}
    //                 </div>
    //               </div>
    //               <div className="wrapper indent-bot2">
    //                 <div className="numb second">2</div>
    //                 <div className="extra-wrap">
    //                   {" "}
    //                   <strong className="text-1">
    //                     <a href="/">Tempor incididunt</a>
    //                   </strong>{" "}
    //                   Laboret dolore magna aliqua enim.{" "}
    //                 </div>
    //               </div>
    //               <div className="wrapper">
    //                 <div className="numb third">3</div>
    //                 <div className="extra-wrap">
    //                   {" "}
    //                   <strong className="text-1">
    //                     <a href="/">Minim veniam quis</a>
    //                   </strong>{" "}
    //                   Nostud exercn ullmco laboris nisit aliquip.{" "}
    //                 </div>
    //               </div>
    //             </article>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </div>

    //   <aside>
    //     <div className="main">
    //       <div className="container_12">
    //         <div className="wrapper">
    //           <article className="grid_4">
    //             <h3 className="p1">Skin Care</h3>
    //             <p className="indent-bot">
    //               <strong>SpaSalon</strong> is one of free website templates
    //               created by TemplateMonster.com team, opti mized for 1024X768
    //               screen resolution. It is <br />
    //               also XHTML &amp; CSS valid.
    //             </p>
    //             <a className="button" href="/">
    //               Read More
    //             </a>{" "}
    //           </article>
    //           <article className="grid_4">
    //             <div className="indent-left3">
    //               <h3 className="p1">Massage</h3>
    //               <p className="indent-bot">
    //                 This SpaSalon Template goes with two pack ages – with PSD
    //                 source files (are available for free for the registered
    //                 members of Templates.com) and without them.
    //               </p>
    //               <a className="button" href="/">
    //                 Read More
    //               </a>{" "}
    //             </div>
    //           </article>
    //           <article className="grid_4">
    //             <div className="indent-left2">
    //               <h3 className="p1">Spa Rest</h3>
    //               <p className="indent-bot">
    //                 This website template has several pages:{" "}
    //                 <a className="link" href="index.html">
    //                   About Us
    //                 </a>
    //                 ,{" "}
    //                 <a className="link" href="services.html">
    //                   Our Services
    //                 </a>
    //                 ,{" "}
    //                 <a className="link" href="therapies.html">
    //                   Therapies
    //                 </a>
    //                 ,{" "}
    //                 <a className="link" href="staff.html">
    //                   Our Staff
    //                 </a>
    //                 ,{" "}
    //                 <a className="link" href="contacts.html">
    //                   Contact Us
    //                 </a>{" "}
    //                 (please note that contact us form doesn’t work).
    //               </p>
    //               <a className="button" href="/">
    //                 Read More
    //               </a>{" "}
    //             </div>
    //           </article>
    //         </div>
    //       </div>
    //     </div>
    //   </aside>

    //   <footer>
    //     <div className="main">
    //       <div className="container_12">
    //         <div className="wrapper">
    //           <div className="grid_8">
    //             <div className="footer-text">
    //               <b>
    //                 Copyright &copy; <a href="/">Domain Name</a> All Rights
    //                 Reserved
    //               </b>{" "}
    //               Design by{" "}
    //               <a  href="http://www.templatemonster.com/">
    //                 TemplateMonster.com
    //               </a>
    //             </div>
    //             <ul className="list-services">
    //               <li>
    //                 <a className="item-1" href="/">'</a>
    //               </li>
    //               <li>
    //                 <a className="item-2" href="/">'</a>
    //               </li>
    //               <li>
    //                 <a className="item-3" href="/">'</a>
    //               </li>
    //               <li>
    //                 <a className="item-4" href="/">'</a>
    //               </li>
    //             </ul>
    //           </div>
    //           <div className="grid_4">
    //             <div className="support-phone">
    //               {" "}
    //               <strong>Toll Free:</strong> <b>8(800)</b>154-45-67{" "}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    //   <script>Cufon.now();</script>
    // </div>
  );
}

export default App;
