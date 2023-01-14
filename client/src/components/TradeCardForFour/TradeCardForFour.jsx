import React, {useState} from 'react';
import '../tradeCard/tradeCard.css'
import MiniTradeCard from "../miniTradeCard/MiniTradeCard";
import EmptyCard from "../emptyCard/EmptyCard";

const TradeCard = ({item}) => {
    // const [items, setItems] = useState(item.reference);
    // console.log(item);
    const[fourthIndex, setFourthIndex] = useState(0);
    const[activeTwo, setActiveTwo] = useState(false);
    const[indexLast, setIndexLast] = useState(0);
    const[activeLast, setActiveLast] = useState(false);
    const[index, setIndex] = useState(0);
    const[active, setActive] = useState(false);


    function activeHandler() {
        if(active === false){
            setActiveTwo(false);
            setActiveLast(false);
        } else if (activeLast === false) {
            setActiveTwo(false);
        }
    }

    if(item) {
        return (
            <div className="tradeCard">
                <div className="tradeWrapper">
                    <div className="tradeWrapperCat">
                        {item?.map((c,index) =>(
                            <div className = "tradeWrapperFirstInner" onClick={() => {
                                setIndex(index);
                                setActive(!active);
                            }}>
                                <MiniTradeCard key={c.id} item={c}/>
                            </div>
                        ))}
                    </div>
                    <div className="tradeWrapperCat">
                        {active
                            ?
                            <>
                                {item[index]?.reference?.slice(0, 5).map((c, index) => {
                                        if(c !== null){
                                            return <div className = "tradeWrapperFirstInner" onClick={() => {
                                                setIndexLast(index);
                                                // console.log(indexLast);
                                                // console.log(item[index]?.reference[indexLast]);
                                                setActiveLast(!activeLast);
                                                activeHandler();
                                            }}>
                                                <MiniTradeCard key={c.id} item={c}/>
                                            </div>
                                        }
                                    }
                                    // if (c !== null) return <MiniTradeCard key={c.id} item={c} />
                                )
                                }
                            </>
                            :
                            <></>
                        }
                    </div>
                    <div className="tradeWrapperCat">
                        {activeLast && active
                            ?
                            <>
                                {item[index]?.reference[indexLast]?.reference.slice(0, 5).map((c, index) => {
                                        if(c !== null){
                                            return <div className = "tradeWrapperFirstInner" onClick={() => {
                                                setActiveTwo(!activeTwo);
                                                setFourthIndex(index);
                                                activeHandler();
                                            }}>
                                                <MiniTradeCard key={c.id} item={c}/>
                                            </div>
                                        }
                                    }
                                    // if (c !== null) return <MiniTradeCard key={c.id} item={c} />
                                )
                                }
                            </>
                            :
                            <></>
                        }
                    </div>
                    <div className="tradeWrapperCat">
                        {activeTwo && activeLast && active
                            ?
                            <EmptyCard key = {item[index]?.reference[indexLast]?.reference[fourthIndex]} item={item[index]?.reference[indexLast]?.reference[fourthIndex]}/>
                            :
                            <></>
                        }
                    </div>
                </div>
            </div>
        );
    }
};

export default TradeCard;