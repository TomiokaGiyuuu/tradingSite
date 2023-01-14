import './objectCard.css'
import {Link} from "react-router-dom";

const ObjectCard = ({item}) => {

    return (
        <div className="ObjectCard">
            <Link to = {`/traderoad/${item._id}`}>
            <div className="ObjectCardImg">
            </div>
            <hr className="ObjectCardHr"/>
            <div className="ObjectCardButton">
                Показать обмены
            </div>
            </Link>
        </div>
    );
};

export default ObjectCard;