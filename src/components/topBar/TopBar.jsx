import './TopBar.css';
import UserButton from '../userButton/UserButton';
import Image from '../image/Image';
import { useNavigate } from 'react-router';

const TopBar = () => {
  const navigate =  useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?search=${e.target[0].value}`)
  }

  return (
    <div className='topBar'>
      {/* Search Bar */}
      <form onSubmit={handleSubmit} className='search'>
        <Image path="/general/search.svg" alt="" />
        {/* <img src="/general/search.svg" alt="" /> */}
        <input type="text" placeholder='Search' />
      </form>

      {/* User details */}
      <UserButton />
    </div>
  )
}

export default TopBar