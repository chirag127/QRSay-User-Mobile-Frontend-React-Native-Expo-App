import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { EmptyState } from '../index';
import { theme } from '../../constants/theme';

/**
 * ComingSoonScreen component for displaying "coming soon" screens
 * @param {Object} props - Component props
 * @param {string} props.title - Title to display (defaults to "Coming Soon")
 * @param {string} props.message - Message to display (defaults to a standard message)
 * @param {string} props.iconName - Ionicons icon name to display (defaults to "construct-outline")
 * @param {string} props.buttonText - Text for the action button (defaults to "Go Back")
 * @param {Function} props.onButtonPress - Function to call when button is pressed (defaults to navigation.goBack)
 * @param {boolean} props.showButton - Whether to show the action button (defaults to true)
 * @param {Object} props.style - Additional styles for the container
 * @returns {JSX.Element} ComingSoonScreen component
 */
const ComingSoonScreen = ({
  title = 'Coming Soon',
  message = 'This feature is currently under development and will be available soon.',
  iconName = 'construct-outline',
  buttonText = 'Go Back',
  onButtonPress,
  showButton = true,
  style,
  route,
}) => {
  const navigation = useNavigation();
  
  // Use route name in title if available and no custom title provided
  const screenTitle = title === 'Coming Soon' && route?.name 
    ? `${route.name} - Coming Soon` 
    : title;
  
  // Default button action is to go back
  const handleButtonPress = onButtonPress || (() => navigation.goBack());

  // Create a custom icon component using Ionicons
  const iconComponent = (
    <Ionicons name={iconName} size={80} color={theme.colors.primary} style={styles.icon} />
  );

  return (
    <EmptyState
      title={screenTitle}
      message={message}
      icon={null} // We're using a custom icon component instead
      buttonText={showButton ? buttonText : null}
      onButtonPress={showButton ? handleButtonPress : null}
      fullScreen={true}
      style={[styles.container, style]}
    >
      {iconComponent}
    </EmptyState>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    marginBottom: 20,
  },
});

export default ComingSoonScreen;
