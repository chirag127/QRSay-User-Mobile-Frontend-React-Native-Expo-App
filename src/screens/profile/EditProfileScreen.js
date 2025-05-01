import React from 'react';
import { ComingSoonScreen } from '../common';

/**
 * EditProfileScreen component for editing user profile
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object
 * @returns {JSX.Element} EditProfileScreen component
 */
const EditProfileScreen = ({ navigation, route }) => {
  return (
    <ComingSoonScreen
      title="Edit Profile"
      message="Our profile editing feature is coming soon! You'll be able to update your personal information, change your profile picture, and manage your account settings."
      iconName="person-outline"
      buttonText="Go to Profile"
      onButtonPress={() => navigation.goBack()}
    />
  );
};

export default EditProfileScreen;
