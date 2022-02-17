import React from "react";

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
        <a className="button" href="/">
          Read More
        </a>{" "}
      </article>
      <article className="grid_4">
        <div className="indent-left3">
          <h3 className="p1">Massage</h3>
          <p className="indent-bot">
            This SpaSalon Template goes with two pack ages – with PSD source
            files (are available for free for the registered members of
            Templates.com) and without them.
          </p>
          <a className="button" href="/">
            Read More
          </a>{" "}
        </div>
      </article>
      <article className="grid_4">
        <div className="indent-left2">
          <h3 className="p1">Spa Rest</h3>
          <p className="indent-bot">
            This website template has several pages:{" "}
            <a className="link" href="index.html">
              About Us
            </a>
            ,{" "}
            <a className="link" href="services.html">
              Our Services
            </a>
            ,{" "}
            <a className="link" href="therapies.html">
              Therapies
            </a>
            ,{" "}
            <a className="link" href="staff.html">
              Our Staff
            </a>
            ,{" "}
            <a className="link" href="contacts.html">
              Contact Us
            </a>{" "}
            (please note that contact us form doesn’t work).
          </p>
          <a className="button" href="/">
            Read More
          </a>{" "}
        </div>
      </article>
    </>
  );
};

export default AsideArticleOne;
