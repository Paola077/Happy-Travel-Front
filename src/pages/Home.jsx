import React from "react";
import DestinationCardUser from "../components/card/DestinationCardUser";
import HeaderUser from "../components/header/HeaderUser";
import images from "../../public/assets/images.jpg";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <HeaderUser />
      <DestinationCardUser
        imageSrc={images}
        title="Islas Azores"
        subtitle="Portugal"
      />
    </>
  );
};

export default Home;
