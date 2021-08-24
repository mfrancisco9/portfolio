import React, { useState } from "react";
import "../css/misc.css";
import $ from "jquery";

// items
import Albums from './Albums';
import CoolText from '../components/CoolText'
import NiceDay  from '../components/NiceDay'
import WhatBooks from '../components/WhatBooks'

function Misc(props) {

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".diagonal-bg svg line").attr("stroke-width", 25 + scroll / 10 + "%");
    //30 is the starting width
    //alter the amount of growth by changing scroll/x
  });



  return (
    <div>
      <div id="misc-description">Here are odds and ends that don't belong anywhere else, mostly buit with the intention of playing around with css. There's some <a href="#albums">music I've enjoyed lately</a>, an app to <a href="#cooltext">make neat text</a>, a <a href="#nicedayforaride">three-day bike forecast</a>, and some thoughts on <a href="#whatbooks">the books I'm currently reading</a>.</div>
      <Albums />
      <CoolText />
      <NiceDay />
      <WhatBooks />
    </div>
  );
}

export default Misc;
