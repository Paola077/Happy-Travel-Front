
const AcceptCancelButtons = ({onClickAccept, onClickCancel}) => {
    return (
        <div className="w-[15.625rem] flex justify-around">
            <AcceptButton onClick={onClickAccept}/>
            <CancelButton onClick={onClickCancel}/>
        </div>
    )
}

export default AcceptCancelButtons