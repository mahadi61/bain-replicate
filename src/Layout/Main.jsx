import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <main className="">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Main;
