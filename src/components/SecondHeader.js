import React from 'react';
import '../style3.css';
import delivery from '../images/delivery2.png';
import dining from '../images/dining2.png';
import beer from '../images/beer.png';

function SecondHeader() {
  return (
    <>
        {/* <div className='info'>Home/ India/ Jamshedpur/ Sakchi/ Chicken Restaurants</div> */}
        <div className='container'>
            <div className='second-header'>
                <div className='links'>
                    <div className='delivery'>
                        <button>
                            <img src={delivery} />
                            <span>Delivery</span>
                        </button>
                    </div>
                    <div className='dining'>
                        <button>
                            <img src={dining} />
                            <span>Dining Out</span>
                        </button>
                    </div>
                    <div className='beer'>
                        <button>
                            <img src={beer} />
                            <span className='beer'>Nightlife</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SecondHeader