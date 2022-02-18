import React from 'react';
import {Link} from 'react-router-dom';

const ArticlesPageThree = () => {
  return (
    <article class="grid_12">
    <h3 class="p2">Therapies</h3>
    <div class="wrapper p4">
      <div class="grid_4 alpha">
        <div class="wrapper p2">
          <figure class="border fleft"><img src="images/page3-img1.jpg" alt="" /></figure>
        </div>
        <h6 class="prev-indent-bot"><Link class="link" to="#">Lorem ipsum dolor sit amet</Link></h6>
        <p class="indent-bot">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        <Link class="button" to="#">Details</Link> </div>
      <div class="grid_4">
        <div class="indent-left3">
          <div class="wrapper p2">
            <figure class="border fleft"><img src="images/page3-img2.jpg" alt="" /></figure>
          </div>
          <h6 class="prev-indent-bot"><Link class="link" to="#">Lorem ipsum dolor sit amet</Link></h6>
          <p class="indent-bot">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <Link class="button" to="#">Details</Link> </div>
      </div>
      <div class="grid_4 omega">
        <div class="indent-left2">
          <div class="wrapper p2">
            <figure class="border fleft"><img src="images/page3-img3.jpg" alt="" /></figure>
          </div>
          <h6 class="prev-indent-bot"><Link class="link" to="#">Lorem ipsum dolor sit amet</Link></h6>
          <p class="indent-bot">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <Link class="button" to="#">Details</Link> </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="grid_4 alpha">
        <div class="wrapper p2">
          <figure class="border fleft"><img src="images/page3-img4.jpg" alt="" /></figure>
        </div>
        <h6 class="prev-indent-bot"><Link class="link" to="#">Lorem ipsum dolor sit amet</Link></h6>
        <p class="indent-bot">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        <Link class="button" to="#">Details</Link> </div>
      <div class="grid_4">
        <div class="indent-left3">
          <div class="wrapper p2">
            <figure class="border fleft"><img src="images/page3-img5.jpg" alt="" /></figure>
          </div>
          <h6 class="prev-indent-bot"><Link class="link" to="#">Lorem ipsum dolor sit amet</Link></h6>
          <p class="indent-bot">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <Link class="button" to="#">Details</Link> </div>
      </div>
      <div class="grid_4 omega">
        <div class="indent-left2">
          <div class="wrapper p2">
            <figure class="border fleft"><img src="images/page3-img6.jpg" alt="" /></figure>
          </div>
          <h6 class="prev-indent-bot"><Link class="link" to="#">Lorem ipsum dolor sit amet</Link></h6>
          <p class="indent-bot">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <Link class="button" to="#">Details</Link> </div>
      </div>
    </div>
  </article>
  )
}

export default ArticlesPageThree