import { useEffect, useState } from "react";
import WarehouseForm from "../../components/ui/forms/warehouse";
import IconButton from "../../components/ui/buttons/icon";
import axios from "axios";
import backIcon from "../../assets/icons/arrow-back.svg";
import { useNavigate, useParams } from "react-router-dom";

import "./styles.scss";
import SecondaryButton from "../../components/ui/buttons/secondary";
import PrimaryButton from "../../components/ui/buttons/primary";
const EditWarehousePage = () => {
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState(undefined);
  const navigator = useNavigate();
  const { id } = useParams();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_BACK_END_API}/warehouses/${id}`, formData)
      .then((response) => {
        if (response.status === 200) {
          navigator("../warehouses");
        }
      })
      .catch((e) => {
        setFormError(e.response.data.message);
      });
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`${import.meta.env.VITE_BACK_END_API}/warehouses/${id}`)
        .then((response) => {
          setFormData(response.data[0]);
        });
    }
  }, [id]);

  return (
    <div className="add-warehouse">
      <section className="add-warehouse__head">
        <span className="add-warehouse__title-container">
          <IconButton
            icon={backIcon}
            handleClick={() => navigator("../warehouses")}
          />
          <h1>Edit Warehouse</h1>
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
          innerText={"Edit Warehouse"}
          handleClick={handleSubmitForm}
        />
      </section>
    </div>
  );
};
export default EditWarehousePage;
