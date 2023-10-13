import "./styles.scss";
const IconButton = ({ icon, handleClick }) => {
  return (
    <button onClick={handleClick} className="icon-button">
      <img src={icon} className="icon-button__icon" />
    </button>
  );
};
export default IconButton;
