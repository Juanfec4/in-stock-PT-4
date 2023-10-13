import "./styles.scss";
import chevronIcon from "../../../../assets/icons/chevron-right.svg";
const TextLink = ({ text, handleClick }) => {
  return (
    <div className="text-link" onClick={handleClick}>
      {text}
      <span className="text-link__img-container">
        <img src={chevronIcon} className="text-link__img" />
      </span>
    </div>
  );
};

export default TextLink;
