import React from 'react';
import { ComingSoonScreen } from '../common';

/**
 * OrdersScreen component for displaying the user's orders
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object
 * @returns {JSX.Element} OrdersScreen component
 */
const OrdersScreen = ({ navigation, route }) => {
  return (
    <ComingSoonScreen
      title="My Orders"
      message="Our orders feature is coming soon! You'll be able to view your current and past orders, track deliveries, and reorder your favorites."
      iconName="receipt-outline"
      buttonText="Go to Home"
      onButtonPress={() => navigation.navigate('Home')}
    />
  );
};

export default OrdersScreen;
