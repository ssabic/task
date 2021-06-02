import React from "react";
import styled from "styled-components";
import BillingWrapper from "../../components/Billing/BillingWrapper";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PaymentWrapper from "../../components/payment-wrapper/PaymentWrapper";
import YourAccount from "../../components/your-account/YourAccount";

const PaymentPlan = () => {
  return (
    <Wrapper>
      <Header></Header>
      <YourAccount></YourAccount>
      <PaymentWrapper></PaymentWrapper>
      <Footer></Footer>
    </Wrapper>
  );
};

export default PaymentPlan;
const Wrapper = styled.div``;
