import React from 'react';
import '../style4.css';

function Item(props) {
  return (
    <div className='item'>
        <div className='slider'>
            <div className='item-image'><img src={props.image} /></div>
            <p className='item-title'>{props.title}</p>
            <p className='item-time'>{props.time}</p>
        </div>
    </div>
  )
}

export default Item