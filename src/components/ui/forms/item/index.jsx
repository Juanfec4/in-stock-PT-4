import { useEffect, useState } from "react";
import DropdownInput from "../../fields/dropdown";
import SelectionInput from "../../fields/selection";
import TextInput from "../../fields/text";
import TextAreaInput from "../../fields/textarea";
import axios from "axios";
import "./styles.scss";

const InventoryForm = ({ inventoryData, handleChange }) => {
  const [warehouses, setWarehouses] = useState(undefined);
  const [categories, setCategories] = useState(undefined);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACK_END_API}/warehouses`)
      .then((response) => {
        let result = response.data.map((warehouse) => {
          return {
            content: warehouse.warehouse_name,
            value: warehouse.id,
          };
        });
        setWarehouses(result);
      });
    axios
      .get(`${import.meta.env.VITE_BACK_END_API}/categories`)
      .then((response) => {
        let result = response.data.categories.map((category) => {
          return {
            content: category,
            value: category,
          };
        });
        setCategories(result);
      });
  }, []);
  return inventoryData ? (
    <form className="add-item-form">
      <div className="add-item-form__section">
        <h2 className="add-item-form__title">Item Details</h2>
        <TextInput
          labelText={"Item Name"}
          value={inventoryData.item_name}
          fieldId={"item-name"}
          placeholderText={"Item Name"}
          isRequired={true}
          handleChange={(e) =>
            handleChange({ ...inventoryData, item_name: e.target.value })
          }
        />
        <TextAreaInput
          labelText={"Description"}
          value={inventoryData.description}
          fieldId={"item-description"}
          placeholderText={"Description"}
          isRequired={true}
          handleChange={(e) =>
            handleChange({ ...inventoryData, description: e.target.value })
          }
        />
        <DropdownInput
          labelText={"Category"}
          value={inventoryData.category}
          fieldId={"item-category"}
          isRequired={true}
          handleChange={(e) =>
            handleChange({ ...inventoryData, category: e.target.value })
          }
          options={categories}
        />
      </div>
      <div className="divider--vertical"></div>
      <div className="add-item-form__section">
        <h2 className="add-item-form__title">Item Availability</h2>
        <SelectionInput
          label={"Status"}
          value={inventoryData.status}
          fieldId={"item-status"}
          options={["In Stock", "Out of Stock"]}
          handleChange={(e) => {
            handleChange({ ...inventoryData, status: e.target.value });
          }}
        />
        {inventoryData.status === "In Stock" ? (
          <TextInput
            labelText={"Quantity"}
            value={inventoryData.quantity}
            fieldId={"item-quantity"}
            placeholderText={"Qty"}
            isRequired={true}
            handleChange={(e) =>
              handleChange({ ...inventoryData, quantity: e.target.value })
            }
          />
        ) : null}
        <DropdownInput
          labelText={"Warehouse"}
          value={inventoryData.warehouse_id}
          fieldId={"item-warehouse"}
          isRequired={true}
          handleChange={(e) => {
            console.log(e);
            return handleChange({
              ...inventoryData,
              warehouse_id: e.target.value,
            });
          }}
          options={warehouses}
        />
      </div>
    </form>
  ) : null;
};
export default InventoryForm;
