import React from "react";
import HeaderUser from "../components/header/HeaderUser";
import CustomCardLocationLogged from "../components/card/CustomCardLocationLogged";
import images from '../../public/assets/images.jpg'


export const LocationLogged = () => {
    return(
        <>
            <HeaderUser />
            <CustomCardLocationLogged 
            imageSrc={images}
            title="Islas Azores"
            subtitle="Portugal"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut." />
        </>
    )
}