import React from "react";
import { Route } from "react-router-dom";
import Header from "../../components/header";

function MainTemplate(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <footer>đây là footer nè</footer>
    </>
  );
}

const RouterMainTemplate = ({ path, exact, Component }) => {
  return (
    <Route path={path} exact={exact}>
      <MainTemplate>
        <Component />
      </MainTemplate>
    </Route>
  );
};

export default RouterMainTemplate;
