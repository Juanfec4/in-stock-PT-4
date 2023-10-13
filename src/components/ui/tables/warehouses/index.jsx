import IconButton from "../../buttons/icon";
import TextLink from "../../links/text";
import deleteIcon from "../../../../assets/icons/delete-icon.svg";
import editIcon from "../../../../assets/icons/edit-icon.svg";

import { useNavigate } from "react-router-dom";

import "./styles.scss";
import { useState } from "react";
import DeleteModal from "../../modals/delete";
import axios from "axios";

const WarehouseTable = ({ warehouses, handleRemove }) => {
  const [deleteElement, setDeleteElement] = useState(undefined);
  const navigator = useNavigate();

  const handleDelete = (warehouse) => {
    setDeleteElement(warehouse);
  };

  const handleCancel = () => {
    setDeleteElement(undefined);
  };

  const handleConfirmDelete = () => {
    axios
      .delete(
        `${import.meta.env.VITE_BACK_END_API}/warehouses/${deleteElement.id}`
      )
      .then((response) => {
        if (response.status === 204) {
          setDeleteElement(undefined);
          handleRemove(deleteElement.id);
        }
      });
  };
  return (
    <>
      <table className="warehouses-table">
        <thead className="warehouses-table__head">
          <tr className="warehouses-table__row">
            <th className="warehouses-table__title">WAREHOUSE</th>
            <th className="warehouses-table__title">ADDRESS</th>
            <th className="warehouses-table__title">CONTACT NAME</th>
            <th className="warehouses-table__title">CONTACT INFORMATION</th>
            <th className="warehouses-table__title">ACTIONS</th>
          </tr>
        </thead>
        <tbody className="warehouses-table__body">
          {warehouses.map((warehouse) => {
            return (
              <tr key={warehouse.id} className="warehouses-table__row">
                <td className="warehouses-table__cell">
                  <TextLink
                    text={warehouse.warehouse_name}
                    handleClick={() => navigator(`./${warehouse.id}`)}
                  />
                </td>
                <td className="warehouses-table__cell">
                  <p>
                    {warehouse.address}, {warehouse.city}, {warehouse.country}
                  </p>
                </td>
                <td className="warehouses-table__cell">
                  <p>{warehouse.contact_name}</p>
                </td>
                <td className="warehouses-table__cell">
                  <p>{warehouse.contact_phone}</p>
                  <p>{warehouse.contact_email}</p>
                </td>
                <td className="warehouses-table__cell">
                  <IconButton
                    icon={deleteIcon}
                    handleClick={() => handleDelete(warehouse)}
                  />
                  <IconButton
                    icon={editIcon}
                    handleClick={() =>
                      navigator(`../warehouses/edit/${warehouse.id}`)
                    }
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {deleteElement ? (
        <DeleteModal
          itemName={deleteElement.warehouse_name}
          titleMessage={"warehouse"}
          listMessage={"list of warehouses"}
          handleCancel={handleCancel}
          handleDelete={handleConfirmDelete}
        />
      ) : null}
    </>
  );
};

export default WarehouseTable;
