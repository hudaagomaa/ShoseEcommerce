import Nav from './components/navgation/Nav';
import Products from './components/products/Products';
import Recommended from './components/Recommended/Recommended';
import SideBar from './components/sideBar/SideBar';
import './index.css';

function App() {
    return (
        <div>
            <SideBar />
            <Nav />
            <Recommended />
            <Products />
        </div>
    );
}

export default App;