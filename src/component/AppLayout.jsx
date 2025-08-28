import Footer from "./UI/Footer";
import Header from "./UI/Header";
import {Outlet} from "react-router-dom";

function AppLayout(){
  return(
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default AppLayout;