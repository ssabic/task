import React from 'react';
import styled from 'styled-components';

import CreditCardBox from '../credit-card-box/CreditCardBox';
import CreditCardForm from '../credit-card-form/CreditCardForm';

const CreditCardWrapper = () => {
  return (
    <Wrapper>
        <CreditCardBox />
        <CreditCardForm />
    </Wrapper>
  );
};

export default CreditCardWrapper;

const Wrapper = styled.div`
  padding: 0 5%;
  margin-top: 30px;
  display: flex;
`;