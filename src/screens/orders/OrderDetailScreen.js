import React from 'react';
import { ComingSoonScreen } from '../common';

/**
 * OrderDetailScreen component for displaying order details
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object
 * @returns {JSX.Element} OrderDetailScreen component
 */
const OrderDetailScreen = ({ navigation, route }) => {
  return (
    <ComingSoonScreen
      title="Order Details"
      message="Our order details feature is coming soon! You'll be able to view detailed information about your order, including items, prices, and delivery status."
      iconName="document-text-outline"
      buttonText="Go to Orders"
      onButtonPress={() => navigation.goBack()}
    />
  );
};

export default OrderDetailScreen;
