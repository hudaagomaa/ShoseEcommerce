import React from 'react';
import './Products.css';
import { FaStar } from "react-icons/fa";
import { IoBag } from "react-icons/io5";


export default function Products() {
  return (
    <section className='card-container'>
    <section className='card'>
      <img src="https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg" alt="heels"  className='card-img'/>
      <div className='card-detalis'>
        <h3 className='card-tittle'>Low Mid Block Heels</h3>
        <section className='card-reviews'> 
        <FaStar className='card-star' /> <FaStar className='card-star' /> <FaStar className='card-star' /> <FaStar className='card-star' /> <FaStar className='card-star' /> 
        <span className='totol-reviews'> 5</span>
</section>
<section className='card-price'>
  <del className='prev-price'>$140,00</del>
  <span className='new-price'>$200</span>
  <section className='bug-company' >
<IoBag className='bug-company' />
</section>
</section>

<section className='card-company'>
  <span className='company'>Nike</span>
</section>
<section className='card-color'>
  <span className='color'>black</span>
</section>
      </div>
    </section>   













    
    </section>


  );
}












