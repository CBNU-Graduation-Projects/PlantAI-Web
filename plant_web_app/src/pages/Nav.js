import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => {
  return (
    <nav className="nav-container">
      {/* 임시로고 이미지 */}
      <img className="logo-nav-img" src ="https://www.cbnu.ac.kr/site/www/images/contents/cts596_img01.png" alt="plant_wep" />
      
      <div className="links">
        <Link to="/">Home</Link> |
        <button><Link to="/login"> 로그인 </Link></button>
      </div>

      <div className="language-select"> 
        <select>
            <option>한국어</option>
            <option>English</option></select>
      </div>


     </nav>
  );
};

export default Nav;