import React, { useRef, useState } from 'react';
import './Navbar.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import underline from '../../assets/nav_underline.svg';
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Toggle from '../Toggle';



const Navbar = () => {
    const [menu,setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right="0px";
    };
    const closeMenu = () => {
        menuRef.current.style.right="-350px";
    };

 

    
    
    return (
        <div className='nav'>
            <div className="first-nav"><Link to='/'>
               <h1>George<span>.</span></h1>
               <img src={theme_pattern} alt="" /></Link>
            </div>
            <RiMenu3Line onClick={openMenu} className='nav-mob-open'/>
            <ul ref={menuRef} className="nav-menu">
                <IoClose  alt="" onClick={closeMenu} className='nav-mob-close'/>
                <li><Link to='/' className='link'><p onClick={()=>setMenu("home")}>Home</p>{menu==="home"?<img src={underline} alt=''/>:<></>}</Link></li>
                <li><Link to='/about' className='link'><p onClick={()=>setMenu("about")}>About Me</p>{menu==="about"?<img src={underline} alt=''/>:<></>}</Link></li>
                <li><Link to='/services' className='link'><p onClick={()=>setMenu("services")}>Services</p>{menu==="services"?<img src={underline} alt=''/>:<></>}</Link></li>
                <li><Link to='/port' className='link'><p onClick={()=>setMenu("work")}>Portfolio</p>{menu==="work"?<img src={underline} alt=''/>:<></>}</Link></li>
                <li><Link to='/contact' className='link'><p onClick={()=>setMenu("contact")}>Contact</p>{menu==="contact"?<img src={underline} alt=''/>:<></>}</Link></li>
            </ul>
            <div className='cup'>
                <Toggle/>
            <a href="https://linkedin.com/in/gowinstar55555" className="nav-connect"><div><i>Connect</i></div></a>
            </div> 
        </div>
    )
};

export default Navbar