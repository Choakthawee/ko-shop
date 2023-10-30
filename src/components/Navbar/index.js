import React, { useState,useEffect } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUser, faCartShopping, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState(localStorage.getItem('username'));
  const location = useLocation();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleStorageChange = () => {
    setLoggedInUsername(localStorage.getItem('username'));
  };

  useEffect(() => {
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    setLoggedInUsername(localStorage.getItem('username'));
  }, [location]); 

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo.png')} alt='logo' className='Logo' />
        </NavLink>
        <Bars onClick={toggleMenu} />
        <NavMenu className={menuOpen ? 'active' : ''}>
          <NavLink to='/allitem' activeStyle>
            <FontAwesomeIcon icon={faCartShopping} style={{ marginRight: 5 }} /> หมวดหมู่สินค้าทั้งหมด
          </NavLink>
          <NavLink to='/topup' activeStyle>
            <FontAwesomeIcon icon={faCirclePlus} style={{ marginRight: 5 }} /> เติมเงิน
          </NavLink>
          {loggedInUsername ? (
            <NavLink to='/profile' activeStyle>
              <FontAwesomeIcon icon={faUser} style={{ marginRight: 5 }} /> โปรไฟล์
            </NavLink>
          ) : (
            <>
              <NavLink to='/register' activeStyle>
                <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: 5 }} /> สมัครสมาชิก
              </NavLink>
              <NavLink to='/login' activeStyle>
                <FontAwesomeIcon icon={faUser} style={{ marginRight: 5 }} /> เข้าสู่ระบบ
              </NavLink>
            </>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
