import React from "react";
import personalBrand from "../../assets/images/personal-brand.jpg";
import backgroundVideo from "../../assets/videos/background.mp4";
import CustomButton from "../customButton/CustomButton";

export const Header = () => {
  return (
    <div>
      <img width="300px" src={personalBrand} alt="Personal Brand" />
      <video
        src={backgroundVideo}
        width={"100%"}
        typeof="video/mp4"
        z-index={"-1"}
        controls
        autoPlay
        loop
      ></video>
      <br />
      <CustomButton text="Play the video" />
    </div>
  );
};

// export default Header;
