import React from 'react';
import {Link} from 'react-router-dom';

const ArticlesPageOne = () => {
  return (
    <>
         <article className="grid_3">
                  <h3>Latest News</h3>
                  <time className="tdate-1" datetime="2011-08-22">
                    <a href="https://www.hotelcasinointernational.com/news/international-is-opening-on-april-21">18.04.2021</a>
                  </time>
                  <p className="indent-bot2">
                  INTERNATIONAL is opening on April 21
                  </p>
                  <time className="tdate-1" datetime="2011-08-17">
                    <a href="https://www.hotelcasinointernational.com/news/be-healthy">12.10.2021</a>
                  </time>
                  <p className="indent-bot2">
                  Program “Be Healthy & Stay Active with Bt Hotels Collection!”
                  </p>
                  <time className="tdate-1" datetime="2011-08-09">
                    <a href="https://www.hotelcasinointernational.com/news/contribution-to-a-eco-campaign">18.10.2021</a>
                  </time>
                  Contribution to a Eco campaign.{" "}
                </article>
                <article className="grid_6">
                  <div className="indent-left">
                    <h2>Most Popular Offers</h2>
                    <div className="wrapper border-bot indent-bot">
                      <figure className="img-indent border">
                        <a href="https://www.hotelcasinointernational.com/bg/offer/spa-brunch">
                          <img src="images/page1-img1.jpg" alt="" />
                        </a>
                      </figure>
                      <div className="extra-wrap">
                        <h4>Spa Brunch</h4>
                        Our suggestion for the Week-End days is refreshing and relaxing SPA holiday. Our team has prepared special SPA Offers
                      </div>
                    </div>
                    <div className="wrapper">
                      <figure className="img-indent border">
                        <a href="https://www.hotelcasinointernational.com/offer/spa-gourmet">
                          <img src="images/page1-img2.jpg" alt="" />
                        </a>
                      </figure>
                      <div className="extra-wrap">
                        <h4>Spa Guormet</h4>
                        Our suggestion for the Winter days is refreshing and relaxing SPA holiday. Our team has prepared special SPA therapies
                      </div>
                    </div>
                  </div>
                </article>
                <article className="grid_3">
                  <h3>Our Services</h3>
                  <div className="wrapper indent-bot2">
                    <div className="numb first">1</div>
                    <div className="extra-wrap">
                      {" "}
                      <strong className="text-1">
                        <Link to="/faceCare">Face Care</Link>
                      </strong>{" "}
                      Pamper yourself with a range of beauty.
                    </div>
                  </div>
                  <div className="wrapper indent-bot2">
                    <div className="numb second">2</div>
                    <div className="extra-wrap">
                      {" "}
                      <strong className="text-1">
                        <Link to="/bodyMassages">Body Massages</Link>
                      </strong>{" "}
                      Full-body massage good body condition.
                    </div>
                  </div>
                  <div className="wrapper">
                    <div className="numb third">3</div>
                    <div className="extra-wrap">
                      {" "}
                      <strong className="text-1">
                        <Link to="/waxing">Waxing</Link>
                      </strong>{" "}
                      Make you look and feel your best.{" "}
                    </div>
                  </div>
                </article>
    </>
  )
}

export default ArticlesPageOne