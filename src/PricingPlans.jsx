import React from 'react';
import { Link } from 'react-router-dom';
import './PricingPlans.css'; // Import the CSS for styling

const PricingPlans = () => {
  return (
    <div className="pricing-plans-container">
      <h1 className="pricing-title">Pricing Plans</h1>
      <div className="plans-wrapper">
        {/* Free Plan */}
        <div className="plan-box free-plan">
          <h2 className="plan-title">Free Plan</h2>
          <p className="plan-description">Access basic features of DEV@Deakin.</p>
          <button className="plan-button">Choose Free Plan</button>
        </div>

        {/* Premium Plan */}
        <div className="plan-box premium-plan">
          <h2 className="plan-title">Premium Plan</h2>
          <p className="plan-description">Access premium features like themes, analytics dashboard, and more.</p>
          <Link to="/payment"> {/* Correctly linked to the payment page */}
            <button className="plan-button premium-button">Choose Premium Plan</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
