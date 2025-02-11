import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./Nonveg";
import About from "./About";
import Cart from "./Cart";
import "./App.css";
import Milk from "./Milk";
import { useDispatch, useSelector } from "react-redux";
import Orders from "./Orders";
import { logout } from "./store";
import Login from "./Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHome, faCarrot, faDrumstickBite, faShoppingCart, 
  faInfoCircle, faSignInAlt, faBox, faIceCream, faSignOutAlt 
} from "@fortawesome/free-solid-svg-icons";

import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"; // ✅ FIXED IMPORT

function App() {
  const isauthenticated = useSelector((state) => state.auth.isauthenticated);
  const user = useSelector((state) => state.auth.user);
  
  let dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalitems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="div">
      <div style={{ textAlign: "center" }}>
      <img
    src="testybite.jpg"
    alt="TastyBite Logo"
    style={{ width: "150px", height: "150px", marginTop: "10px" }}
  />
  <p></p>
  {/* <h1 style={{ fontFamily: "cursive" }}>TastyBite</h1> */}
</div>
    <BrowserRouter>
          <nav className="navbar">
            <Link to="/" className="myclass" />
            <Link to="/home" className="myclass">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
            <Link to="/veg" className="myclass">
              <FontAwesomeIcon icon={faCarrot} /> Veg
            </Link>
            <Link to="/nonveg" className="myclass">
              <FontAwesomeIcon icon={faDrumstickBite} /> NonVeg
            </Link>
            <Link to="/milk" className="myclass">
              <FontAwesomeIcon icon={faIceCream} /> Desserts
            </Link>
            <Link to="/orders" className="myclass">
              <FontAwesomeIcon icon={faBox} /> Orders
            </Link>
            <Link to="/about" className="myclass">
              <FontAwesomeIcon icon={faInfoCircle} /> About
            </Link>
            <Link to="/cart" className="myclass">
              <FontAwesomeIcon icon={faShoppingCart} /> Cart <span>{totalitems}</span>
            </Link>

            {isauthenticated ? (
              <>
                <span className="welcome">Welcome, {user}</span>
                <span className="logout-btn">
                  <button onClick={() => dispatch(logout())}>
                    <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                  </button>
                </span>
              </>
            ) : (
              <Link to="/login" className="myclass">
                <FontAwesomeIcon icon={faSignInAlt} /> SignIn
              </Link>
            )}
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/veg" element={<Veg />} />
            <Route path="/nonveg" element={<NonVeg />} />
            <Route path="/milk" element={<Milk />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          {/* Footer Section */}
          <footer className="footer">
            <div className="footer-container">
              <h2>TastyBite</h2>
              <p>Delicious food, delivered fast!</p>

              <div className="footer-links">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/login">Login</Link>
              </div>

              <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>

              <p>&copy; {new Date().getFullYear()} TastyBite. All rights reserved.</p>
            </div>
          </footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
