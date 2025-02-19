import Input from "../../comps/input";

import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark all"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - 50"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;






// import "./price.css";

// function Price() {
//   return (
//     <div>
//       <h2 className="sidebar-title">Price</h2>

//       <div style={{marginBottom: '55px'}}>
//         <label className="sidebar-label-container">
//           <input type="radio" value="heels" name="price" />
//           <span className="checkmark"></span>All
//         </label>
//         <label className="sidebar-label-container">
//           <input type="radio" value="sandals" name="price" />
//           <span className="checkmark"></span>0-50$
//         </label>
//         <label className="sidebar-label-container">
//           <input type="radio" value="flats" name="price" />
//           <span className="checkmark"></span>50-100$
//         </label>
//         <label className="sidebar-label-container">
//           <input type="radio" value="sneakers" name="price" />
//           <span className="checkmark"></span>100-150$
//         </label>
//         <label className="sidebar-label-container">
//           <input type="radio" value="sneakers" name="price" />
//           <span className="checkmark"></span>$150 & UP
//         </label>
//       </div>
//     </div>
//   );
// }
// export default Price;
