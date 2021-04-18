import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/main/home";
import DetailMovie from "./pages/main/deail-movie";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import Booking from "./pages/main/booking";
import Header from "./components/header";
import { adminRouter, mainRouter } from "./configs/router";
import RouterMainTemplate from "./templates/main";
import RouterAdminTemplate from "./templates/admin";

function App() {
  const renderMainRouter = () => {
    return mainRouter.map(({ path, exact, Component }) => {
      return (
        <RouterMainTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterMainTemplate>
      );
    });
  };
  const renderAdminRouter = () => {
    return adminRouter.map(({ path, exact, Component }) => {
      return (
        <RouterAdminTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterAdminTemplate>
      );
    });
  };

  return (
    <>
      {/* khởi tạo router cho dự án */}
      <BrowserRouter>
        {/* mỗi url thì chỉ hiển thị 1 trang duy nhất */}
        <Switch>
          {/* url === http://localhost:3000/ */}
          {/* url === http://localhost:3000/movie-detail */}
          {/* url === http://localhost:3000/booking */}
          {renderMainRouter()}
          {renderAdminRouter()}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
