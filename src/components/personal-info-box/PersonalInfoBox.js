import React from "react";
import styled from "styled-components";

const PersonalInfoBox = () => {
  return (
    <Wrapper>
      <h4>Personal Info</h4>
      <p>
        This is the personal info section of your account. Here you can easily
        change your basic info. After you finish updating this section please
        click the save changes button
      </p>
    </Wrapper>
  );
};

export default PersonalInfoBox;

const Wrapper = styled.div`
  width: 300px;
  margin-right: 15px;
  h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #011f4b;
    margin: 0;
  }
  p {
    background: #0db2f2;
    border-radius: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #ffffff;
    padding: 15px;
  }
`;
