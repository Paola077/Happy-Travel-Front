import React from "react";
import HeaderUser from "../components/header/HeaderUser";
import DestinationCardUser from "../components/card/DestinationCardUser";

import images from "../../public/assets/images.jpg";
	

const Home = () => {
    return(
        <>
            <HeaderUser />
            <DestinationCardUser
        imageSrc={images}
        title="Islas Azores"
        subtitle="Portugal"
      />
        </>
    )
}

export default Home;
