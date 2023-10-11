import './delete.scss'

function Delete() {
  return (
    <div className="delete__container">
      <button className="delete__button-x">
        X
      </button>
      <div className="container__delete">
        <div className="delete__container-title">
          <h2 className="delete__container-title-paragraph">
            Delete Washington warehouse?
          </h2>
        </div>
        <div className="delete__container-paragraph">
          <p className="delete__container-p">
            Please confirm that you'd like to delete the Washignton from the
            list of warehouses. You won't be able to undo this action.
          </p>
        </div>
        <div className="container__delete--buttons">
          <div className="delete__container-btn">
            <button className="buttonCancel">Cancel</button>
          </div>
          <div className="delete__container-btn1">
            <button className="buttonDelete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Delete

//function Header() {
// Pop an alert mentioning: Are you sure you wanna delete it.
// On Click Handler near the button (icon) delete and run a function Delete item //<button onClick={() => deleteItems(items.id)}>Delete</button> // You write this part on RETURN
// Create a function deleteItems(id) =>{
// const updateItems = [...Items].filter((items)=>items.id !== id)
// setItems(updateItems)
// }
//}
// Delete Washington warehouse? Please confirm that you'd like to delete the Washington from the list of warehouse. You won't be able to undo this action
// Button CANCEL
// Button DELETE
