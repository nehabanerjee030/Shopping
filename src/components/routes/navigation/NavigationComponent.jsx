import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

import './navigation.styles.scss';

import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";

const NavBar = () => {
  return (
    <Fragment>
      <div className="navigation">
          <Link className="logo-container" to={"/"}>
            <CrownLogo />
          </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            {"SHOP"}
          </Link>
          <Link className="nav-link" to={"/cart"}>
            {"CART"}
          </Link>
          <Link className="nav-link" to={"/sign-in"}>
            {"SIGN IN"}
          </Link>
        </div>
      </div>
        <Outlet />
    </Fragment>
  );
};

export default NavBar;
