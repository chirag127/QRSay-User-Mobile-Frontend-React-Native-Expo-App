import React from 'react';
import { ComingSoonScreen } from '../common';

/**
 * SearchResultsScreen component for displaying search results
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object
 * @returns {JSX.Element} SearchResultsScreen component
 */
const SearchResultsScreen = ({ navigation, route }) => {
  return (
    <ComingSoonScreen
      title="Search Results"
      message="Our search results feature is coming soon! You'll be able to see restaurants and dishes that match your search criteria."
      iconName="list-outline"
      buttonText="Go to Search"
      onButtonPress={() => navigation.goBack()}
    />
  );
};

export default SearchResultsScreen;
