import React from 'react';
import './filterProduct.css';

const FilterProducts = (props) => {
    const categories = ["Квартира", "Машина", "Дом"];
    const cities = ["Астана", "Алматы", "Шымкент", "Актобе"];

    function handleCategory(event) {
        props.category(event.target.value);
    }
    function handleCity(event) {
        props.city(event.target.value);
    }

    function handlePriceFrom(event) {
        props.priceFrom(event.target.value);
    }

    function handlePriceTo(event) {
        props.priceTo(event.target.value);
    }


    return (
        <div className="filterProducts">
            <div className="filterProductsText">
                Фильтры
            </div>
            <div className="filterProductsWrapper">
                <select name="Категории" onChange={handleCategory} className="filterProductsCategories">
                    <option value="Категория" disabled>Категория</option>
                    {categories.map((c) => (
                        <option value={c}>{c}</option>
                    ))}
                </select>
                <select name="Категории" onChange={handleCity} className="filterProductsCategories">
                    <option value="Местоположение" disabled>Местоположение</option>
                    {cities.map((c) => (
                        <option value={c}>{c}</option>
                    ))}
                </select>
                <div className="filterProductsPriceWrapper">
                    <div className="filterProductsPriceText">Цена:</div>
                    <input placeholder="От" type="text" className="filterProductsPrice" onChange={handlePriceFrom}/>
                    <input placeholder="До" type="text" className="filterProductsPrice" onChange={handlePriceTo}/>
                </div>
            </div>
        </div>
    );
};

export default FilterProducts;