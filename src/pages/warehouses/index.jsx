import { useEffect, useState } from "react";
import PrimaryButton from "../../components/ui/buttons/primary";
import SearchInput from "../../components/ui/fields/search";
import "./styles.scss";
import axios from "axios";
import WarehouseTable from "../../components/ui/tables/warehouses";
import { useNavigate } from "react-router-dom";
const WarehouseListPage = () => {
  const [originalWarehouses, setOriginalWarehouses] = useState(undefined);
  const [warehouses, setWarehouses] = useState(undefined);
  const [search, setSearch] = useState("");
  const navigator = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACK_END_API}/warehouses`)
      .then((response) => {
        const data = response.data;
        setOriginalWarehouses(data);
        setWarehouses(data);
      });
  }, []);

  const handleRemove = (id) => {
    setOriginalWarehouses(
      [...originalWarehouses].filter((warehouse) => warehouse.id !== id)
    );
    setWarehouses([...warehouses].filter((warehouse) => warehouse.id !== id));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search) {
      setWarehouses(
        [...originalWarehouses].filter((warehouse) =>
          warehouse.warehouse_name.toLowerCase().startsWith(search)
        )
      );
    } else {
      setWarehouses(originalWarehouses);
    }
  }, [search, originalWarehouses]);

  return (
    <div className="warehouse-list">
      <section className="warehouse-list__page-info">
        <h1 className="warehouse-list__title">Warehouses</h1>
        <span className="warehouse-list__info-container">
          <SearchInput
            placeholderText={"Search..."}
            value={search}
            handleChange={handleSearch}
          />
          <PrimaryButton
            innerText={"+ Add New Warehouse"}
            handleClick={() => navigator("../warehouses/add")}
          />
        </span>
      </section>
      <section>
        {warehouses ? (
          <WarehouseTable warehouses={warehouses} handleRemove={handleRemove} />
        ) : null}
      </section>
    </div>
  );
};
export default WarehouseListPage;
