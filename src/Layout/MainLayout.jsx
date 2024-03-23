
import Nav from "../Components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="h-[76px]">
        <Nav></Nav>
      </div>
      <div className="min-h-[calc(503px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
