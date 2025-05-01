import React from 'react';
import { ComingSoonScreen } from '../common';

/**
 * AddressesScreen component for managing user addresses
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object
 * @returns {JSX.Element} AddressesScreen component
 */
const AddressesScreen = ({ navigation, route }) => {
  return (
    <ComingSoonScreen
      title="My Addresses"
      message="Our address management feature is coming soon! You'll be able to add, edit, and delete delivery addresses for your orders."
      iconName="location-outline"
      buttonText="Go to Profile"
      onButtonPress={() => navigation.goBack()}
    />
  );
};

export default AddressesScreen;
