import React from 'react';
import {Link} from 'react-router-dom';

const ArticlesPageFive = () => {

  const onSubmit = (e) => {

    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let username = formData.get("username").trim();
    let useremail = formData.get("useremail").trim();

    console.log(username, useremail);


  }

  return (
    <>
         <article className="grid_8">
            <h3 className="p2">Contact Form</h3>
            <form onSubmit={onSubmit} id="contact-form"  method="POST" >
              {/* <fieldset> */}
                <label><span className="text-form">Your Name:</span>
                  <input name="username" type="text" />
                </label>
                <label><span className="text-form">Your Email:</span>
                  <input name="useremail" type="text" />
                </label>
                <label><span className="text-form">Subject:</span>
                  <input name="p3" type="text" />
                </label>
                <div className="wrapper">
                  <div className="text-form">Your Message:</div>
                  <div className="extra-wrap">
                    <textarea></textarea>
                    <div className="clear"></div>
                    <div className="buttons"> <Link className="button" to="#">Clear form</Link> <Link className="button" to="/">Send message</Link> </div>
                  </div>
                </div>
              {/* </fieldset> */}
            </form>
          </article>
          <article className="grid_4">
            <h3 className="p2">Postal Address</h3>
            {/* <figure className="indent-bot">
              <iframe width="300" height="222" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Brooklyn,+New+York,+NY,+United+States&amp;aq=0&amp;sll=37.0625,-95.677068&amp;sspn=61.282355,146.513672&amp;ie=UTF8&amp;hq=&amp;hnear=Brooklyn,+Kings,+New+York&amp;ll=40.649974,-73.950005&amp;spn=0.01628,0.025663&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe>
            </figure> */}
            <dl>
              <dt className="prev-indent-bot color-3"><strong>8901 Marmora Road, Glasgow, D04 89GR.</strong></dt>
              <dd><span>Freephone:</span> +1 800 559 6580</dd>
              <dd><span>FAX:</span> +1 504 889 9898</dd>
              <dd><span>E-mail:</span> <Link to="#">mail@demolink.org</Link></dd>
            </dl>
          </article>
    </>
  )
}

export default ArticlesPageFive