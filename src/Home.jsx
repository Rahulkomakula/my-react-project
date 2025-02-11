import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="home-container">
      {/* Banner Section */}
      <div className="banner">
        <h1 style={{color:"black"}}>Delicious Food, Delivered Fast! 🚀</h1>
        <p style={{color:"black"}}>Order your favorite meals from the best restaurants near you.</p>
        <Link to="/veg">
          <button className="order-btn">Order Now</button>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input type="text" placeholder="Search for food..." className="search-input" />
        <button className="search-btn">Search</button>
      </div>
      

      {/* Categories */}
      <div className="categories">
        <h2>Explore Our Categories 🍽️</h2>
        <div className="category-list">
          <Link to="/veg" className="category-item">
            🥗 Veg Dishes
          </Link>
          <Link to="/nonveg" className="category-item">
            🍗 Non-Veg Dishes
          </Link>
          <Link to="/milk" className="category-item">
            🍨 Desserts
          </Link>
          <Link to="/cart" className="category-item">
            🛒 View Cart
          </Link>
          <Link to="/orders" className="category-item">
            📦 Your Orders
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
