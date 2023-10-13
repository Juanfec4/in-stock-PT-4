import "./styles.scss";

//HandleClick type: function, innerText type:string
const SecondaryButton = ({ handleClick, innerText }) => {
  return (
    <button className="button--secondary" onClick={handleClick}>
      {innerText}
    </button>
  );
};

export default SecondaryButton;
