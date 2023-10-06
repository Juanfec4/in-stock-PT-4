import './header.scss'
import logo from '../../assets/InStock-Logo.svg'

function Header() {
  return (
    <div className="header__container-navigation">
      <div className="header_container-image">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="header_container-items">
        <div>
          <p className="header_container-item">Warehouse</p>
        </div>
        <div>
          <p className="header_container-item1">Inventory</p>
        </div>
      </div>
    </div>
  )
}

export default Header
