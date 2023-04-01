import React, { useState, useEffect } from 'react';
import { Layout, Menu, Input } from 'antd';
import { Link } from 'react-router-dom';
// import Logo from "../image/BBC_Logo_2021.svg.png"

const { Header } = Layout;
const { Search } = Input;

interface INav {
  utils: string;
  setUtils: (value: string) => void;
}

const Navbar = ( props: INav ) => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        backgroundColor: 'white',
        boxShadow: hasScrolled ? '0px 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'box-shadow 0.2s ease-in-out',
      }}
    >
      <div className="logo" />
      <Menu theme="light" style={{marginTop:"10px"}}>
        <Menu.Item>
          <Link to="https://www.bbc.com/">
            <img src="/BBC_Logo_2021.svg.png" alt="Logo" style={{ width: '112px', height: '32px' }} />
          </Link>
        </Menu.Item>
      </Menu>
      <Search placeholder="search" style={{ width: 200, position: 'absolute', top: '1rem', right: '1rem' }}
      onChange={(e) => props.setUtils(e.target.value)}
       />
    </Header>
  );
};

export default Navbar;