import React, { useState } from "react";
import "../css/misc.css";
import $ from "jquery";

function Misc(props) {
  const albumInfo = [
    {
      artist: "Katy Kirby",
      album: "Cool Dry Place",
      review: `The amount of ground <i>Cool Dry Place</i> covers in under half an hour is unbelievable. Katy Kirby's debut is special in that it has exactly the perfect amount of everything, bouncing from restained piano to auto-tuned pop vocals to guitar solos (multiple!) witout ever seeming abrupt or rushed.`,
    },
    {
      artist: "Snaarj",
      album: "Snaarj II",
      review:
        "<i>Snaarj II</i> is a musical Rube Goldberg machine. Eschewing the laid-back-beat-driven energy of so many similar groups, Snaarj makes music full of urgency, energy, and motion. Each of the album's short songs is beautifully layered with repeating melodies and textures that bleed from one song to the next.",
    },
    {
      artist: "Jaimie Branch",
      album: "FLY or DIE LIVE",
      review:
        "Played in just the right way (Christian Scott's <i>Stretch Music</i>, Freddie Hubbard's <i>Ready for Freddie</i>, Ibrahim Maalouf's <i>Kalthoum</i>), the trumpet is an instrument that makes me so excited I want to throw a chair. <i>FLY or DIE LIVE</i> is the relentlessly heavy, powerful, and above all beautiful music. Branch's playing manages to pivot between drones and growls haunting enough to give you goose bumps and rapidfire bursts with total precision.",
    },
    {
      artist: "Vijay Iyer, Linda May Han Oh, Tyshaun Sorey",
      album: "Uneasy",
      review:
        "</i>Uneasy</i> is a perfect trio perfectly playing trio music that is, though it seems impossible, greater than the sum of its parts. To hear these three geniuses play challenging, powerful music together is an absolute delight.",
    },
    {
      artist: "Cassandra Jenkins",
      album: "An Overview on Phenomenal Nature",
      review:
        "One of the largest similarities between Cassandra Jenkins and the late David Berman (her almost-bandmate and a major inspiration for the album) is their shared ability to imbue humor into otherwise heartbreaking music. <i>An Overview of Phenomenal Nature</i> is a happy, hopeful album about loss and change. Jenkins' lyrics, often incredibly specific and autobiographical, can't help but feel universal set to a backdrop of soft chords, brushed drums, and drifting tones. ",
    },
    {
      artist: "Sam Gendel",
      album: "Fresh Bread",
      review:
        "<i>Fresh Bread</i> is a wispy cloud in an otherwise clear sky. Gendel makes music that sounds like nothing else and leaves the listener with no choice but to make out shapes. At times it is a rabbit. At times it is a beat tape. Often it is whatever you want it to be. ",
    },
  ];

  const [coolText, setCoolText] = useState("cool text");
  const [coolTextOccurences, setCoolTextOccurences] = useState(5);
  const [coolColor, setCoolColor] = useState("182, 30, 22")

  if(document.getElementById("the-text")) {
  if (coolText.length < 10) { 
    document.getElementById("the-text").style["font-size"] = "7vw"
    document.getElementById("the-text").style["line-height"] = "6.5vw"
  } else if (coolText.length >= 10 && coolText.length < 20) {
    document.getElementById("the-text").style["font-size"] = "6vw"
    document.getElementById("the-text").style["line-height"] = "5.5vw"

  } else {
    document.getElementById("the-text").style["font-size"] = "4.5vw"
    document.getElementById("the-text").style["line-height"] = "4vw"

  }
}



  const colorChange = (color) => {
    var spans = document.querySelectorAll(".cool-text-text");
    var colorRGB = "";
    switch (color) {
      case "blob-red":
        colorRGB = "182, 30, 22";
        break;
      case "blob-orange":
        colorRGB = "238, 102, 68";
        break;
      case "blob-yellow":
        colorRGB = "247, 181, 56";
        break;
      case "blob-green":
        colorRGB = "112, 163, 127";
        break;
      case "blob-blue":
        colorRGB = "0, 146, 204";
        break;
      case "blob-indigo":
        colorRGB = "52, 89, 149";
        break;
      case "blob-violet":
        colorRGB = "141, 107, 148";
    }
    setCoolColor(colorRGB);
    document.documentElement.style.setProperty('--coolcolor', `rgb(${colorRGB})`)
  };

  const makeText = () => {
    
    let divs = [];
    for (let i = 0; i < coolTextOccurences; i++) {
      divs.push(<div className="cool-text-text">{coolText}</div>);
    }
    return divs
  };

  const [titleDetails, setTitleDetails] = useState({
    artist: "",
    album: "",
    review: "",
  });

  const testClick = (e) => {
    let albums = document.querySelectorAll(`.album-image, .album-image-focus`);
    albums.forEach((album) => (album.className = "album-image-unfocus"));
    e.target.className = "album-image, album-image-focus";
    setTitleDetails({
      artist: albumInfo[e.target.id].artist,
      album: albumInfo[e.target.id].album,
      review: albumInfo[e.target.id].review,
    });
  };

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".diagonal-bg svg line").attr("stroke-width", 25 + scroll / 10 + "%");
    //30 is the starting width
    //alter the amount of growth by changing scroll/x
  });



  return (
    <div>
      <div className="misc-div" id="top-albums">
        <div id="albums-main-description">
          some of my favorite albums from 2021:
        </div>
        <div id="albums-main-content">
          {titleDetails.artist ? (
            <div id="albums-description">
              <span id="album-title">
                {titleDetails.artist} - {titleDetails.album}
              </span>
              <p
                id="album-thoughts"
                dangerouslySetInnerHTML={{ __html: titleDetails.review }}
              />
            </div>
          ) : null}
          <div id="albums-box">
            {/* katy kirby */}
            <img
              className="album-image"
              id="0"
              src="https://f4.bcbits.com/img/a3927452565_10.jpg"
              onClick={(e) => testClick(e)}
              alt="Katy Kirby Cool Dry Place album artwork"
            />
            {/* snaarj 2 */}
            <img
              className="album-image"
              id="1"
              src="https://f4.bcbits.com/img/a3149320472_10.jpg"
              onClick={(e) => testClick(e)}
              alt="Snarj 2 album artwork"
            />
            {/* fly or die live */}
            <img
              className="album-image"
              id="2"
              src="https://f4.bcbits.com/img/a0259433205_10.jpg"
              onClick={(e) => testClick(e)}
              alt="Jaimie Branch Fly or Die Live album artwork"
            />
            {/* vijay */}
            <img
              className="album-image"
              id="3"
              src="https://f4.bcbits.com/img/a2396618910_10.jpg"
              onClick={(e) => testClick(e)}
              alt="Vijay Iyer Uneasy album artwork"
            />
            {/* cassandra jenkins */}
            <img
              className="album-image"
              id="4"
              src="https://f4.bcbits.com/img/a1700195324_10.jpg"
              onClick={(e) => testClick(e)}
            />
            {/* sam gendel */}
            <img
              className="album-image"
              id="5"
              src="https://f4.bcbits.com/img/a2248659532_10.jpg"
              onClick={(e) => testClick(e)}
            />
          </div>
        </div>
      </div>

      <div className="misc-div" id="cool-text">
        <div id="cool-text-main">
          <div id="cool-text-options">
            <input
              id="cool-text-input"
              type="text"
              maxLength="30"
              placeholder="your text here (max 30char)"
              onChange={(e) => setCoolText(e.target.value.toLowerCase())}
            ></input>
            <input 
            id="cool-text-occurences"
            type="number"
            min="1"
            max="5"
            onChange={(e) => setCoolTextOccurences(e.target.value)}>

            </input>
            <div id="blob-row">
              <div
                className="cool-text-color-blob"
                id="blob-red"
                onClick={(e) => colorChange(e.target.id)}
              ></div>
              <div
                className="cool-text-color-blob"
                id="blob-orange"
                onClick={(e) => colorChange(e.target.id)}
              ></div>
              <div
                className="cool-text-color-blob"
                id="blob-yellow"
                onClick={(e) => colorChange(e.target.id)}
              ></div>
              <div
                className="cool-text-color-blob"
                id="blob-green"
                onClick={(e) => colorChange(e.target.id)}
              ></div>
              <div
                className="cool-text-color-blob"
                id="blob-blue"
                onClick={(e) => colorChange(e.target.id)}
              ></div>
              <div
                className="cool-text-color-blob"
                id="blob-indigo"
                onClick={(e) => colorChange(e.target.id)}
              ></div>
              <div
                className="cool-text-color-blob"
                id="blob-violet"
                onClick={(e) => colorChange(e.target.id)}
              ></div>
            </div>
          </div>
          <div id="the-text">
            <div>{makeText()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Misc;
