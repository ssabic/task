import React from "react";
import styled from "styled-components";

const NameBox = () => {
  return (
    <Wrapper>
      <JD>JD</JD>
      <div>
        <Name>Jane Doe</Name>
        <Info>
          jane.doe@email.com <br></br>387 61 123 456
        </Info>
      </div>
    </Wrapper>
  );
};

export default NameBox;

const Wrapper = styled.div`
  background: #f1fafe;
  border-radius: 10px;
  display: flex;
  width: 300px;
  height: 100px;
  align-items: center;
  justify-content: space-around;
`;
const JD = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #f6ca65;
  color: #ffffff;
`;
const Name = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  margin: 0;
  color: #011f4b;
`;
const Info = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  margin: 0;
  color: #7e8299;
`;
