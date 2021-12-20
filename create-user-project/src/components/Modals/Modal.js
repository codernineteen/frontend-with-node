import "./Modal.css";

const Modal = (props) => {
  const exitHandler = () => {
    props.onIsValid(true, "");
  };

  return (
    <div className="modal-background">
      <div className="modal-body">
        <div className="modal-title">Invalid input</div>
        <div className="modal-content">{props.content}</div>
        <button className="exit" onClick={exitHandler}>
          Okay
        </button>
      </div>
    </div>
  );
};

export default Modal;
