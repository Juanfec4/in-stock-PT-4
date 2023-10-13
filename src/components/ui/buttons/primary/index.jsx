import "./styles.scss";

//HandleClick type: function, innerText type:string
const PrimaryButton = ({ handleClick, innerText, icon }) => {
  return (
    <button className="button--primary" onClick={handleClick}>
      {icon ? <img src={icon} className="button__icon" /> : null}
      {innerText}
    </button>
  );
};

export default PrimaryButton;
