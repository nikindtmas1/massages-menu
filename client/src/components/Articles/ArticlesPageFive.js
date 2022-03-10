import React, {useRef} from 'react';
import {useHistory} from 'react-router-dom';
import emailjs from 'emailjs-com';

const ArticlesPageFive = () => {

  const history = useHistory();

  const form = useRef();

  const onSubmit = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_h9aidmw', 'template_wqbae6o', form.current, 'user_eSMFjCjC1C4AXtnDjwkCx')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    })
    .then(alert('Your message has been sent! I will be in touch soon.'))
    .then(history.push('/'));

    // let formData = new FormData(e.currentTarget);
    // let username = formData.get("username").trim();
    // let useremail = formData.get("useremail").trim();
    // let usermessage = formData.get('usermessage').trim();

    // if (username === "" || useremail === "" || usermessage === "") {
    //   return alert("All fields are required!");
    // };

    // if (username.length < 3) {
    //   return alert("Username input is invalid!");
    // };

    // console.log(username, useremail, usermessage);


  }

  return (
    <>
         <article className="grid_8">
            <h3 className="p2">Contact Form</h3>
            <form ref={form} onSubmit={onSubmit} id="contacts-form"  method="POST" >
              {/* <fieldset> */}
                {/* <label><span className="text-form">Your Name:</span>
                </label> */}
                  <input placeholder='Your Name' name="user_name" type="text" />
                {/* <label><span className="text-form">Your Email:</span>
                </label> */}
                  <input placeholder='Your Email' name="user_email" type="text" />
                {/* <label><span className="text-form">Subject:</span>
                </label> */}
                  {/* <input name="p3" type="text" /> */}
                <div className="wrapper">
                  {/* <div className="text-form">Your Message:</div> */}
                  <div className="extra-wrap">
                    <textarea placeholder='Your Message' name='message'></textarea>
                    <div className="clear"></div>
                    {/* <div className="buttons"> <Link className="button" to="#">Clear form</Link> <Link type='submit' to="/">Send message</Link> </div> */}
                  <input className="buttons" type='submit' style={{"background":'hsl(185, 96%, 81%)'}}></input>
                  </div>
                </div>
              {/* </fieldset> */}
            </form>
          </article>
          <article className="grid_4">
            <h3 className="p2">Postal Address</h3>
            <figure className="indent-bot">
              {/* <iframe width="300" height="222" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Brooklyn,+New+York,+NY,+United+States&amp;aq=0&amp;sll=37.0625,-95.677068&amp;sspn=61.282355,146.513672&amp;ie=UTF8&amp;hq=&amp;hnear=Brooklyn,+Kings,+New+York&amp;ll=40.649974,-73.950005&amp;spn=0.01628,0.025663&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe> */}
              <iframe width="300" height="222" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d92947.67027951687!2d28.0371527!3d43.2804473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4f8d98a418caf%3A0xfd0afef99d2c075d!2sInternational%20Hotel%20Casino%20%26%20Tower%20Suites!5e0!3m2!1sen!2sbg!4v1646904283026!5m2!1sen!2sbg" ></iframe>
            </figure>
            <dl>
              <dt className="prev-indent-bot color-3"><strong>9007 Varna, Golden Sands, Street: First</strong></dt>
              <dd><span>Phone:</span> +359 882 196 877</dd>
              {/* <dd><span>FAX:</span> +1 504 889 9898</dd> */}
              <dd><span>E-mail:</span>spareception@interhc.com</dd>
            </dl>
          </article>
    </>
  )
}

export default ArticlesPageFive