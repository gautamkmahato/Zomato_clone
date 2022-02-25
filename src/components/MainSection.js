import React, { useContext, useEffect, useState } from 'react';
import '../style2.css';
import check from '../images/checked.png'


function MainSection(props) {
    const [discount, setDiscount] = useState(0);
    const [time, setTime] = useState(0);
    const [rating, setRating] = useState(0);
    const price = parseInt(props.totalWeight/10);

    useEffect(() => { 
        getPrice();
        getTime();
        getRating();
    }, )
    
    

    const getPrice = () => {
        let cal = parseInt(props.calories);
        let sum = 0;

        while (cal) {
            sum += cal % 10;
            cal = Math.floor(cal / 10);
        }
        setDiscount(sum+10) 
    }

    const getTime = () => {
        let val = parseInt(props.totalWeight);
        let sum = 0;

        while (val) {
            sum += val % 10;
            val = Math.floor(val / 10);
        }
        setTime(sum+10) 
    }

    const getRating = () => {
        let val = parseInt(props.totalWeight);
        let sum = 0;

        while (val) {
            sum += val % 10;
            val = Math.floor(val / 10);
        }
        sum = (sum+10)/10;

        if(sum < 3){
            setRating(sum + 2)
        }
        else{
            setRating(sum) 
        }
        
    }

  return (
    <>
        
        <div className='column'>
            <div className='card'>
                <div className='card-image'>
                    <img src={props.image} />
                </div>
                
                <div className='card-body-upper'>
                    <p><span className='card-discount'>{discount}% OFF</span></p>
                    <p><span className='card-time'>{time} min</span></p>
                </div>
                <div className='card-title'>
                    <p className='card-title-header'>{props.title}</p>
                    <p className='card-title-rating'><span className='card-rating'>{rating}<i class="fa-solid fa-star card-rating-font"></i></span></p>
                </div>
                <div className='card-body-lower'>
                    <p className='card-body-lower-subtitle'><span className='card-cuisine'><span>{props.cuisineType}</span> / {props.dishType}</span></p>
                    <p className='card-price'>${price} for one</p>
                </div>
                <div className='card-body-footer'>
                    <p className='card-body-footer-image'><span><img src={check} /></span></p>
                    <p className='card-body-footer-title'>{parseInt(props.calories)}+ orders placed from here recently</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default MainSection