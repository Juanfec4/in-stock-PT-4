import './styles.scss'


function Header() {
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

export default Header
