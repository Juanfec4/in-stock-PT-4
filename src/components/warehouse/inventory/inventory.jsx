import React, { useState, useEffect } from "react";
import axios from "axios";

let inventoryAPI = "";
let selectAPI = "";
const inventoryLister = () => {
    const [selectedWarehouse, setSelectedWarehouse] = useState({});
    const [inventoryList, setInventoryList] = useState({    
    id: "",
    name: "",
    category: "",
    status: 0,
    quantity: 0,
  })};
  useEffect(() => {
    axios.get(inventoryAPI)
      .then((response) => {
        const data = response.data;
        if (data.length > 0) {
          setInventoryList(data);
          setSelectedWarehouse([0]);
          
          axios.get(`${selectedAPI}${id}`)
            .then((response) => {
              const data = response.data; 
              setSelectedWarehouse(data)
            })
            .catch((error) => {
              console.error("Error fetching warehouse", error);
            });
        }})});
        const handleItemSelect = (id) => {
            history.push("/$id/{itemID}");
          };
return (
  <div className="body">
    <Header />
    <div className="inventory">
      <div className="inventory-header">
        <h1>{selectedWarehouse.name}</h1>
        <div className="inventory-warehouse">
            <div className="inventory-warehouse__info">
                <div className="inventory-warehouse__info__address">
                    <h2>WAREHOUSE ADDRESS:</h2>
                    <h3>{selectedWarehouse.address}</h3>
                </div>
                <div className="inventory-warehouse__info__contact">
                    <h2>CONTACT NAME:</h2>
                    <h3>{selectedWarehouse.name}</h3>
                </div>
                <div className="inventory-warehouse-info__group">
                    <span className="inventory-warehouse__info__group__name">
                        {warehouseList.contactPhone}
                    </span>
                    <span className="inventory-warehouse-info__group__email">
                        {warehouseList.contactEmail}
                    </span>
                 </div>
            </div>
            
        </div>
        <div className="inventory-sort">
          <h4>WAREHOUSE</h4>
          <img>{/*import sort image here*/}</img>
          <h4>ADDRESS</h4>
          <img>{/*import sort image here*/}</img>
          <h4>CONTACT NAME</h4>
          <img>{/*import sort image here*/}</img>
          <h4>CONTACT INFORMATION</h4>
          <img>{/*import sort image here*/}</img>
          <h4>ACTIONS</h4>
        </div>
        <div className="inventory-list">
          <div className="inventory-list__item" key={inventoryList.id}>
            <button onClick={() => handleItemSelect(inventoryList.item)}>
              <h3>{inventoryList.item}</h3>
            </button>
            <div className="inventory-list__category">
              {inventoryList.category}
            </div>
            <div className="inventory-list__status">
              {inventoryList.status}
            </div>
            <div className="inventory-list__quantity">
                {inventoryList.quantity}
            </div>
            <div className="warehouse-list__item__actions"></div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default WarehouseLister;
