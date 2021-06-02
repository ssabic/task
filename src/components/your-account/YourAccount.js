import React from "react";
import styled from "styled-components";
import MenuElements from "../menu-elements/MenuElements";

import NameBox from "../name-box/NameBox";

const YourAccount = () => {
  return (
    <Wrapper>
      <div>
        <YA> Your account </YA>
        <Modify> You can modify your personal information here </Modify>
        <NameBox></NameBox>
      </div>

      <MenuElements />
    </Wrapper>
  );
};

export default YourAccount;

const Wrapper = styled.div`
  padding: 0 5%;
  display: flex;
`;

const YA = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #011f4b;
`;

const Modify = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  color: #7e8299;
`;
