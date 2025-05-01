import React from 'react';
import { ComingSoonScreen } from '../common';

/**
 * CartScreen component for displaying the user's cart
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object
 * @returns {JSX.Element} CartScreen component
 */
const CartScreen = ({ navigation, route }) => {
  return (
    <ComingSoonScreen
      title="Shopping Cart"
      message="Our cart feature is coming soon! You'll be able to add items to your cart, adjust quantities, and proceed to checkout."
      iconName="cart-outline"
      buttonText="Go to Home"
      onButtonPress={() => navigation.navigate('Home')}
    />
  );
};

export default CartScreen;
