import React from 'react';
import '../style3.css'

function SearchBox() {
  
  return (
    <>
        <div className='search-box-section'>
          <div className='search-box'>
            <div className='location-icon'>
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className='location-input'>
              <form>
                <input type="text" placeholder='Search by location' />
              </form>
            </div>
            <div className='search-divider'>|</div>
            <div className='recipe-button'>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className='recipe-input'>
              <form>
                <input type="text" placeholder='Search for restaurant cuisine or dish' />
              </form>
              
            </div>
          </div>
        </div>
    </>
  )
}

export default SearchBox