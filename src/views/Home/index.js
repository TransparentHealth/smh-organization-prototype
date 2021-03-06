import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import LoginForm from "./../../components/LoginForm";

const Home = ({ auth, login }) => {
  if (auth === "true") {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <div className="container">
        <LoginForm login={login} />
      </div>
    </div>
  );
};

Home.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  login: PropTypes.func.isRequired
};

export default Home;
