import Button from "../comps/Buttun";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;






// import React from 'react';
// import './Recommended.css'
// import'../../index.css'
// export default function Recommended() {
//   return (
//     <>
//         <div className="recommended-container">
//           <h2 className='recommended-title'>Recommended</h2>
//           <div className='recommended-btns'>
//             <button className="btns">All Products</button>
//             <button className="btns">Nike</button>
//             <button className="btns">Puma</button>
//             <button className="btns">Adidas</button>
//             <button className="btns">Vans</button>




//         </div>
//         </div>
        
//     </>
//   );
// }
