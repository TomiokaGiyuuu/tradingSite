import React, {useEffect, useState} from 'react';
import Card from "../../components/card/Card";
import {Cards} from '../../dummyData';
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import './products.css'
import TradeCard from "../../components/tradeCard/TradeCard";
import MiniTradeCard from "../../components/miniTradeCard/MiniTradeCard";
import ProductThatHave from "../../components/productThatHave/ProductThatHave";
import TradeCardForFour from "../../components/TradeCardForFour/TradeCardForFour";
import ObjectCard from "../../components/objectCard/ObjectCard";
import FilterProducts from "../../components/filterProducts/FilterProducts";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [productsForFour, setProductsForFour] = useState([]);
    const [trades, setTrades] = useState(["1-1", "1-3", "1-4", "1-4(with money)"]);
    const [categories, setCategories] = useState(["квартира", "машина", "дом"])
    const [active, setActive] = useState(-1);
    const [have, setHave] = useState("квартира");
    const [want, setWant] = useState("квартира");
    const [tradeInfo, setTradeInfo] = useState("1-1");

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get(`http://localhost:5000/api/allFlats`);
            let temp = res.data;
            setProducts(temp);
        }
        fetchProducts();
    }, [])

    const clickHandler = () => {
        if(active === 0){
            const fetchProducts = async () => {
                const res = await axios.get(`http://localhost:5000/api/wantTwo?category=${have}&want=${want}`);
                let temp = res.data;
                setProducts(temp);
                setTradeInfo("1-1");
            }
            fetchProducts();
        } else if(active === 1){
            const fetchProducts = async () => {
                const res = await axios.get(`http://localhost:5000/api/wantThree?category=${have}&want=${want}`);
                let temp = res.data;
                setProducts(temp.slice(0, 5));
                console.log(temp);
                setTradeInfo("1-3");
            }
            fetchProducts();
        } else if(active === 2){
            const fetchProducts = async () => {
                const res = await axios.get(`http://localhost:5000/api/wantFour?category=${have}&want=${want}`);
                let temp = res.data;
                setTradeInfo("1-4");
                setProducts(temp.slice(0, 5));
            }
            fetchProducts();
        } else if(active === 3){
            const fetchProducts = async () => {
                const res = await axios.get(`http://localhost:5000/api/wantFourMoney?category=${have}&want=${want}`);
                let temp = res.data;
                setTradeInfo("1-4(with money)");
                setProducts(temp.slice(0, 5));
            }
            fetchProducts();
        }
    }

    const handleHave = (e) => {
        const value = e.target.value;
        setHave(value);
        e.preventDefault();
    }
    const handleWant = (e) => {
        const value = e.target.value;
        setWant(value);
        e.preventDefault();
    }


    return (
        <div className="products">
            <div className="productsSort">
                <div className="productsSortText">
                    Мои обмены
                </div>
                <div className="productsSortCategories">
                    {trades.map((p) => (
                        <div className="productsSortCategory"
                             onClick={() => {
                                 setActive(trades.indexOf(p));
                                 clickHandler();
                             }
                             }>{p}</div>
                    ))}
                    <div className="categoryChoose">
                        <div className="categoryText">Имею: </div>
                        <select name = "category" onChange = {handleHave} className="productsCategorySelect">
                            <option disabled>Категория</option>
                            {categories.map((c) => (
                                <option>{c}</option>
                            ))}
                        </select>
                        <div className="categoryText">Хочу: </div>
                        <select name = "category" onChange = {handleWant} className="productsCategorySelect">
                            <option disabled>Категория</option>
                            {categories.map((c) => (
                                <option>{c}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="productsContainer">
                {
                    tradeInfo === trades[0]
                        ?
                        products?.map((c) => (
                            <Card key = {c.id} item = {c}/>
                        ))
                        :
                        products?.map((c) => (
                            <ObjectCard key = {c.id} item = {c}/>
                        ))
                }
                {/*{*/}
                {/*    tradeInfo === trades[3]*/}
                {/*        ?*/}
                {/*        <div>*/}
                {/*            <div className="productThatHave">*/}
                {/*                <ProductThatHave have = {have}/>*/}
                {/*                <TradeCardForFour item = {products}/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        :*/}
                {/*        tradeInfo === trades[2]*/}
                {/*            ?*/}
                {/*            <div>*/}
                {/*                <div className="productThatHave">*/}
                {/*                    <ProductThatHave have = {have}/>*/}
                {/*                    <TradeCardForFour item = {products}/>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            :*/}
                {/*            tradeInfo === trades[1]*/}
                {/*                ?*/}
                {/*                <div>*/}
                {/*                    <div className="productThatHave">*/}
                {/*                        <ProductThatHave have = {have}/>*/}
                {/*                        <TradeCard item = {products}/>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                :*/}
                {/*                products?.map((c) => (*/}
                {/*                    <Card key = {c.id} item = {c}/>*/}
                {/*                ))*/}
                {/*}*/}

            </div>
        </div>
    );
};

export default Products;