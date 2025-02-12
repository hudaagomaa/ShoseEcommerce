import React from 'react';
import './SideBar.css'
import { FaCartShopping } from "react-icons/fa6";
import Category from './category/Category';
import Price from './price/Price';
import Color from './colors/Colors';

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className='logo-containe'>
      <h1 className="logo-container">🛒</h1>
      
      </div>
      <Category/>
      <Price/>
        <Color/>

    </div>
  );
}
