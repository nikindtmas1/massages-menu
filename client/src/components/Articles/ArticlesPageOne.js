import React from 'react'

const ArticlesPageOne = () => {
  return (
    <>
         <article className="grid_3">
                  <h3>Latest News</h3>
                  <time className="tdate-1" datetime="2011-08-22">
                    <a href="/">22.08.2011</a>
                  </time>
                  <p className="indent-bot2">
                    Consectetur adipisicing elit sed do eiusmod. tempor
                    incididunt.
                  </p>
                  <time className="tdate-1" datetime="2011-08-17">
                    <a href="/">17.08.2011</a>
                  </time>
                  <p className="indent-bot2">
                    Laboret dolore magna aliqua enim ad minim veniam.
                  </p>
                  <time className="tdate-1" datetime="2011-08-09">
                    <a href="/">09.08.2011</a>
                  </time>
                  Nostrud exercn ullamco laboris nisi ut aliquip ex ea commodo.{" "}
                </article>
                <article className="grid_6">
                  <div className="indent-left">
                    <h2>Most Popular Procedures</h2>
                    <div className="wrapper border-bot indent-bot">
                      <figure className="img-indent border">
                        <a href="/">
                          <img src="images/page1-img1.jpg" alt="" />
                        </a>
                      </figure>
                      <div className="extra-wrap">
                        <h4>Massage Therapy</h4>
                        Consectetur adipcing elsed eiusmod tempor incidint
                        utabore dolore magna aliquat enim ad minim.{" "}
                      </div>
                    </div>
                    <div className="wrapper">
                      <figure className="img-indent border">
                        <a href="/">
                          <img src="images/page1-img2.jpg" alt="" />
                        </a>
                      </figure>
                      <div className="extra-wrap">
                        <h4>Spa Aromatherapy</h4>
                        Consectetur adipcing elsed eiusmod tempor incidint
                        utabore dolore magna aliquat enim ad minim.{" "}
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
                        <a href="/">Lorem ipsumolor</a>
                      </strong>{" "}
                      Consectetur adipisic ing elit sed do.{" "}
                    </div>
                  </div>
                  <div className="wrapper indent-bot2">
                    <div className="numb second">2</div>
                    <div className="extra-wrap">
                      {" "}
                      <strong className="text-1">
                        <a href="/">Tempor incididunt</a>
                      </strong>{" "}
                      Laboret dolore magna aliqua enim.{" "}
                    </div>
                  </div>
                  <div className="wrapper">
                    <div className="numb third">3</div>
                    <div className="extra-wrap">
                      {" "}
                      <strong className="text-1">
                        <a href="/">Minim veniam quis</a>
                      </strong>{" "}
                      Nostud exercn ullmco laboris nisit aliquip.{" "}
                    </div>
                  </div>
                </article>
    </>
  )
}

export default ArticlesPageOne