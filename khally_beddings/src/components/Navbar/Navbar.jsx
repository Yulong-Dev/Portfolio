import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { useAuth } from "../../Context/AuthContext";
import { useSearch } from "../../Context/SearchContext";
import { PiShoppingCart } from "react-icons/pi";
import { RiMenu3Fill } from "react-icons/ri";
import { FaWindowClose } from "react-icons/fa";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const { cartItems } = useCart();
  const { currentUser, logout } = useAuth();
  const { searchTerm, setSearchTerm } = useSearch();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);


  return (
    <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
      <div className="logo">
        <Link to="/">Khally Beddings</Link>
      </div>
      <Link to='/shop'>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <button className="search-btn">Search</button>
      </div>
      </Link>

      <ul className="nav-links">
        <li className='disappear'><a href="/">Home</a></li>
        <li className='disappear'><a href="/shop">Shop</a></li>
        <li className='float'><a href="/cart"><PiShoppingCart className='cart-icon' /> <span className='count'>{cartItems.length}</span></a></li>
        {currentUser ? (
          <>
            <span className="user-info">Hi, {currentUser.username || currentUser.email}</span>
            <li className='disappear'><button  onClick={logout}>Logout</button></li>
          </>
        ) : (
          <>
            <li className='disappear'><a href="/login">Login</a></li>
            <li className='disappear'><a href="/signup">Sign Up</a></li>
          </>
        )}
      </ul>

      <label htmlFor="drop" className='appear'><RiMenu3Fill /></label>
      <input type="checkbox" name='' id='drop'/>
      <ul className='dropdown-links'>
        <label htmlFor="drop"><FaWindowClose /></label>
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/contact"> Contact Us</a></li>

        {currentUser ? (
          <>
            <span>Hi, {currentUser.username || currentUser.email}</span>
            <li><button className="logout" onClick={logout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        )}

      </ul>
    </nav>
  );
};

export default Navbar;
