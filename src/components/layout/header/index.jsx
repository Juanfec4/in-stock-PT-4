import siteLogo from "../../../assets/images/in-stock-logo.svg";
import { NavLink } from "react-router-dom";

import "./styles.scss";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__content">
          <img src={siteLogo} className="header__logo" />
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-element">
                <NavLink to={"/warehouses"} className="header__link">
                  Warehouses
                </NavLink>
              </li>
              <li className="header__nav-element">
                <NavLink to={"/inventory"} className="header__link">
                  Inventories
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__backdrop"></div>
      </header>
    </>
  );
};
export default Header;
