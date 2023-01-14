import React, {useEffect, useState} from 'react';
import './tradeRoad.css';
import {useParams} from "react-router-dom";
import axios from "axios";

const TradeRoad = () => {
    const [product, setProduct] = useState({});
    const productId = useParams().id;

    useEffect(() => {
        const fetchObject = async () => {
            const res = await axios.get(`http://localhost:5000/api/product/${productId}`);
            let temp = res.data;
            setProduct(temp);
        }
        fetchObject();
    }, [])

    return (
        <div className="tradeRoad">
            <div className="tradeRoadFirst">
                <div className="tradeRoadItem">
                    <div className="ObjectCardCircle">

                    </div>-
                </div>
            </div>
            <div className="tradeRoadSecond">

            </div>
            <div className="tradeRoadThird">

            </div>
            <div className="tradeRoadFourth">

            </div>
        </div>
    );
};

export default TradeRoad;