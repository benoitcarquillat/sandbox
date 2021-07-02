import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const MenuItem = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = ({ title }) => {
  const links = [
    { title: 'home', url: '/' },
    { title: 'Contact', url: '/contact' },
  ];

  return (
    <Wrapper>
      {links.map((link, index) => (
        <MenuItem to={link.url} key={index}>
          {link.title}
        </MenuItem>
      ))}
    </Wrapper>
  );
};

export default Header;
