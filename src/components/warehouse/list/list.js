import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

let listAPI = "";
let selectAPI = "";
const warehouseLister = () => {
    const [warehouseList, setWarehouseList] = useState([]);
    useEffect(() => {
        axios.get(listAPI)
            .then((response) => {
                const data = response.data;
                if (data.length > 0 ) {
                    setWarehouseList(data);
                }
            })
            .catch((error) =>{
            console.error("Error fetching warehouses", error)
        },)})
    }

const handleWarehouseSelect = (id) => {
    history.push('/details/$id');
};
return (
    <div className='body'>
    <Header/>
    <div className='warehouse'>
        <div className='warehouse-header'>
            <h1>Warehouses</h1>
            <form className='warehouse-header__search'>
                <input placeholder ="Search"></input>
                <input type ="submit">{/*import search image*/}</input>
            </form>
        <div className='warehouse-sort'>
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
        <div className='warehouse-list'>
            <div className='warehouse-list__item' key={warehouse.id}>
                <button onClick= {() => handleWarehouseSelect(warehouse.id)}>
                    <h3>{warehouseList.warehouse}</h3>
                </button>
                <div className='warehouse-list__item__address'>{warehouseList.address}</div>
                <div className='warehouse-list__item__name'>{warehouseList.contactName}</div>
                <div className='warehouse-list__item__group'>
                    <span className='warehouse-list__item__name'>{warehouseList.contactPhone}</span>
                    <span className='warehouse-list__item__email'>{warehouseList.contactEmail}</span>
                </div>
                <div className='warehouse-list__item__actions'>
                    
                </div>
            </div>
        </div>
        </div>
    </div>
    <Footer/>
    </div>
)

export default warehouseLister;