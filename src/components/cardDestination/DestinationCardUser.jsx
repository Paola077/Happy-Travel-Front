//import images from "..//../../public/assets/images.jpg";

function DestinationCardUser({ imageSrc, title, subtitle }) {
    return (
      <div className="w-[14rem] h-[17rem] rounded-lg shadow-lg overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-[12rem] object-cover" />
        <div className="bg-yellow-100 p-4">
          <h3 className="text-lg font-bold text-blue-600">{title="Islas Azores"}</h3>
          <p className="text-sm text-blue-600">{subtitle}</p>
        </div>
      </div>
    );
  }
  
  export default DestinationCardUser;
