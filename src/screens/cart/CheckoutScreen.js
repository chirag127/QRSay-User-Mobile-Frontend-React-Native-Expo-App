import React from 'react';
import { ComingSoonScreen } from '../common';

/**
 * CheckoutScreen component for the checkout process
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object
 * @returns {JSX.Element} CheckoutScreen component
 */
const CheckoutScreen = ({ navigation, route }) => {
  return (
    <ComingSoonScreen
      title="Checkout"
      message="Our checkout feature is coming soon! You'll be able to review your order, select delivery options, and proceed to payment."
      iconName="card-outline"
      buttonText="Go to Cart"
      onButtonPress={() => navigation.goBack()}
    />
  );
};

export default CheckoutScreen;
