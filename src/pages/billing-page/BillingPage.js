import React from "react";
import styled from "styled-components";
import BillingWrapper from "../../components/Billing/BillingWrapper";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import YourAccount from "../../components/your-account/YourAccount";

const BillingPage = () => {
  return (
    <Wrapper>
      <Header></Header>
      <YourAccount></YourAccount>
      <BillingWrapper></BillingWrapper>
      <Footer></Footer>
    </Wrapper>
  );
};

export default BillingPage;
const Wrapper = styled.div``;
