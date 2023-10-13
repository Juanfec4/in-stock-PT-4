import searchIcon from "../../../../assets/icons/search-icon.svg";
import "./styles.scss";
const SearchInput = ({ value, handleChange, placeholderText }) => {
  return (
    <span className="search-box">
      <input
        type="text"
        placeholder={placeholderText}
        value={value}
        onChange={handleChange}
        className="search-box__input"
      />
      <img src={searchIcon} className="search-box__icon" />
    </span>
  );
};
export default SearchInput;
