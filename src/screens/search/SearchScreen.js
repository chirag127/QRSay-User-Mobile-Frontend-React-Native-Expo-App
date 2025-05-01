import React from 'react';
import { ComingSoonScreen } from '../common';

/**
 * SearchScreen component for searching restaurants and dishes
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object
 * @returns {JSX.Element} SearchScreen component
 */
const SearchScreen = ({ navigation, route }) => {
  return (
    <ComingSoonScreen
      title="Search"
      message="Our search feature is coming soon! You'll be able to search for restaurants, dishes, and cuisines."
      iconName="search-outline"
      buttonText="Go to Home"
      onButtonPress={() => navigation.navigate('Home')}
    />
  );
};

export default SearchScreen;
