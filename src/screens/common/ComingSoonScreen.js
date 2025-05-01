import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../constants/theme';

/**
 * ComingSoonScreen component for displaying "coming soon" screens
 * @param {Object} props - Component props
 * @param {string} props.title - Title to display
 * @param {string} props.message - Message to display
 * @param {string} props.iconName - Ionicons icon name to display
 * @param {string} props.buttonText - Text for the action button
 * @param {Function} props.onButtonPress - Function to call when button is pressed
 * @param {boolean} props.showButton - Whether to show the action button
 * @param {Object} props.style - Additional styles for the container
 * @returns {JSX.Element} ComingSoonScreen component
 */
const ComingSoonScreen = ({
  title,
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
  const screenTitle = title || (route?.name ? `${route.name}` : 'Coming Soon');
  
  // Default button action is to go back
  const handleButtonPress = onButtonPress || (() => navigation.goBack());

  return (
    <View style={[styles.container, style]}>
      <Ionicons name={iconName} size={80} color={theme.colors.primary} style={styles.icon} />
      <Text style={styles.title}>{screenTitle}</Text>
      <Text style={styles.message}>{message}</Text>
      {showButton && (
        <Button
          mode="contained"
          onPress={handleButtonPress}
          style={styles.button}
          color={theme.colors.primary}
        >
          {buttonText}
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    padding: 20,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: theme.colors.text,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    marginBottom: 24,
    color: theme.colors.text,
    textAlign: 'center',
    opacity: 0.7,
    paddingHorizontal: 20,
  },
  button: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
});

export default ComingSoonScreen;
