import React from "react";
import {Link} from 'react-router-dom';

const AsideArticleOne = () => {
  return (
    <>
      <article className="grid_4">
        <h3 className="p1">Face Care</h3>
        <p className="indent-bot">
          <strong>Health&Relax</strong> Visit our stylish salon facilities and pamper yourself with a range of beauty treatments designed to make you look and feel your best.
        </p>
        <Link className="button" to="/faceCare">
          Read More
        </Link>{" "}
      </article>
      <article className="grid_4">
        <div className="indent-left3">
          <h3 className="p1">Massage</h3>
          <p className="indent-bot">
          Full-body massage, which aims to improve blood circulation, metabolism and the overall physical body condition.
          <br />
          <br />
          </p>
          <Link className="button" to="/bodyMassages">
            Read More
          </Link>{" "}
        </div>
      </article>
      <article className="grid_4">
        <div className="indent-left2">
          <h3 className="p1">Spa Rest</h3>
          <p className="indent-bot">
Your 5-star vacation is waiting for you. Start the day with a cup of aromatic coffee or your favourite tea, delicious breakfast, and the best sea view in Golden Sands!
          </p>
          <a className="button" href="https://www.hotelcasinointernational.com/offer/hot-summer-offer">
            Read More
          </a>{" "}
        </div>
      </article>
    </>
  );
};

export default AsideArticleOne;
