import './styles.scss'
import logo from '../../assets/InStock-Logo.svg'

function header() {
  return (
    <div className="header__container-navigation">
      <div className="header_container-image">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div>
        <p>Warehouse</p>
      </div>
      <div>
        <p>Inventory</p>
      </div>
    </div>
  )
}

export default header
