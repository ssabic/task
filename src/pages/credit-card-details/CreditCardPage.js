import React from 'react';
import styled from 'styled-components';

import CreditCardWrapper from '../../components/credit-card-wrapper/CreditCardWrapper';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import YourAccount from '../../components/your-account/YourAccount';

const CreditCard = () => {

    return(
        <Wrapper>
            <Header/>
            <YourAccount/>
            <CreditCardWrapper />
            <Footer/>
        </Wrapper>
    )
}

export default CreditCard;

const Wrapper = styled.div`
  min-height: 100vh;
`;
