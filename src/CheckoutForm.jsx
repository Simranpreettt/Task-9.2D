import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import ThankYouMessage from './ThankYouMessage'; // Import the ThankYouMessage component

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState(null); // To track payment status

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error("Payment error:", error.message);
      setPaymentStatus('error');
    } else {
      alert("Payment successful!");
      setPaymentStatus('success'); // Update payment status to "success"
    }
  };

  return (
    <div>
      {!paymentStatus && (
        <form onSubmit={handleSubmit}>
          <label>
            Card Details
            <CardElement className="card-input" />
          </label>
          <button type="submit" disabled={!stripe}>Pay</button>
        </form>
      )}

      {/* Render the ThankYouMessage component when payment is successful */}
      {paymentStatus === 'success' && <ThankYouMessage />}
    </div>
  );
};

export default CheckoutForm;
