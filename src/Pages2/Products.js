import React from "react";

import { Outlet, useNavigate } from "react-router-dom";

const Products = () => {

    const navigate = useNavigate();
    return(
        <div>
             
            <h1>Products</h1>
            <button onClick={()=>navigate("")}>Apple</button>
            {/* <button onClick={()=>navigate("/products/apple")}>Apple new</button> */}
            <button   onClick={()=>navigate("samsung")} >Samsung</button>
            <button onClick={()=>navigate("nokia")}>Nokia</button>
            <Outlet />

            
        </div>
    )
}

export default Products;