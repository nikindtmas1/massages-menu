import React from 'react';
import {Link} from 'react-router-dom';

const AsideArticleTwo = () => {
  return (
    <>
        <article className="grid_6">
          <h3 className="p1">Why choose us?</h3>
          <h6 className="prev-indent-bot"><Link className="link" to="/">Lorem ipsum dolor sit amet, consectetur adipisicing elit</Link></h6>
          <p className="indent-bot">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. </p>
          <h6 className="prev-indent-bot"><Link className="link" to="/">Excepteur sint occaecat cupidatat non proident</Link></h6>
          <p className="indent-bot">Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
          <h6 className="prev-indent-bot"><Link className="link" to="/">Eaque ipsa quae ab illo inventore veritatis et quasi </Link></h6>
          <p className="indent-bot">Architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptaporro quisquam est, qui dolorem ipsum quia dolor.</p>
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