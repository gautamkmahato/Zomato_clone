import React from 'react';
import Carousel from "react-elastic-carousel";
import items from '../mydata.json';
import '../style4.css';
import Item from './Item';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 6 },
    { width: 1200, itemsToShow: 6 }
];


function Slider() {
  return (
    <>
        <div className="carousel-wrapper">
            <h3 className='carousel-wrapper-title'>Top brands for you</h3>
            <Carousel breakPoints={breakPoints}>
            {items.map((item) => (
                <Item id={item.id} title={item.title} image={item.image} time={item.time} />
            ))}
            </Carousel>
        </div>
    </>
  )
}

export default Slider