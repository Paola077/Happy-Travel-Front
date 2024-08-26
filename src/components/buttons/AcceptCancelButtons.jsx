
import AcceptButton from "../buttons/AcceptButton";
import CancelButton from "../buttons/CancelButton";

const AcceptCancelButtons = ({onClickAccept, onClickCancel, type}) => {
    return (
        <div className="w-[15.625rem] flex justify-around">
            <AcceptButton onClick={onClickAccept} type={type} />
            <CancelButton onClick={onClickCancel} type="button"/>
        </div>
    )
}

export default AcceptCancelButtons