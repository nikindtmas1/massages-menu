import React from "react";
import {Link} from 'react-router-dom';

const AsideArticleOne = () => {
  return (
    <>
      <article className="grid_4">
        <h3 className="p1">Skin Care</h3>
        <p className="indent-bot">
          <strong>SpaSalon</strong> is one of free website templates created by
          TemplateMonster.com team, opti mized for 1024X768 screen resolution.
          It is <br />
          also XHTML &amp; CSS valid.
        </p>
        <Link className="button" to="/">
          Read More
        </Link>{" "}
      </article>
      <article className="grid_4">
        <div className="indent-left3">
          <h3 className="p1">Massage</h3>
          <p className="indent-bot">
            This SpaSalon Template goes with two pack ages – with PSD source
            files (are available for free for the registered members of
            Templates.com) and without them.
          </p>
          <Link className="button" to="/">
            Read More
          </Link>{" "}
        </div>
      </article>
      <article className="grid_4">
        <div className="indent-left2">
          <h3 className="p1">Spa Rest</h3>
          <p className="indent-bot">
            This website template has several pages:{" "}
            <Link className="link" to="index.html">
              About Us
            </Link>
            ,{" "}
            <Link className="link" to="services.html">
              Our Services
            </Link>
            ,{" "}
            <Link className="link" to="therapies.html">
              Therapies
            </Link>
            ,{" "}
            <Link className="link" to="staff.html">
              Our Staff
            </Link>
            ,{" "}
            <Link className="link" to="contacts.html">
              Contact Us
            </Link>{" "}
            (please note that contact us form doesn’t work).
          </p>
          <Link className="button" to="/">
            Read More
          </Link>{" "}
        </div>
      </article>
    </>
  );
};

export default AsideArticleOne;
