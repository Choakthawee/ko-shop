import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUser, faCartShopping, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
          <NavLink to='/register' activeStyle>
            <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: 5 }} /> สมัครสมาชิก
          </NavLink>
          <NavLink to='/login' activeStyle>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: 5 }} /> เข้าสู่ระบบ
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
