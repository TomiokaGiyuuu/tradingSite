import React, {useEffect, useState} from 'react';
import './aboutProduct.css';
import {useParams} from "react-router-dom";
import axios from "axios";

const AboutProduct = (id) => {
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
        <div className="aboutProduct">
            <div className="aboutProductTop">
                <div>
                    <img src = "https://imageio.forbes.com/specials-images/imageserve/61a51caadcba3e66b006c334/Mclaren-720s-GT3-Testing/960x0.jpg?format=jpg&width=960" alt="" className="aboutProductImg"/>
                </div>
                <div className="aboutProductName">
                    <div className="aboutProductNameText">McLaren 720s</div>

                    <div className="aboutProductDescription">
                        <div className="aboutProductDescItem">
                            Категория: {product.category}
                        </div>
                        <div className="aboutProductDescItem">
                            Марка: McLaren
                        </div>
                        <div className="aboutProductDescItem">
                            Максимальная скорость: 341km/h
                        </div>
                        <div className="aboutProductDescItem">
                            Город: {product.location}
                        </div>
                        <div className="aboutProductDescItem">
                            Готовность к обмену: готов
                        </div>
                        <div className="aboutProductDescItem">
                            Контактные данные:  @iamjustaguy
                        </div>
                    </div>
                    <div className="aboutProductPriceWrapper">
                        <div className="aboutProductPrice">
                            {product.price}тг
                        </div>
                        <div className="aboutProductCallToSeller">
                            Связаться с продавцом
                        </div>
                    </div>
                </div>

            </div>
            <div className="aboutProductBottom">
                <div className="aboutProductBottomDescription">
                    <div className="aboutProductBottomDescriptionName">
                        Описание:
                    </div>
                    <div className="aboutProductBottomDescriptionText">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eos mollitia sequi veritatis. Ad aliquid aspernatur cumque earum eum in ipsam ipsum odit officia possimus quo ratione sequi, voluptatem! A. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis debitis dolores eligendi eos in odit quisquam ratione repellat, rerum tenetur. Consequatur explicabo molestias necessitatibus placeat, quibusdam quis recusandae sit. Voluptatibus.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutProduct;