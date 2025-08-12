import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

interface AvatarProps {
  size?: number;
  source?: string;
  style?: any;
}

export const Avatar: React.FC<AvatarProps> = ({ 
  size = 40, 
  source, 
  style 
}) => {
  return (
    <View style={[styles.container, { width: size, height: size }, style]}>
      {source ? (
        <Image 
          source={{ uri: source }} 
          style={[styles.image, { width: size, height: size }]}
          accessibilityLabel="User avatar"
        />
      ) : (
        <View style={[styles.placeholder, { width: size, height: size }]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 50,
  },
  placeholder: {
    backgroundColor: colors.border,
    borderRadius: 50,
  },
}); 