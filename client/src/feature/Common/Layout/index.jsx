import React from "react";
import PropTypes from "prop-types";
import { Cabinet } from "./components/Cabinet";
import { menuList } from "../../../config/menu";
import { connect } from "react-redux";

const LayoutContainer = (props) => {
  return (
    <Cabinet menuList={menuList} user={props.user}>
      {props.children}
    </Cabinet>
  );
};

LayoutContainer.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  logoutHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.signin.isAuth,
  user: state.auth.signin.user,
});

export const Layout = LayoutContainer;
