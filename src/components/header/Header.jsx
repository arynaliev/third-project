import React from "react";
import personalBrand from "../../assets/images/personal-brand.jpg";
import backgroundVideo from "../../assets/videos/background.mp4";

const Header = () => {
  return (
    <div>
      <img width="300px" src={personalBrand} alt="Personal Brand" />
      <video
        src={backgroundVideo}
        width={"400px"}
        typeof="video/mp4"
        controls
      ></video>
    </div>
  );
};

export default Header;
