import React from "react";

import PersonalInfoBox from "../personal-info-box/PersonalInfoBox";
import PersonalInfoForm from "../personal-info-form/PersonalInfoForm";
import styled from "styled-components";

const PersonalInfoWrapper = () => {
  return (
    <Wrapper>
      <PersonalInfoBox />
      <PersonalInfoForm />
    </Wrapper>
  );
};

export default PersonalInfoWrapper;

const Wrapper = styled.div`
  padding: 0 5%;
  margin-top: 30px;
  display: flex;
`;
