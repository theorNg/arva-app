import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { deviceSize, responsiveValues, getSafeAreaPadding } from '../theme/responsive';

export const ResponsiveTest: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Responsive Test</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Device Size: {deviceSize.small ? 'Small' : deviceSize.medium ? 'Medium' : deviceSize.large ? 'Large' : 'Tablet'}
        </Text>
        <Text style={styles.infoText}>
          Safe Area Padding: {getSafeAreaPadding().horizontal}px horizontal
        </Text>
        <Text style={styles.infoText}>
          Header Height: {responsiveValues.headerHeight}px
        </Text>
        <Text style={styles.infoText}>
          Card Padding: {responsiveValues.cardPadding}px
        </Text>
        <Text style={styles.infoText}>
          Button Height: {responsiveValues.buttonHeight}px
        </Text>
      </View>
      
      <View style={styles.sampleContainer}>
        <View style={styles.sampleCard}>
          <Text style={styles.sampleText}>Sample Card</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: getSafeAreaPadding().horizontal,
  },
  title: {
    ...typography.h1,
    color: colors.textPrimary,
    textAlign: 'center',
    marginVertical: responsiveValues.headerPadding,
  },
  infoContainer: {
    backgroundColor: colors.card,
    borderRadius: responsiveValues.cardBorderRadius,
    padding: responsiveValues.cardPadding,
    marginBottom: 20,
  },
  infoText: {
    ...typography.body,
    color: colors.textPrimary,
    marginBottom: 8,
  },
  sampleContainer: {
    alignItems: 'center',
  },
  sampleCard: {
    backgroundColor: colors.card,
    borderRadius: responsiveValues.cardBorderRadius,
    padding: responsiveValues.cardPadding,
    minHeight: responsiveValues.buttonHeight,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  sampleText: {
    ...typography.body,
    color: colors.textPrimary,
  },
});

