import React from 'react';
import '../style3.css';

function ThirdHeader() {
  return (
    <> 
        <div className='container'>
            <div className='button-section'>
                <div className='button-groups'>
                    <button class="btn"><i class="fa-solid fa-arrow-right-from-bracket"></i> Filters</button>
                    <button class="btn"><i class="fa fa-filter" aria-hidden="true"></i> Delivery Time</button>
                    <button class="btn"><i class="fa fa-folder"></i> Pure Veg</button>
                    <button class="btn"><i class="fa fa-star" aria-hidden="true"></i> Rating: 4.0+</button>
                    <button class="btn"><i class="fa fa-folder"></i> Great Offers</button>
                    <button class="btn"><i class="fa fa-folder"></i> Cuisines</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ThirdHeader