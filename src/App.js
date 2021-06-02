import './App.css';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BillingPage from './pages/billing-page/BillingPage';
import CreditCardPage from './pages/credit-card-details/CreditCardPage';
import PaymentPlan from './pages/payment-plan/PaymentPlanPage';
import PersonalInfoPage from './pages/personal-info/PersonalInfoPage';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PersonalInfoPage} />
            <Route exact path="/credit-card-details" component={CreditCardPage} />
            <Route exact path="/payment-plan" component={PaymentPlan} />
            <Route exact path="/billing" component={BillingPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
