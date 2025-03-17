import React from 'react'
import './TopBar.css';
import UserButton from '../userButton/UserButton';
import Image from '../image/Image';

const TopBar = () => {
  return (
    <div className='topBar'>
      {/* Search Bar */}
      <div className='search'>
        <Image path="/general/search.svg" alt="" />
        {/* <img src="/general/search.svg" alt="" /> */}
        <input type="text" placeholder='Search' />
      </div>

      {/* User details */}
      <UserButton />
    </div>
  )
}

export default TopBar