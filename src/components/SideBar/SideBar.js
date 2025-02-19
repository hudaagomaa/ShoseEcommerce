import Category from "../SideBar/category/Category";
import Price from "../SideBar/price/Price";
import Colors from "../SideBar/colors/Colors";
import './SideBar.css';

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar container-side">
        <div className="logo-container">
          <h1>🛒</h1>
        </div> 
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
