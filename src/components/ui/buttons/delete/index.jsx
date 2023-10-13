import "./styles.scss";

//HandleClick type: function, innerText type:string
const DeleteButton = ({ handleClick, innerText }) => {
  return (
    <button className="button--delete" onClick={handleClick}>
      {innerText}
    </button>
  );
};

export default DeleteButton;
