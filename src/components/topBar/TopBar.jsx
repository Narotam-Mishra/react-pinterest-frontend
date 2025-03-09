import React from 'react'
import './TopBar.css';
import UserButton from '../userButton/UserButton';

const TopBar = () => {
  return (
    <div className='topBar'>
      {/* Search Bar */}
      <div className='search'>
        <img src="/general/search.svg" alt="" />
        <input type="text" placeholder='Search' />
      </div>

      {/* User details */}
      <UserButton />
    </div>
  )
}

export default TopBar