import SearchInput from "../../components/ui/fields/search";
import PrimaryButton from "../../components/ui/buttons/primary";
import { useEffect, useState } from "react";
import "./styles.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InventoryTable from "../../components/ui/tables/inventory";

const InventoryPage = () => {
  const [search, setSearch] = useState(undefined);
  const [inventory, setInventory] = useState(undefined);
  const [originalInventory, setOriginalInventory] = useState(undefined);
  const navigator = useNavigate();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACK_END_API}/inventories`)
      .then((response) => {
        const data = response.data;
        setInventory(data);
        setOriginalInventory(data);
      });
  }, []);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleRemove = (id) => {
    setOriginalInventory(
      [...originalInventory].filter((item) => item.id !== id)
    );
    setInventory([...inventory].filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (search) {
      setInventory(
        [...originalInventory].filter((item) =>
          item.item_name.toLowerCase().startsWith(search)
        )
      );
    } else {
      setInventory(originalInventory);
    }
  }, [search, originalInventory]);

  return (
    <div className="inventory-list">
      <section className="inventory-list__page-info">
        <h1 className="inventory-list__title">Inventory</h1>
        <span className="inventory-list__info-container">
          <SearchInput
            placeholderText={"Search..."}
            value={search}
            handleChange={handleSearch}
          />
          <PrimaryButton
            innerText={"+ Add New Item"}
            handleClick={() => navigator("../inventory/add")}
          />
        </span>
      </section>
      <section>
        {inventory ? (
          <InventoryTable inventory={inventory} handleRemove={handleRemove} />
        ) : null}
      </section>
    </div>
  );
};
export default InventoryPage;
