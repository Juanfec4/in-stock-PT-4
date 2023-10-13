import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import backIcon from "../../assets/icons/arrow-back.svg";
import editIcon from "../../assets/icons/edit-icon.svg";
import IconButton from "../../components/ui/buttons/icon";
import PrimaryButton from "../../components/ui/buttons/primary";
import "./styles.scss";
import WarehouseInventoryTable from "../../components/ui/tables/warehouseInventory";

const WarehouseDetailsPage = () => {
  const [warehouse, setWarehouse] = useState(undefined);
  const [inventory, setInventory] = useState(undefined);

  const { id } = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`${import.meta.env.VITE_BACK_END_API}/warehouses/${id}`)
        .then((response) => {
          setWarehouse(response.data[0]);
        });
      axios
        .get(`${import.meta.env.VITE_BACK_END_API}/inventories/${id}`)
        .then((response) => {
          setInventory(response.data);
        });
    }
  }, [id]);
  const handleRemove = () => {
    axios
      .get(`${import.meta.env.VITE_BACK_END_API}/inventories/${id}`)
      .then((response) => {
        setInventory(response.data);
      });
  };
  return (
    <>
      {warehouse ? (
        <>
          <div className="warehouse-info">
            <section className="warehouse-info__head">
              <span className="warehouse-info__title-container">
                <IconButton
                  icon={backIcon}
                  handleClick={() => navigator("../warehouses")}
                />
                <h1>{warehouse.warehouse_name}</h1>
              </span>
              <PrimaryButton
                innerText={"Edit"}
                icon={editIcon}
                handleClick={() =>
                  navigator(`../warehouses/edit/${warehouse.id}`)
                }
              />
            </section>
          </div>
          <div className="warehouse-details">
            <div className="warehouse-location">
              <div className="warehouse-details__container">
                <h4 className="warehouse-details__title">WAREHOUSE ADDRESS:</h4>
                <p className="warehouse-details__text">{warehouse.address},</p>
                <p className="warehouse-details__text">
                  {warehouse.city},{warehouse.country}
                </p>
              </div>
            </div>
            <div className="warehouse-contact">
              <div className="warehouse-details__container">
                <h4 className="warehouse-details__title">CONTACT NAME:</h4>
                <p className="warehouse-details__text">
                  {warehouse.contact_name},
                </p>
                <p className="warehouse-details__text">
                  {warehouse.contact_position}
                </p>
              </div>
              <div className="warehouse-details__container">
                <h4 className="warehouse-details__title">
                  CONTACT INFORMATION:
                </h4>
                <p className="warehouse-details__text">
                  {warehouse.contact_phone},
                </p>
                <p className="warehouse-details__text">
                  {warehouse.contact_email}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {inventory ? (
        <WarehouseInventoryTable
          inventory={inventory}
          handleRemove={handleRemove}
        />
      ) : null}
    </>
  );
};
export default WarehouseDetailsPage;
