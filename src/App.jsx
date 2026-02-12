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
import dolma from "./assets/dolma.jpeg";
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
import tito from "./assets/tito.jfif";
import spongebob from "./assets/spongebob.webp";
import notfunny from "./assets/notfunny.gif";

export default function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noStyle, setNoStyle] = useState({});
  const [currentGif, setCurrentGif] = useState(null);

  const [message, setMessage] = useState(
  "💖 Mateja, will you be my Valentine? 💖"
);



const noResponses = [
  { text: "Wrong answer!!!" },

  { text: "Are you serious right now???",
    gif: damn
   },

  { 
    text: "OMG he's still pressing no 😤",
  },

  { 
    text: "STOP IT ITS NOT EVEN FUNNY",
    gif: notfunny
  },

  { text: "Long live the glorious nation of Bulgaria",
    gif: bulgaria
   },

  { text: "☹😭😰😨😤😤😠😡🤬" },
  { text: "I think Alexander the Great is Greek 😈" },
  { text: "I shouldn't have made a no button 😒" },
  { text: "Do you wanna die?? ☠" },
  {gif: crying},
  {gif: miserable},
  {gif: pablo},
  {gif: sadhamster},
  {gif: spongebob},
  {gif: tito},
  {gif: gross}
];


// Updated photos array - now using percentage-based grid that works on all screens
const photos = [
  // These will be arranged in a responsive grid via CSS
  x1, x12, x3, x4, x5, x11, x7, x8,
  x19, x20, x18, x9, x14, dolma, x22, x23,
  x17, x10, x13, x25, x21, x6, x16, x2
];


const [noCount, setNoCount] = useState(0);
const noGifs = [crying, bulgaria, damn, gross, miserable, pablo, sadhamster, tito, spongebob];

const handleNoClick = () => {
  // 🔊 play sound
  const audio = new Audio(nosound);
  audio.volume = 0.6;
  audio.play();

  setNoCount(prev => prev + 1);

  // 🎲 pick random response
  const randomIndex = Math.floor(Math.random() * noResponses.length);
  const response = noResponses[randomIndex];

  // 📝 set text
  setMessage(response.text || null);

  // 🎞 set gif only if it exists
  setCurrentGif(response.gif || null);
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
          <div className="message-area">
            <h1 className="pulse-light">{message}</h1>
            {currentGif && (
              <img
                src={currentGif}
                className="no-gif"
                alt=""
              />
            )}
          </div>

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
          </div>
        </>
      ) : (
        <>
        <h1 className="celebrate"></h1>

        <div className="photo-rain">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="sparkly"
            >
              <img
                src={photo}
                className="falling-photo"
                style={{
                  animationDelay: `${i * 0.15}s`
                }}
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