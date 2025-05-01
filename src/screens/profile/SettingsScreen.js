import React from 'react';
import { ComingSoonScreen } from '../common';

/**
 * SettingsScreen component for app settings
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object
 * @returns {JSX.Element} SettingsScreen component
 */
const SettingsScreen = ({ navigation, route }) => {
  return (
    <ComingSoonScreen
      title="Settings"
      message="Our settings feature is coming soon! You'll be able to customize your app experience, manage notifications, and set your preferences."
      iconName="settings-outline"
      buttonText="Go to Profile"
      onButtonPress={() => navigation.goBack()}
    />
  );
};

export default SettingsScreen;
