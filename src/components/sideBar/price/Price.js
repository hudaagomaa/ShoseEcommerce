import "./price.css";

function Price() {
  return (
    <div>
      <h2 className="sidebar-title">Price</h2>

      <div style={{marginBottom: '55px'}}>
        <label className="sidebar-label-container">
          <input type="radio" value="heels" name="price" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" value="sandals" name="price" />
          <span className="checkmark"></span>0-50$
        </label>
        <label className="sidebar-label-container">
          <input type="radio" value="flats" name="price" />
          <span className="checkmark"></span>50-100$
        </label>
        <label className="sidebar-label-container">
          <input type="radio" value="sneakers" name="price" />
          <span className="checkmark"></span>100-150$
        </label>
        <label className="sidebar-label-container">
          <input type="radio" value="sneakers" name="price" />
          <span className="checkmark"></span>$150 & UP
        </label>
      </div>
    </div>
  );
}
export default Price;
