import IconButton from '../../buttons/icon'
import TextLink from '../../links/text'
import deleteIcon from '../../../../assets/icons/delete-icon.svg'
import editIcon from '../../../../assets/icons/edit-icon.svg'

import { useNavigate } from 'react-router-dom'

import './styles.scss'
import { useState } from 'react'
import DeleteModal from '../../modals/delete'
import axios from 'axios'

// eslint-disable-next-line react/prop-types
const WarehouseTable = ({ warehouses, handleRemove }) => {
  const [deleteElement, setDeleteElement] = useState(undefined)
  const navigator = useNavigate()

  const handleDelete = (warehouse) => {
    setDeleteElement(warehouse)
  }

  const handleCancel = () => {
    setDeleteElement(undefined)
  }

  const handleConfirmDelete = () => {
    axios
      .delete(
        `${import.meta.env.VITE_BACK_END_API}/warehouses/${deleteElement.id}`,
      )
      .then((response) => {
        if (response.status === 204) {
          setDeleteElement(undefined)
          handleRemove(deleteElement.id)
        }
      })
  }
  return (
    <>
      <table className="warehouses-table">
        <thead className="warehouses-table__head">
          <tr className="warehouses-table__row">
            <th className="warehouses-table__title">WAREHOUSE</th>
            <th className="warehouses-table__title">ADDRESS</th>
            <th className="warehouses-table__title">CONTACT NAME</th>
            <th className="warehouses-table__title">CONTACT INFORMATION</th>
            <th className="warehouses-table__title">ACTIONS</th>
          </tr>
        </thead>
        <tbody className="warehouses-table__body">
          {warehouses
            ? warehouses.map((warehouse) => {
                return (
                  <tr key={warehouse.id} className="warehouses-table__row">
                    <td className="warehouses-table__cell">
                      <p className="mobile__paragraph">WAREHOUSE</p>
                      <TextLink
                        text={warehouse.warehouse_name}
                        handleClick={() => navigator(`./${warehouse.id}`)}
                      />
                    </td>

                    <td className="warehouses-table__cell">
                      <p>
                        {' '}
                        <p className="mobile__paragraph">ADDRESS</p>
                      </p>
                      <p>
                        {warehouse.address}, {warehouse.city},{' '}
                        {warehouse.country}
                      </p>
                    </td>

                    <td className="warehouses-table__cell">
                      <p>
                        {' '}
                        <p className="mobile__paragraph">CONTACT NAME:</p>
                      </p>
                      <p>{warehouse.contact_name}</p>
                    </td>
                    <td className="warehouses-table__cell">
                      <p className="mobile__paragraph">CONTACT INFORMATION</p>
                      <p>{warehouse.contact_phone}</p>
                      <p>{warehouse.contact_email}</p>
                    </td>

                    <td className="warehouses-table__cell">
                      <IconButton
                        icon={deleteIcon}
                        handleClick={() => handleDelete(warehouse)}
                      />

                      <IconButton
                        icon={editIcon}
                        handleClick={() =>
                          navigator(`../warehouses/edit/${warehouse.id}`)
                        }
                      />
                    </td>
                  </tr>
                )
              })
            : null}
        </tbody>
      </table>
      {deleteElement ? (
        <DeleteModal
          itemName={deleteElement.warehouse_name}
          titleMessage={'warehouse'}
          listMessage={'list of warehouses'}
          handleCancel={handleCancel}
          handleDelete={handleConfirmDelete}
        />
      ) : null}
      <table className="warehouses-table1">
        <tbody className="warehouses-table__body">
          {warehouses.map((warehouse) => {
            return (
              <tr key={warehouse.id} className="warehouses-table__row">
                <div className="mobile__container">
                  <td className="warehouses-table__cell">
                    <p className="mobile__paragraph">WAREHOUSE</p>
                    <TextLink
                      text={warehouse.warehouse_name}
                      handleClick={() => navigator(`./${warehouse.id}`)}
                    />
                  </td>

                  <td className="warehouses-table__cell">
                    <p>
                      {' '}
                      <p className="mobile__paragraph">ADDRESS</p>
                    </p>
                    <p>
                      {warehouse.address}, {warehouse.city}, {warehouse.country}
                    </p>
                  </td>
                </div>
                <div className="mobile__container-div">
                  <td className="warehouses-table__cell">
                    <p>
                      {' '}
                      <p className="mobile__paragraph">CONTACT NAME:</p>
                    </p>
                    <p>{warehouse.contact_name}</p>
                  </td>
                  <td className="warehouses-table__cell">
                    <p className="mobile__paragraph">CONTACT INFORMATION</p>
                    <p>{warehouse.contact_phone}</p>
                    <p>{warehouse.contact_email}</p>
                  </td>
                </div>
                <div className="button_container">
                  <td className="warehouses-table__cell">
                    <IconButton
                      icon={deleteIcon}
                      handleClick={() => handleDelete(warehouse)}
                    />

                    <IconButton
                      icon={editIcon}
                      handleClick={() =>
                        navigator(`../warehouses/edit/${warehouse.id}`)
                      }
                    />
                  </td>
                </div>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default WarehouseTable
