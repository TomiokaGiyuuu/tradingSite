import React from 'react';
import './productInfo.css';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import AboutProduct from "../../components/aboutProduct/AboutProduct";
import {useParams} from "react-router-dom";


const ProductInfo = () => {
    const productId = useParams().id;
    return (
        <div className="productInfo">
            <Navbar/>
            <div className="productInfoContainer">
                <Sidebar/>
                <div className="productInfoFeed">
                    <AboutProduct id={productId}/>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;