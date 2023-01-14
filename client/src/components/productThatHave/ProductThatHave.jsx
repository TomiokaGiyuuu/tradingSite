import React from 'react';

const ProductThatHave = ({have}) => {
    return (
        <div className="productThatHaveImg">
            {have === 'машина'
                ?
                <img className="miniTradeCardTopImg" src="https://www.autocar.co.uk/sites/autocar.co.uk/files/range-rover-2022-001-tracking-front.jpg" alt=""/>
                :
                have === 'квартира'
                    ?
                    <img className="miniTradeCardTopImg" src="https://is1-3.housingcdn.com/4f2250e8/55efe32dace3623af94a7197ae5a34f3/v0/large/ghoghari_alif_1_appartment-makarba-ahmedabad-ghoghari_infrastructure.jpeg" alt=""/>
                    :
                    <img className="miniTradeCardTopImg" src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg" alt=""/>
            }
        </div>
    );
};

export default ProductThatHave;