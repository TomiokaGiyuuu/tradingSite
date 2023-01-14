import React, {useState} from 'react';
import Navbar from "../../components/navbar/Navbar";
import Products from "../products/Products";
import './home.css'
import Sidebar from "../../components/sidebar/Sidebar";
import AboutProduct from "../../components/aboutProduct/AboutProduct";

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <div className="homeContainer">
                <Sidebar/>
                <div className="homeProducts">
                    <Products/>
                </div>
            </div>
        </div>
    );
};

export default Home;