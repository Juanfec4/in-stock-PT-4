import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IconButton from "../../components/ui/buttons/icon";
import backIcon from "../../assets/icons/arrow-back.svg";
import editIcon from "../../assets/icons/edit-icon.svg";
import PrimaryButton from "../../components/ui/buttons/primary";

import { useNavigate } from "react-router-dom";
import "./styles.scss";
import InStockTag from "../../components/ui/tags/inStock";
import OutOfStockTag from "../../components/ui/tags/outOfStock";

const ItemPage = () => {
  const [itemData, setItemData] = useState(undefined);
  const { id } = useParams();
  const navigator = useNavigate();
  useEffect(() => {
    if (id) {
      axios
        .get(`${import.meta.env.VITE_BACK_END_API}/items/${id}`)
        .then((response) => {
          setItemData(response.data);
        });
    }
  }, [id]);

  console.log(itemData);
  return itemData ? (
    <>
      <div className="item-info">
        <section className="item-info__head">
          <span className="item-info__title-container">
            <IconButton
              icon={backIcon}
              handleClick={() =>
                navigator(`../warehouses/${itemData.warehouse_id}`)
              }
            />
            <h1>{itemData.item_name}</h1>
          </span>
          <PrimaryButton
            innerText={"Edit"}
            icon={editIcon}
            handleClick={() => navigator(`../inventory/edit/${itemData.id}`)}
          />
        </section>
      </div>
      <div className="item-details">
        <div className="item-details__section">
          <div className="item-details__element">
            <h4 className="item-details__title">ITEM DESCRIPTION:</h4>
            <p className="item-details__text">{itemData.description}</p>
          </div>
          <div className="item-details__element">
            <h4 className="item-details__title">CATEGORY:</h4>
            <p className="item-details__text">{itemData.category}</p>
          </div>
        </div>
        <div className="item-details__section">
          <span className="item-details__group-container">
            <div className="item-details__element">
              <h4 className="item-details__title">STATUS:</h4>
              {itemData.status === "In Stock" ? (
                <InStockTag />
              ) : (
                <OutOfStockTag />
              )}
            </div>
            <div className="item-details__element">
              <h4 className="item-details__title">QUANTITY:</h4>
              <p className="item-details__text">{itemData.quantity}</p>
            </div>
          </span>
          <div className="item-details__element">
            <h4 className="item-details__title">WAREHOUSE:</h4>
            <p className="item-details__text">{itemData.warehouse_name}</p>
          </div>
        </div>
      </div>
    </>
  ) : null;
};
export default ItemPage;
