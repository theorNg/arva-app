import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/colors';
import { typography } from '../theme/typography';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  style?: any;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: spacing.md,
    marginVertical: spacing.sm,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  value: {
    ...typography.h2,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.caption,
    color: colors.textSecondary,
  },
}); 