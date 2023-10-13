import "./styles.scss";
import alertIcon from "../../../../assets/icons/error-icon.svg";
import { useState } from "react";
const TextAreaInput = ({
  value,
  handleChange,
  placeholderText,
  labelText,
  fieldId,
  isRequired,
}) => {
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <div className="text-area">
      <label htmlFor={fieldId} className="text-area__label">
        {labelText}
      </label>
      <textarea
        type="text"
        id={fieldId}
        placeholder={placeholderText}
        onChange={handleChange}
        onInvalid={() => setIsInvalid(true)}
        required={isRequired || false}
        className={`text-area__input${isInvalid ? "--alert" : ""}`}
        rows="4"
        cols="50"
        value={value}
      ></textarea>
      {isInvalid ? (
        <span className="text-area__alert">
          <img src={alertIcon} className="text-area__icon" /> This field is
          required
        </span>
      ) : null}
    </div>
  );
};

export default TextAreaInput;
