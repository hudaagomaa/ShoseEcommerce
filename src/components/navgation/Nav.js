import React from 'react';
import "./Nav.css"
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";




export default function Nav() {
  return (
  <>
    <nav className='nav'>
      <div className='nav-container'>
    <input 
    type="filter"
     className="search-input" 
    placeholder='enter your search  shoes'/>
    </div>
    <div className="profile-container">
<a className='nav-icons'>
<FaHeart className='icons' />
</a>
<a className='nav-icons'>
<FaShoppingCart className='icons' />

</a>
<a className='nav-icons'>
<HiUserAdd className='icons' />
</a>
  </div>

  </nav>
  
</>

  );
}
