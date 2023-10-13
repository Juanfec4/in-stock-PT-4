import { useState } from "react";
import "./styles.scss";
const SelectionInput = ({ value, label, fieldId, handleChange, options }) => {
  const [selectedOption, setSelectedOption] = useState(value);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    handleChange(e);
  };

  return (
    <div className="selection">
      <label htmlFor={fieldId} className="selection__label">
        {label}
      </label>
      <fieldset className="selection__fieldset" id={fieldId}>
        {options
          ? options.map((option, i) => (
              <div key={i} className="selection__item">
                <input
                  type="radio"
                  id={option}
                  checked={selectedOption === option}
                  value={option}
                  onChange={handleOptionChange}
                  className="selection__input"
                />
                <label htmlFor={option} className="selection__label">
                  {option}
                </label>
              </div>
            ))
          : null}
      </fieldset>
    </div>
  );
};

export default SelectionInput;
