import "./Category.css";
import Input from "../../comps/input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark all"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;




// import "./category.css";
// import Input from "../../comps/Input";


// function Category() {
//   return (
//     <div>
//       <h2 className="sidebar-title">Category</h2>

// <div style={{marginBottom: '55px'}}> 
// <Input/><Input/><Input/><Input/><Input/>
// </div>

//     </div>
//   );
// }

// export default Category;

// /**<label className="sidebar-label-container">
//     <input type="radio" value="all" name="category" />
//     <span className="checkmark"></span>All
//   </label>
//   <label className="sidebar-label-container">
//     <input type="radio" value="heels" name="category" />
//     <span className="checkmark"></span>heels
//   </label>
//   <label className="sidebar-label-container">
//     <input type="radio" value="sandals" name="category" />
//     <span className="checkmark"></span>sandals
//   </label>
//   <label className="sidebar-label-container">
//     <input type="radio" value="flats" name="category" />
//     <span className="checkmark"></span>flats
//   </label>
//   <label className="sidebar-label-container">
//     <input type="radio" value="sneakers" name="category" />
//     <span className="checkmark"></span>sneakers
//   </label> */