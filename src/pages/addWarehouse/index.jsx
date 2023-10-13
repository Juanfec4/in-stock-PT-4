import { useEffect, useState } from "react";
import WarehouseForm from "../../components/ui/forms/warehouse";
import IconButton from "../../components/ui/buttons/icon";
import axios from "axios";
import backIcon from "../../assets/icons/arrow-back.svg";
import { useNavigate } from "react-router-dom";

import "./styles.scss";
import SecondaryButton from "../../components/ui/buttons/secondary";
import PrimaryButton from "../../components/ui/buttons/primary";
const AddWarehousePage = () => {
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState(undefined);
  const navigator = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACK_END_API}/warehouses`, formData)
      .then((response) => {
        if (response.status === 201) {
          navigator("../warehouses");
        }
      })
      .catch((e) => {
        setFormError(e.response.data.message);
      });
  };
  return (
    <div className="add-warehouse">
      <section className="add-warehouse__head">
        <span className="add-warehouse__title-container">
          <IconButton
            icon={backIcon}
            handleClick={() => navigator("../warehouses")}
          />
          <h1>Add Warehouse</h1>
        </span>
      </section>
      <section>
        <WarehouseForm
          warehouseData={formData}
          handleChange={(newObj) => setFormData(newObj)}
        />
      </section>
      {formError ? <span className="form-error">*{formError}</span> : null}
      <section className="add-warehouse__button-section">
        <SecondaryButton
          innerText={"Cancel"}
          handleClick={() => navigator("../warehouses")}
        />
        <PrimaryButton
          innerText={"+ Add Warehouse"}
          handleClick={handleSubmitForm}
        />
      </section>
    </div>
  );
};
export default AddWarehousePage;
