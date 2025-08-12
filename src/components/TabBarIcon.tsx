import React from 'react';
import { Feather } from '@expo/vector-icons';
import { colors } from '../theme/colors';

interface TabBarIconProps {
  name: keyof typeof Feather.glyphMap;
  focused: boolean;
  size?: number;
}

export const TabBarIcon: React.FC<TabBarIconProps> = ({
  name,
  focused,
  size = 24,
}) => {
  return (
    <Feather
      name={name}
      size={size}
      color={focused ? colors.accent : colors.textSecondary}
    />
  );
}; 