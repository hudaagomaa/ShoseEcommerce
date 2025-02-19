import "./Colors.css";
import Input from "../../comps/input";


const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colors</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;













// import React from 'react';
// import './colors.css';
// export default function Colors() {
//   return (
//     <div>
//        <h2 className="sidebar-title">Colors</h2>

// <div style={{marginBottom: '55px'}}>
// <label className="sidebar-label-container">
//     <input type="radio" value="all" name="category" />
//     <span className="checkmark"></span>All
//   </label>
//   <label className="sidebar-label-container">
//     <input type="radio" value="heels" name="category" />
//     <span className="checkmark"></span>Black
//   </label>
//   <label className="sidebar-label-container">
//     <input type="radio" value="sandals" name="category" />
//     <span className="checkmark"></span>blue
//   </label>
//   <label className="sidebar-label-container">
//     <input type="radio" value="flats" name="category" />
//     <span className="checkmark"></span>red
//   </label>
//   <label className="sidebar-label-container">
//     <input type="radio" value="sneakers" name="category" />
//     <span className="checkmark"></span>green
//   </label>
//   <label className="sidebar-label-container">
//     <input type="radio" value="sneakers" name="category" />
//     <span className="checkmark"></span>white
//   </label>
// </div>
//     </div>
//   );
// }
