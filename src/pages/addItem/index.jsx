import IconButton from "../../components/ui/buttons/icon";
import PrimaryButton from "../../components/ui/buttons/primary";
import SecondaryButton from "../../components/ui/buttons/secondary";
import axios from "axios";
import backIcon from "../../assets/icons/arrow-back.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InventoryForm from "../../components/ui/forms/item";

import "./styles.scss";

const AddItemPage = () => {
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState(undefined);
  const navigator = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACK_END_API}/inventories`, formData)
      .then((response) => {
        if (response.status === 201) {
          navigator("../inventory");
        }
      })
      .catch((e) => {
        setFormError(e.response.data.message);
      });
  };
  return (
    <div className="add-item">
      <section className="add-item__head">
        <span className="add-item-container">
          <IconButton
            icon={backIcon}
            handleClick={() => navigator("../inventory")}
          />
          <h1>Add Item</h1>
        </span>
      </section>
      <section>
        <InventoryForm
          inventoryData={formData}
          handleChange={(newObj) => setFormData(newObj)}
        />
      </section>
      {formError ? <span className="form-error">*{formError}</span> : null}
      <section className="add-item__button-section">
        <SecondaryButton
          innerText={"Cancel"}
          handleClick={() => navigator("../inventory")}
        />
        <PrimaryButton
          innerText={"+ Add Item"}
          handleClick={handleSubmitForm}
        />
      </section>
    </div>
  );
};
export default AddItemPage;
