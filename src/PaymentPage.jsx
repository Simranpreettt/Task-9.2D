import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'; 
import './PaymentPage.css'; // Import the CSS for styling

// Load your Stripe public key
const stripePromise = loadStripe('pk_test_51QKFu9KS3KJWeFjni6H2ViZFtv5KMAKODQDqV1utbHQLUWpnhPYYIwyVvlzTG0qvyVoyYJnfHlvvXYlszB1fyyAh00ocxFCisV');

const PaymentPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="payment-page-container">
        <div className="payment-box">
          <h2>Complete Your Payment</h2>
          {/* CheckoutForm component for handling payment */}
          <CheckoutForm />
        </div>
      </div>
    </Elements>
  );
};

export default PaymentPage;
