import { useState } from 'react'
import './edit.scss'

function Edit() {
  const [name, setName] = useState('')
  const [adress, setStreetAddress] = useState('')
  const [cityname, setCityName] = useState('')
  const [country, setCountry] = useState('')

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

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(event.target)
  }

  return (
    <div>
      <h2 className="edit__container-title">Edit Warehouse</h2>
      <hr></hr>
      <h3 className="edit__container--subtitle">Warehouse Details </h3>
      <div className="edit__container--form">
        <form className="form" onSubmit={handleFormSubmit}>
          <label>
            {' '}
            <p>Warehouse Name</p>
            <input
              onChange={WarehouseName}
              type={'text'}
              name={'Warehouse name'}
              placeholder={'Warehouse Name'}
              value={name}
            ></input>
          </label>
          <label>
            {' '}
            <p>Street Address</p>
            <input
              onChange={streetAddress}
              type={'text'}
              name={'Street Address'}
              placeholder={'Street Address '}
              value={adress}
            ></input>
          </label>
          <label>
            {' '}
            <p>City</p>
            <input
              onChange={cityNameWarehouse}
              type={'text'}
              name={'Name of your city'}
              placeholder={'Name of your City'}
              value={cityname}
            ></input>
          </label>
          <label>
            {' '}
            <p>Country</p>
            <input
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
      <h3>Contact Details </h3>
      <form onSubmit={handleFormSubmit}>
        <label>
          {' '}
          <p>Contact Name</p>
          <input
            type={'text'}
            name={'Warehouse name'}
            placeholder={'Warehouse Name'}
          ></input>
        </label>
        <label>
          {' '}
          <p>Position</p>
          <input
            type={'text'}
            name={'Warehouse name'}
            placeholder={'Warehouse Name'}
          ></input>
        </label>
        <label>
          {' '}
          <p>Phone Number</p>
          <input
            type={'text'}
            name={'Warehouse name'}
            placeholder={'Warehouse Name'}
          ></input>
        </label>
        <label>
          {' '}
          <p>Email </p>
          <input
            type={'text'}
            name={'Warehouse name'}
            placeholder={'Warehouse Name'}
          ></input>
        </label>
      </form>
      <div className="container__buttons--div">
        <div className="container__btn--cancel">
          <button type="submit" className="cancel__btn">
            Cancel{' '}
          </button>
        </div>
        <div className="container--btn--save">
          <button className="save__btn">Save </button>
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
