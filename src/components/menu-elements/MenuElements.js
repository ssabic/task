import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import CreditCard from '../../assets/icons/Credit card blue.png';
import Calendar from '../../assets/icons/Group 252 blue.png';
import PaymentPlan from '../../assets/icons/Layout 3d.png';
import User from '../../assets/icons/User.png';

const MenuElements = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Wrapper>
      <NavLink component={location.pathname === "/" ? Active : Card} to="/">
        <img src={User} />
        <p>Personal Info</p>
      </NavLink>
      <NavLink
        component={location.pathname === "/credit-card-details" ? Active : Card}
        to="/credit-card-details"
        activeClassName="active"
      >
        <img src={CreditCard} />
        <p>Credit card details</p>
      </NavLink>
      <NavLink component={location.pathname === "/payment-plan" ? Active : Card}
       to="/payment-plan" activeClassName="active">
        <img src={PaymentPlan} />
        <p>Payment plan</p>
      </NavLink>
      <NavLink component={location.pathname === "/billing" ? Active : Card}
       to="billing" activeClassName="active">
        <img src={Calendar} />
        <p>Billing</p>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 auto;
`;
const Card = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  p {
    font-size: 14px;
    color: #cccccc;
    margin: 20px 0 0 0;
  }
  img {
    width: 50px;
    height: 50px;
    filter: grayscale(100%);
  }
`;
const Active = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  p {
    font-size: 14px;
    color: #0db2f2;
    margin: 20px 0 0 0;
  }
  img {
    width: 50px;
    height: 50px;
    filter: grayscale(0);
  }
`;


export default MenuElements;
