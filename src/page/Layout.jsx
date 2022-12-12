import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Nav />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
