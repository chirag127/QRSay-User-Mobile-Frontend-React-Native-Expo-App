import React from 'react';
import { ComingSoonScreen } from '../common';

/**
 * OrderTrackingScreen component for tracking order status
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object
 * @returns {JSX.Element} OrderTrackingScreen component
 */
const OrderTrackingScreen = ({ navigation, route }) => {
  return (
    <ComingSoonScreen
      title="Track Order"
      message="Our order tracking feature is coming soon! You'll be able to track the status of your order in real-time, from preparation to delivery."
      iconName="location-outline"
      buttonText="Go to Order Details"
      onButtonPress={() => navigation.goBack()}
    />
  );
};

export default OrderTrackingScreen;
