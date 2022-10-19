import photo from "../images/image.jpg";

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
    </>
  );
};

export default Header;
