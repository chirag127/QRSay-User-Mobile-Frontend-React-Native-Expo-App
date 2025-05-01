import React from 'react';
import { ComingSoonScreen } from '../common';

/**
 * PaymentScreen component for processing payments
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object
 * @returns {JSX.Element} PaymentScreen component
 */
const PaymentScreen = ({ navigation, route }) => {
  return (
    <ComingSoonScreen
      title="Payment"
      message="Our payment feature is coming soon! You'll be able to securely pay for your order using various payment methods."
      iconName="wallet-outline"
      buttonText="Go to Checkout"
      onButtonPress={() => navigation.goBack()}
    />
  );
};

export default PaymentScreen;
