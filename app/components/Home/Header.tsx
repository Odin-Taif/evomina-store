import { FunctionComponent } from "react";
import React, { useEffect } from "react";
import BackgroundImg from "../../../public/header-background.webp";

const Header: FunctionComponent = () => {
  return (
    <>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat m-auto"
        style={{
          backgroundPosition: "50%",
          backgroundImage: `url(${BackgroundImg.src})`,
          height: "300px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        ></div>
      </div>
    </>
  );
};

export default Header;
