import TextInput from "../../fields/text";
import "./styles.scss";

const WarehouseForm = ({ warehouseData, handleChange }) => {
  return warehouseData ? (
    <form className="warehouse-form">
      <div className="warehouse-form__section">
        <h2 className="warehouse-form__section-title">Warehouse Details</h2>
        <TextInput
          labelText={"Warehouse Name"}
          placeholderText={"Warehouse Name"}
          value={warehouseData.warehouse_name}
          fieldId={"warehouse-name"}
          isRequired={true}
          handleChange={(e) =>
            handleChange({ ...warehouseData, warehouse_name: e.target.value })
          }
        />
        <TextInput
          labelText={"Street Address"}
          placeholderText={"Street Address"}
          value={warehouseData.address}
          fieldId={"warehouse-address"}
          isRequired={true}
          handleChange={(e) =>
            handleChange({ ...warehouseData, address: e.target.value })
          }
        />
        <TextInput
          labelText={"City"}
          placeholderText={"City"}
          value={warehouseData.city}
          fieldId={"warehouse-city"}
          isRequired={true}
          handleChange={(e) =>
            handleChange({ ...warehouseData, city: e.target.value })
          }
        />
        <TextInput
          labelText={"Country"}
          placeholderText={"Country"}
          value={warehouseData.country}
          fieldId={"warehouse-country"}
          isRequired={true}
          handleChange={(e) =>
            handleChange({ ...warehouseData, country: e.target.value })
          }
        />
      </div>
      <span className="divider--vertical"></span>
      <div className="warehouse-form__section">
        <h2 className="warehouse-form__section-title">Contact Details</h2>
        <TextInput
          labelText={"Contact Name"}
          placeholderText={"Contact Name"}
          value={warehouseData.contact_name}
          fieldId={"warehouse-contact-name"}
          isRequired={true}
          handleChange={(e) =>
            handleChange({ ...warehouseData, contact_name: e.target.value })
          }
        />
        <TextInput
          labelText={"Position"}
          placeholderText={"Position"}
          value={warehouseData.contact_position}
          fieldId={"warehouse-contact-position"}
          isRequired={true}
          handleChange={(e) =>
            handleChange({ ...warehouseData, contact_position: e.target.value })
          }
        />
        <TextInput
          labelText={"Phone Number"}
          placeholderText={"Phone Number"}
          value={warehouseData.contact_phone}
          fieldId={"warehouse-contact-phone"}
          isRequired={true}
          handleChange={(e) =>
            handleChange({ ...warehouseData, contact_phone: e.target.value })
          }
        />
        <TextInput
          labelText={"Email"}
          placeholderText={"Email"}
          value={warehouseData.contact_email}
          fieldId={"warehouse-contact-email"}
          isRequired={true}
          handleChange={(e) =>
            handleChange({ ...warehouseData, contact_email: e.target.value })
          }
        />
      </div>
    </form>
  ) : null;
};

export default WarehouseForm;
