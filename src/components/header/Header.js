import React from 'react';
import styled from 'styled-components';

import menu from '../../assets/icons/menu.png';

const mediaQuery = window.matchMedia("(max-width: 700px)");

const Header = () => {
  return (
    <Wrapper>
      <Menu>
        <img src={menu} />
      </Menu>
      <User>
        <Icon>JD</Icon>
        <Name>Jane Doe</Name>
      </User>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  max-width: 100vw;
  height: 70px;
  padding: 0 5%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #f3f6f9;
`;
const Menu = styled.div`
  cursor: pointer;
`;
const User = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.div`
  width: 43px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  background: #f6ca65;
  border-radius: 5px;

  color: #ffffff;
  font-weight: bold;
  font-size: 23px;
`;
const Name = styled.p`
  width: 68px;
  height: 19px;
  font-weight: bold;
  font-size: 16px;
  color: #005b96;
`;
