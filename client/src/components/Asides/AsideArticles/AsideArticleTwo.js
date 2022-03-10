import React from 'react';
import {Link} from 'react-router-dom';

const AsideArticleTwo = () => {
  return (
    <>
        <article className="grid_6">
          <h3 className="p1">Why choose us?</h3>
          <h6 className="prev-indent-bot">A Perfect Atmosphere
            {/* <Link className="link" to="/">Lorem ipsum dolor sit amet, consectetur adipisicing elit</Link> */}
            </h6>
          <p className="indent-bot">Our soothing and spacious salon is ideal; accordingly, many of our customers say they always look forward to coming in.
            We designed our building interior with a goal in mind – to combine rich cultural tradition with a modern spa atmosphere to offer the best salon experience possible. </p>
          <h6 className="prev-indent-bot">High Quality SPA
            {/* <Link className="link" to="/">Excepteur sint occaecat cupidatat non proident</Link> */}
            </h6>
          <p className="indent-bot">Our spa therapevts are experienced and skilled at spa services.
          Our spa services are renowned for being superb yet affordable.
          We provide fully comprehensive salon services, including: Waxing, Massage, Facials.</p>
          <h6 className="prev-indent-bot">Customer Service
            {/* <Link className="link" to="/">Eaque ipsa quae ab illo inventore veritatis et quasi </Link> */}
            </h6>
          <p className="indent-bot">Our spa therapevts uniquely talented. Also, they are expertly trained to provide relaxing and effective spa treatments.
We staff plenty therapists during peak periods to make sure  we can accommodate walk-ins.</p>
          {/* <Link className="button" to="/">Read More</Link>  */}
          </article>
        <article className="grid_6">
          <div className="indent-left2">
            <h3 className="prev-indent-bot2">Featured Services</h3>
            <div className="wrapper p3">
              <figure className="img-indent border"><a href="https://www.hotelcasinointernational.com/page/spapools/indoor-pool-lounge"><img src="images/page2-img2.jpg" alt="" /></a></figure>
              <div className="extra-wrap">
                <h6 className="prev-indent-bot"><a className="link" href="https://www.hotelcasinointernational.com/page/spapools/indoor-pool-lounge">Indoor Pool & Lounge</a></h6>
                To complete your wellness package, we invite you to enjoy our indoor swimming pool or top up your relaxation experience in the Hydro-massage bathtub. </div>
            </div>
            <div className="wrapper">
              <figure className="img-indent border"><a href="https://www.hotelcasinointernational.com/page/spapools/spa-heat-zone"><img src="images/page2-img3.jpg" alt="" /></a></figure>
              <div className="extra-wrap">
                <h6 className="prev-indent-bot"><a className="link" href="https://www.hotelcasinointernational.com/page/spapools/spa-heat-zone">The Heat Zone</a></h6>
                <p className="indent-bot">The alternating hot and cold cycles, as well as the periods of rest are characteristic of the classical sauna process and lead to improved blood circulation and a stronger immune system.</p>
                {/* <Link className="button" to="/">Read More</Link>  */}
                </div>
            </div>
          </div>
        </article>
    </>
  )
}

export default AsideArticleTwo