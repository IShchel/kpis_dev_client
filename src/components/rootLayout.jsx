import Navbar from "./navbar";
import {Outlet} from "react-router-dom";

function RootLayout() {
  console.log("ROOT_LAYOUT_RENDERED")
  return (
        <div className="layout">
            <div className="sidebar">
                <Navbar/>
            </div>
            <div className="main">
                <Outlet/>
            </div>
        </div>
    );
}

export default RootLayout;