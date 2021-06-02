import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <Tc href="#">Terms and conditions | Privacy policy</Tc>

      <Version>Version 1.0.2</Version>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 5%;
`;
const Tc = styled.a`
  height: 19px;
  font-weight: bold;
  font-size: 16px;
  color: #005b96;
`;
const Version = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #005b96;
  margin: 0;
`;
