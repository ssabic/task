import React from 'react';
import styled from 'styled-components';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import PersonalInfoWrapper from '../../components/personal-info-wrapper/PersonalInfoWrapper';
import YourAccount from '../../components/your-account/YourAccount';

const PersonalInfoPage = () => {
  return (
    <Wrapper>
      <Header />
      <YourAccount />
      <PersonalInfoWrapper />
      <Footer />
    </Wrapper>
  );
};

export default PersonalInfoPage;
const Wrapper = styled.div`
  min-height: 100vh;
`;
