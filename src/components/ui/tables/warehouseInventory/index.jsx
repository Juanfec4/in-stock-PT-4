import IconButton from "../../buttons/icon";
import TextLink from "../../links/text";
import deleteIcon from "../../../../assets/icons/delete-icon.svg";
import editIcon from "../../../../assets/icons/edit-icon.svg";
import { useState } from "react";
import DeleteModal from "../../modals/delete";
import { useNavigate } from "react-router-dom";

import "./styles.scss";
import InStockTag from "../../tags/inStock";
import OutOfStockTag from "../../tags/outOfStock";
import axios from "axios";

const WarehouseInventoryTable = ({ inventory, handleRemove }) => {
  const [deleteElement, setDeleteElement] = useState(undefined);
  const navigator = useNavigate();
  const handleDelete = (item) => {
    setDeleteElement(item);
  };

  const handleCancel = () => {
    setDeleteElement(undefined);
  };
  const handleConfirmDelete = () => {
    axios
      .delete(
        `${import.meta.env.VITE_BACK_END_API}/inventories/${deleteElement.id}`
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
      <table className="warehouse-inventory">
        <thead className="warehouse-inventory__head">
          <tr className="warehouse-inventory__row">
            <th className="warehouse-inventory__title">INVENTORY ITEM</th>
            <th className="warehouse-inventory__title">CATEGORY</th>
            <th className="warehouse-inventory__title">STATUS</th>
            <th className="warehouse-inventory__title">QUANTITY</th>
            <th className="warehouse-inventory__title">ACTIONS</th>
          </tr>
        </thead>
        <tbody className="warehouse-inventory__body">
          {inventory.map((item) => {
            return (
              <tr key={item.id} className="warehouse-inventory__row">
                <td className="warehouse-inventory__cell">
                  <TextLink
                    text={item.item_name}
                    handleClick={() => navigator(`../inventory/${item.id}`)}
                  />
                </td>
                <td className="warehouse-inventory__cell">
                  <p>{item.category}</p>
                </td>
                <td className="warehouse-inventory__cell">
                  {item.status === "In Stock" ? (
                    <InStockTag />
                  ) : (
                    <OutOfStockTag />
                  )}
                </td>
                <td className="warehouse-inventory__cell">
                  <p>{item.quantity}</p>
                </td>
                <td className="warehouse-inventory__cell">
                  <IconButton
                    icon={deleteIcon}
                    handleClick={() => handleDelete(item)}
                  />
                  <IconButton
                    icon={editIcon}
                    handleClick={() =>
                      navigator(`../inventory/edit/${item.id}`)
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
          itemName={deleteElement.item_name}
          titleMessage={"inventory item"}
          listMessage={"inventory list"}
          handleCancel={handleCancel}
          handleDelete={handleConfirmDelete}
        />
      ) : null}
    </>
  );
};

export default WarehouseInventoryTable;
