import React from 'react';
import { ComingSoonScreen } from '../common';

/**
 * DishDetailScreen component for displaying dish details
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object
 * @param {Object} props.route - Route object with params
 * @returns {JSX.Element} DishDetailScreen component
 */
const DishDetailScreen = ({ navigation, route }) => {
  // Get dish name from route params if available
  const dishName = route.params?.dish?.dishName || 'Dish';

  return (
    <ComingSoonScreen
      title={`${dishName} Details`}
      message="Our dish details feature is coming soon! You'll be able to view detailed information about dishes, including ingredients, nutritional information, and reviews."
      iconName="restaurant-outline"
      buttonText="Go to Menu"
      onButtonPress={() => navigation.goBack()}
    />
  );
};

export default DishDetailScreen;
