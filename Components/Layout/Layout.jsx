
import React from "react";
import { Link, Outlet } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";

import "./Layout.css"

function Layout() {
  return (
    <>
       
     <nav className="navbar">      
        <ul className="navbar-links">
            <li>
                <Link to={"/"}><img src="/img/cafe.ico" alt="Logo"/></Link>
            </li>
            <li>
                <Link to={"/cafe"}>Café</Link>
            </li>
            <li>
                <Link to={"/salado"}>Salado</Link>
            </li>
            <li>
                <Link to={"/dulce"}>Dulce</Link>
            </li>
        </ul>  
        <CartWidget/>       

    </nav>
   
    <Outlet/>
    </>
  )
}

export default Layout