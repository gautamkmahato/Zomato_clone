import React from 'react'
import '../style3.css';
import SearchBox from './SearchBox';

function Header() {
  return (
    <>
        <div className='container'>
            <div className='heading-section'>
                <div className='title'>
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" />
                </div>
                <div className='search-bar'>
                    <SearchBox />
                </div>
                <div className='button'>
                    <button className='button1'>Login</button>
                    <button className='button2'>Sign up</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header