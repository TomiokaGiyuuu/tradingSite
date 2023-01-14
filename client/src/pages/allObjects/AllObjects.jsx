import React, {useEffect, useState} from 'react';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import AboutProduct from "../../components/aboutProduct/AboutProduct";
import './allObjects.css';
import Card from "../../components/card/Card";
import axios, {interceptors} from "axios";
import FilterProducts from "../../components/filterProducts/FilterProducts";

const AllObjects = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("");
    const [city, setCity] = useState("");
    const [allProducts, setAllProducts] = useState([]);
    const [priceFrom, setPriceFrom] = useState(-1);
    const [priceTo, setPriceTo] = useState(-1);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get(`http://localhost:5000/api/allFlats`);
            let temp = res.data;
            setProducts(temp);
            setAllProducts(temp);
        }
        fetchProducts();
    }, [])

    function filterCategory (filterValue){
        setCategory(filterValue);
        let newProducts = [];
        console.log("CATEGORY: " + filterValue)
        allProducts.map((item) => {
            if(item.category.toLowerCase() === filterValue.toLowerCase()){
                newProducts.push(item);
            }
            console.log(item.category);
        })
        setProducts(newProducts);
    }

    function filterCity (filterValue){
        setPriceFrom(filterValue);
        let newProducts = [];
        allProducts.map((item) => {
            if(item.price ){
                newProducts.push(item);
            }
        })
        setProducts(newProducts);
    }

    function handlePriceFrom (filterValue){
        let newProducts = [];
        setPriceFrom(filterValue);
        if(priceTo !== -1){
            allProducts.map((item) => {
                if(item.price >= filterValue && item.price <= priceTo){
                    newProducts.push(item);
                }
            })
        } else {
            allProducts.map((item) => {
                if(item.price >= filterValue){
                    newProducts.push(item);
                }
            })
        }
        setProducts(newProducts);
    }

    function handlePriceTo (filterValue){
        let newProducts = [];
        setPriceTo(filterValue);
        if(priceFrom !== -1){
            allProducts.map((item) => {
                if(item.price >= priceFrom && item.price <= filterValue){
                    newProducts.push(item);
                }
            })
        } else {
            allProducts.map((item) => {
                if(item.price <= filterValue){
                    newProducts.push(item);
                }
            })
        }
        setProducts(newProducts);
    }
    return (
        <div className="allObjects">
            <Navbar/>
            <div className="allObjectsContainer">
                <Sidebar/>
                <div className="allObjectsFeed">
                    <FilterProducts
                        category = {filterCategory} city = {filterCity}
                        priceFrom = {handlePriceFrom} priceTo = {handlePriceTo}
                    />
                    <div className="allObjectsProducts">
                        {products?.map((c) => (
                            <Card key={c.id} item={c}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllObjects;