import React from 'react';
import styled from 'styled-components';

import card from '../../assets/icons/card.png';
import card2 from '../../assets/icons/card2.png';
import elipse from '../../assets/icons/Ellipse 8.png';

const CreditCardBox = () => {
  return (
    <Wrapper>
      <h4>Your credit cards</h4>
      <p>
        Select a valid credit card for your Balance account or add a new card by clicking 
        add new card and filling out the required card information on the left. 
        New card can be selected after being added on the list below.
      </p>
      <p2>
          + Add new card
      </p2>
      <Option>
          <img src={card}/>
          123 456 789 012 3456
          <p3> &#x2713; </p3>
      </Option>
      <Option2>
          <img src={card2}/>
          123 456 789 012 3456
          <img src={elipse} />
      </Option2>
      <Option2>
          <img src={card2}/>
          123 456 789 012 3456
          <img src={elipse} />
      </Option2>
    </Wrapper>
  );
};

export default CreditCardBox;

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
  p2 {
    background: #005B96;
    border-radius: 5px;
    color: #ffffff;
    padding: 10px;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    width: 278px;
    display: flex;
  }
`;

const Option = styled.div `
background: #1BC5BD;
border-radius: 5px;
display: flex;
justify-content: space-around;
margin-top: 10px;
align-items: center;
font-size: 16px;
line-height: 19px;
font-weight: bold;
color: #FFFFFF;
img {
    padding: 5px;
    
}
p3 {
    background: #10A09A;
    border-radius: 50%;
    
}

`
const Option2 = styled.div`
background: #F1FAFE;
border-radius: 5px;
display: flex;
justify-content: space-around;
margin-top: 10px;
align-items: center;
font-size: 16px;
line-height: 19px;
color #011F4B;
img {
    pdding: 5px;
}
`
