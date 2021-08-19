import React, {useState} from 'react';
import "../css/albums.css"

export default function Albums() {
   
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

    const [titleDetails, setTitleDetails] = useState({
    artist: "",
    album: "",
    review: "",
    });

    const albumClick = (e) => {
        let albums = document.querySelectorAll(`.album-image, .album-image-focus`);
        albums.forEach((album) => (album.className = "album-image-unfocus"));
        e.target.className = "album-image, album-image-focus";
        setTitleDetails({
          artist: albumInfo[e.target.id].artist,
          album: albumInfo[e.target.id].album,
          review: albumInfo[e.target.id].review,
        });
      };

    return (

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
              onClick={(e) => albumClick(e)}
              alt="Katy Kirby Cool Dry Place album artwork"
            />
            {/* snaarj 2 */}
            <img
              className="album-image"
              id="1"
              src="https://f4.bcbits.com/img/a3149320472_10.jpg"
              onClick={(e) => albumClick(e)}
              alt="Snarj 2 album artwork"
            />
            {/* fly or die live */}
            <img
              className="album-image"
              id="2"
              src="https://f4.bcbits.com/img/a0259433205_10.jpg"
              onClick={(e) => albumClick(e)}
              alt="Jaimie Branch Fly or Die Live album artwork"
            />
            {/* vijay */}
            <img
              className="album-image"
              id="3"
              src="https://f4.bcbits.com/img/a2396618910_10.jpg"
              onClick={(e) => albumClick(e)}
              alt="Vijay Iyer Uneasy album artwork"
            />
            {/* cassandra jenkins */}
            <img
              className="album-image"
              id="4"
              src="https://f4.bcbits.com/img/a1700195324_10.jpg"
              onClick={(e) => albumClick(e)}
            />
            {/* sam gendel */}
            <img
              className="album-image"
              id="5"
              src="https://f4.bcbits.com/img/a2248659532_10.jpg"
              onClick={(e) => albumClick(e)}
            />
          </div>
        </div>
      </div>

    )
}