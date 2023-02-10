import React from "react";
import profilepic from "../img/slika.png"
import ReactTypingEffect from "react-typing-effect"

function Home() {
  return (
    <div className="condiv home">
      <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
      <ReactTypingEffect
        className="typingeffect"
        text={[
          "I am Lazar Radosavljevic",
          "I am a student of the Faculty of Organizational Sciences in Belgrade",
        ]}
        speed={100}
        eraseDelay={700}
      />
    </div>
  );
}

export default Home;
