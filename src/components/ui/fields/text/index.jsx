import "./styles.scss";
import alertIcon from "../../../../assets/icons/error-icon.svg";
import { useState } from "react";
const TextInput = ({
  value,
  handleChange,
  placeholderText,
  labelText,
  fieldId,
  isRequired,
}) => {
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <div className="text-field">
      <label htmlFor={fieldId} className="text-field__label">
        {labelText}
      </label>
      <input
        type="text"
        id={fieldId}
        placeholder={placeholderText}
        value={value}
        onChange={handleChange}
        onInvalid={() => setIsInvalid(true)}
        required={isRequired || false}
        className={`text-field__input${isInvalid ? "--alert" : ""}`}
      />
      {isInvalid ? (
        <span className="text-field__alert">
          <img src={alertIcon} className="text-field__icon" /> This field is
          required
        </span>
      ) : null}
    </div>
  );
};

export default TextInput;
