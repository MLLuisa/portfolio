import photo from "../images/image.jpg";
import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="header-section">
        <div className="header-name">
        <h2 className="name">Maria Luisa Lufrano</h2>
        <p className="job">Junior frontend developer 👩🏻‍💻</p>
        </div>
      <figure className="header-image">
        <img src={photo} alt="profile" className="image-profile" />
      </figure>
      </div>
      <div className="links">
      <Link to='https://twitter.com/MariaLuisa_04' target='blank'>Twitter</Link>
      <a href="https://twitter.com/MariaLuisa_04" target='blank'><p>Twitter</p></a>

      </div>
      {/* <div className='wrapperAboutMe'>
        <h4 className="titleAboutMe">About me</h4>
        <p className="textAboutMe">
          Hi, I am María Luisa, junior frontend developer. 👩🏻‍💻 I like the world
          of technology and gaming very much, and thanks to this in the last few
          years of my life, I have decided to give a boost to this passion with
          a lot of study to become a web developer. The first contact I had with
          technology was in high school, where I started studying HTML and CSS.
          The world of technology is full of possibilities and challenges and I
          can't wait to get started. Hope you enjoy my web! 👋🏻
        </p>
      </div> */}
    </>
  );
};

export default Header;
