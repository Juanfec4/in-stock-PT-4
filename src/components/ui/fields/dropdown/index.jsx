import { useState } from "react";
import "./styles.scss";
import downIcon from "../../../../assets/icons/arrow-down.svg";
const DropdownInput = ({
  value,
  options,
  handleChange,
  labelText,
  fieldId,
  isRequired,
}) => {
  const [isInvalid, setIsInvalid] = useState(false);
  return (
    <div className="select-field">
      <label htmlFor={fieldId} className="select-field__label">
        {labelText}
      </label>
      <span className="select-field__input-container">
        <select
          id={fieldId}
          value={value || "default"}
          className="select-field__input"
          name={fieldId}
          onChange={handleChange}
          onInvalid={() => setIsInvalid(true)}
          required={isRequired || false}
        >
          <option value="default" className="select-field__option" disabled>
            Please select
          </option>
          {options
            ? options.map((option) => {
                return (
                  <option
                    value={option.value}
                    className="select-field__option"
                    key={option.value}
                  >
                    {option.content}
                  </option>
                );
              })
            : null}
        </select>
        <img src={downIcon} className="select-field__drop-icon" />
      </span>
      {isInvalid ? (
        <span className="select-field__alert">
          <img src={alertIcon} className="select-field__icon" /> This field is
          required
        </span>
      ) : null}
    </div>
  );
};

export default DropdownInput;
