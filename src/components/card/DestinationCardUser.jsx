import DeleteButton from "../buttons/DeleteButton";
import EditButton from "../buttons/EditButton";
import InfoButton from "../buttons/InfoButton";


function DestinationCardUser({ destination, currentUser }) {
    const userId = sessionStorage.getItem('userId');
    const isAuthenticated = !!currentUser;
    const isCreator = userId && destination.user && destination.user.id === parseInt(userId, 10);



    return (
        <div className="bg-yellow-100 w-[18.75rem] h-[23.313rem] rounded-[1.25rem] shadow-lg overflow-hidden relative">
            <img src={destination.url_image} alt={destination.title} className="w-full h-[18.75rem] rounded-[1.25rem] object-cover" />
            {isAuthenticated && (
                <div className="absolute top-2 right-2">
                    <InfoButton />
                </div>
            )}
            <div className="p-4 flex justify-between">
                <div className="flex flex-col justify-between flex-grow">
                    <div>
                        <h2 className="text-lg font-bold text-blue-600">{destination.title}</h2>
                        <p className="text-sm text-blue-600">{destination.location}</p>
                    </div>
                </div>
                {isCreator && ( 
                    <div className="w-[5.063rem] h-[2.50rem] flex justify-between">
                        <EditButton />
                        <DeleteButton />
                    </div>
                )}
            </div>
        </div>
    );
}

export default DestinationCardUser;