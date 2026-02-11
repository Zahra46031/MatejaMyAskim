import { useState } from "react";
import "./App.css";
import x1 from "./assets/x1.jpeg";
import x2 from "./assets/x2.jpeg";
import x3 from "./assets/x3.jpeg";
import x4 from "./assets/x4.jpeg";
import x5 from "./assets/x5.jpeg";
import x6 from "./assets/x6.jpeg";
import x7 from "./assets/x7.jpeg";
import x8 from "./assets/x8.jpeg";
import x9 from "./assets/x9.jpeg";
import x10 from "./assets/x10.jpeg";
import x11 from "./assets/x11.jpeg";
import x12 from "./assets/x12.jpeg";
import x13 from "./assets/x13.jpeg";
import x14 from "./assets/x14.jpeg";
import x15 from "./assets/x15.jpeg";
import x16 from "./assets/x16.jpeg";
import x17 from "./assets/x17.jpeg";
import x18 from "./assets/x18.jpeg";
import x19 from "./assets/x19.jpeg";
import x20 from "./assets/x20.jpeg";
import x21 from "./assets/x21.jpeg";
import x22 from "./assets/x22.jpeg";
import x23 from "./assets/x23.jpeg";
import x24 from "./assets/x24.jpeg";
import x25 from "./assets/x25.jpeg";
import yessound from "./assets/yessound.mp3";
import yaysoundcute from "./assets/yaysoundcute.mp3";
import nosound from "./assets/nosound.mp3";
import bulgaria from "./assets/bulgaria.gif";
import crying from "./assets/crying.gif";
import damn from "./assets/damn.gif";
import gross from "./assets/gross.webp";
import miserable from "./assets/miserable.gif";
import pablo from "./assets/pablo.gif";
import sadhamster from "./assets/sadhamster.gif";
import ugly from "./assets/ugly.gif";
import spongebob from "./assets/spongebob.webp";

export default function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noStyle, setNoStyle] = useState({});
  const [currentGif, setCurrentGif] = useState(null);

  const [message, setMessage] = useState(
  "💖 Mateja, will you be my Valentine? 💖"
);


  const noMessages = [
    "Wrong answer!!!",
  "Are you serious right now??? 😢",
  "OMG he's still pressing no 😤",
  "STOP IT ITS NOT EVEN FUNNY ",
  "Long live the glorious nation of Bulgaria",
  "☹😭😰😨😤😤😠😡🤬",
  "I think Alexander the Great is Greek 😈",
  "I shouldn't have made a no button 😒",
  "Do you wanna die?? ☠",

];

const photos = [
  { src: x1,  left: "1%",  top: "5%" },
  { src: x2,  left: "13.5%", top: "5%" },
  { src: x3,  left: "26%", top: "5%" },
  { src: x4,  left: "38.5%", top: "5%" },
  { src: x5,  left: "51%", top: "5%" },
  { src: x6,  left: "63.5%", top: "5%" },
  { src: x7,  left: "76%",  top: "5%" },
  { src: x15, left: "88.5%", top: "5%" },


  
  { src: x19, left: "1%", top: "75%" },
  { src: x20, left: "13.5%", top: "75%" }, //2 75
  { src: x9,  left: "26%", top: "75%" },  
  { src: x24, left: "38.5%", top: "75%" },
  { src: x14, left: "51%", top: "75%" },
  { src: x21, left: "63.5%", top: "75%" },
  { src: x22, left: "76%", top: "75%" },
  { src: x23, left: "88.5%", top: "75%" },
  

  { src: x17, left: "1%", top: "41%" }, //2 30
  { src: x10, left: "13.5%", top: "41%" },
  { src: x13, left: "26%",  top: "41%" }, // 25 35
  
  { src: x25, left: "38.5%", top: "46%" },
  { src: x18, left: "51%", top: "46%" }, // 45 65
  
  { src: x16, left: "63.5%", top: "41%" },
  { src: x11, left: "76%", top: "41%" },
  { src: x12, left: "88.5%", top: "41%" },
  

];


const [noCount, setNoCount] = useState(0);
const noGifs = [crying, bulgaria, damn, gross, miserable, pablo, sadhamster, ugly, spongebob];

const handleNoClick = () => {
  //for the sound
  const audio = new Audio(nosound);
  audio.volume = 0.6;
  audio.play();
  
  const showGif = Math.random() < 0.4; // 40% chance gif
  
  setNoCount(prev => {
    const nextCount = prev + 1;

  if (showGif) {
    const randomGif = noGifs[Math.floor(Math.random() * noGifs.length)];
    setCurrentGif(randomGif);
    setMessage(null);
  } else{
    if (nextCount === 1) {
      setMessage(noMessages[0]);
    } else {
      const randomIndex = Math.floor(Math.random() * noMessages.length);
      setMessage(noMessages[randomIndex]);
      setCurrentGif(null);
    }

  }
    return nextCount;
  });
};

const handleYesClick = () => {
  const audio = new Audio(yesSound);
  audio.volume = 0.6;
  audio.play();
  setYes(true);
};



  const moveNoButton = () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    setNoStyle({
      transform: `translate(${x}px, ${y}px)`
    });
  };

  return (
    <div className="container">
      {!yesClicked ? (
        <>
          <h1 className="pulse-light">{message}</h1>

          <div className="buttons">
            <button className="yes" 
            onClick={() => {
               const audio = new Audio(yaysoundcute);
              audio.volume = 0.6;
              audio.play();
              setYesClicked(true);
            }
             
            }>
              Yes 💕
            </button>

            <button
              className="no"
              style={noStyle}
              onClick={handleNoClick}
            >
              No 😅
            </button>

      {currentGif && (
        <img
          src={currentGif}
          className="no-gif"
          alt=""
        />
      )}
          </div>
        </>
      ) : (
        <>
        <h1 className="celebrate">YAY!!! 💘💘💘 te sakam!</h1>

<div className="photo-rain">
  {photos.map((photo, i) => (
    <div
      key={i}
      className="sparkly"
      style={{
        left: photo.left,
        top: photo.top,
        position: "absolute",
        animationDelay: `${i * 0.3}s`
      }}
    >
      <img
        src={photo.src}
        className="falling-photo"
        alt=""
      />
    </div>
  ))}
</div>

             </>
         )
        }
         </div>
        );
      }