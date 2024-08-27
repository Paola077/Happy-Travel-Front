import DeleteButton from "../buttons/DeleteButton";
import EditButton from "../buttons/EditButton";
import InfoButton from "../buttons/InfoButton";

function DestinationCardUser({ imageSrc, title, subtitle }) {
return (
  <div className="w-[14rem] h-[17rem] rounded-lg shadow-lg overflow-hidden relative">
    <img src={imageSrc} alt={title} className="w-full h-[12rem] object-cover" />
    <div className="absolute top-2 right-2">
      <InfoButton />
    </div>
    <div className="bg-yellow-100 p-4 flex items-start justify-between">
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-bold text-blue-600">{title}</h3>
          <p className="text-sm text-blue-600">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center ml-3">
        <EditButton />
        <DeleteButton />
      </div>
    </div>
  </div>
);
}

export default DestinationCardUser;