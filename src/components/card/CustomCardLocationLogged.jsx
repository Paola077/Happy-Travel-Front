import DeleteButton from "../buttons/DeleteButton";
import EditButton from "../buttons/EditButton";

function CustomCardLocationLogged({ urlImage, title, location, description, id }) {
    
    return (
        <div className="flex justify-center items-center" style={{ paddingTop: '5rem', paddingLeft: '1.25rem' }}>
            <div className="w-[34.813rem] h-[34.75rem] flex-shrink-0 ml-[3.125rem]">
            <img
                src={urlImage || 'public/assets/images.jpg'}
                alt={title || 'Default Title'}
                className="w-full h-[34.75rem] rounded-[1.25rem] object-cover"
            />
            </div>
            <div className="w-[33.688rem] h-[34.75rem] flex flex-col space-y-[0.313rem] ml-[3.125rem]">
            <div className="flex items-center justify-between" style={{ height: '6.95rem', width: '100%' }}>
                <div className="flex-grow" style={{ width: '45%' }}>
                <h2 className="text-[2.5rem] font-bold" style={{ color: '#FF0060' }}>
                    {title}
                </h2>
                <p className="text-[1.25rem]jaldi-regular"  style={{ color: '#FF0060' }}>
                    {location}
                </p>
                </div>
                <div className="flex items-center justify-end space-x-[0.5rem]" style={{ width: '55%' }}>
                <EditButton destinationId={id}/>
                <DeleteButton />
                </div>
            </div>
            <div className="flex-grow overflow-auto" style={{ height: '27.8rem' }}>
                <p className="text-[1.25rem] jaldi-regular" style={{ color: '#0079FF' }}>
                {description}
                </p>
            </div>
            </div>
        </div>
        );
    }
    
    export default CustomCardLocationLogged;