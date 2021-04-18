import React from "react";
import { Route } from "react-router-dom";

function AdminTemplate(props) {
  return (
    <>
      <header>Header Của Admin</header>
      <main className="d-flex">
        <section>SideBar</section>
        <section>{props.children}</section>
      </main>
    </>
  );
}

const RouterAdminTemplate = ({ path, exact, Component }) => {
  return (
    <Route path={path} exact={exact}>
      <AdminTemplate>
        <Component />
      </AdminTemplate>
    </Route>
  );
};

export default RouterAdminTemplate;
