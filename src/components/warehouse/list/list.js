import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

let listAPI = //"PUT LIST API HERE"
let selectAPI = //"apilink/ID"
const warehouseList = () => {
    const [warehouseList, setWarehouseList] = useState({
        warehouse:"",
        address:"",
        contactName:"",
        contactEmail:"",
        contactPhone:"",
        id: 0,
    });
}
useEffect(() => {
    axios.get(listAPI)
        .then((response) => {
            const date = response.data;
            if (data.length > 0 ) {
                setWarehouseList(data);
            }
        })
        .catch((error) =>{
        console.error("Error fetching warehouses", error)
    },)})


const handleWarehouseSelect = (warehouse) => {
    <Link
        to={{
            pathname: `/details/${warehouseList.id}`,
            state: {id: id}
        }}/>;
}
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
            <img{/*import SORT image*/} />
            <h4>ADDRESS</h4>
            <h4>CONTACT NAME</h4>
            <h4>CONTACT INFORMATION</h4>
            <h4>ACTIONS</h4>
        </div>
        <div className='warehouse-list'></div>
            <div className='warehouse-list__item'>
                <button><h3></h3></button>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
)