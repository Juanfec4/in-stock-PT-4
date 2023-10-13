import { useState, useEffect } from 'react'
import './edit.scss'
import axios from 'axios'

function Edit() {
  const [name, setName] = useState('')
  const [adress, setStreetAddress] = useState('')
  const [cityname, setCityName] = useState('')
  const [country, setCountry] = useState('')
  const [contactName, setContactName] = useState('')
  const [position, setPosition] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')

  const WarehouseName = (event) => {
    setName(event.target.value)
  }

  const streetAddress = (event) => {
    setStreetAddress(event.target.value)
  }
  const cityNameWarehouse = (event) => {
    setCityName(event.target.value)
  }
  const countryNameWarehouse = (event) => {
    setCountry(event.target.value)
  }
  const contactNameDetails = (event) => {
    setContactName(event.target.value)
  }

  const positionDetails = (event) => {
    setPosition(event.target.value)
  }
  const numberDetails = (event) => {
    setNumber(event.target.value)
  }

  const emailDetails = (event) => {
    setEmail(event.target.value)
  }

  const handleFormSubmit = (event) => {
    axios
      .put(`http://192.168.0.190:8080/api/inventories/${'2'}`)
      .then((response) => {
        console.log(response).catch((error) => {
          console.error
        })
      }, [])
    event.preventDefault()
    console.log(event.target)
  }
  return (
    <div className="container__entire-form">
      <div className="Edit_Warehouse-div">
        <h1 className="edit__container-title">Edit Warehouse</h1>
      </div>
      <hr></hr>
      <div className="entire__form-container">
        <div className="edit__container--form">
          <h1 className="edit__container--subtitle">Warehouse Details </h1>

          <form className="form" onSubmit={handleFormSubmit}>
            <label>
              {' '}
              <p className="title_containers--edit">Warehouse Name</p>
              <input
                className="inputs__container"
                onChange={WarehouseName}
                type={'text'}
                name={'Warehouse name'}
                placeholder={'Warehouse Name'}
                value={name}
              ></input>
            </label>
            <label>
              {' '}
              <p className="title_containers--edit">Street Address</p>
              <input
                className="inputs__container"
                onChange={streetAddress}
                type={'text'}
                name={'Street Address'}
                placeholder={'Street Address '}
                value={adress}
              ></input>
            </label>
            <label>
              {' '}
              <p className="title_containers--edit">City</p>
              <input
                className="inputs__container"
                onChange={cityNameWarehouse}
                type={'text'}
                name={'Name of your city'}
                placeholder={'Name of your City'}
                value={cityname}
              ></input>
            </label>
            <label>
              {' '}
              <p className="title_containers--edit">Country</p>
              <input
                className="inputs__container"
                onChange={countryNameWarehouse}
                type={'text'}
                name={'Name of your Country'}
                placeholder={'Name of your Country'}
                value={country}
              ></input>
            </label>
          </form>
        </div>
        <hr></hr>
        <div className="container__contact">
          <h3 className="contact_details-div">Contact Details </h3>

          <form className="form__div" onSubmit={handleFormSubmit}>
            <label>
              {' '}
              <p className="title_containers--edit">Contact Name</p>
              <input
                className="inputs__container"
                onChange={contactNameDetails}
                type={'text'}
                name={'Warehouse name'}
                placeholder={'Warehouse Name'}
                value={contactName}
              ></input>
            </label>
            <label>
              {' '}
              <p className="title_containers--edit">Position</p>
              <input
                className="inputs__container"
                onChange={positionDetails}
                type={'text'}
                name={'Warehouse name'}
                placeholder={'Warehouse Name'}
                value={position}
              ></input>
            </label>
            <label>
              {' '}
              <p className="title_containers--edit">Phone Number</p>
              <input
                className="inputs__container"
                onChange={numberDetails}
                type={'text'}
                name={'Warehouse name'}
                placeholder={'Warehouse Name'}
                value={number}
              ></input>
            </label>
            <label>
              {' '}
              <p className="title_containers--edit">Email </p>
              <input
                className="inputs__container"
                onChange={emailDetails}
                type={'text'}
                name={'Warehouse name'}
                placeholder={'Warehouse Name'}
                value={email}
              ></input>
            </label>
          </form>
        </div>
      </div>
      <div className="container__buttons--div">
        <div className="container__btn--cancel">
          <button type="submit" className="cancel__btn">
            Cancel{' '}
          </button>
        </div>
        <div className="container--btn--save">
          <button type="submit" className="save__btn">
            Save{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Edit

// Create a hook to Edit:
// const [Editing, setEditing] = React.useState(null)
// const [EditingText, setEditingText] = React.useState('')
// On Button add onClick =>{()=> setEditingText(todo.id)}
// Add a FORM
// Control Component:
