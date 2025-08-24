import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/colors';
import { typography } from '../theme/typography';

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

interface SimpleBarChartProps {
  title?: string;
  data: DataPoint[];
  height?: number;
  width?: number;
  xAxisLabel?: string;
  yAxisLabel?: string;
}

export const SimpleBarChart: React.FC<SimpleBarChartProps> = ({
  title,
  data,
  height = 200,
  width = 300,
  xAxisLabel,
  yAxisLabel,
}) => {
  // Error handling
  if (!data || data.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.noData}>Không có dữ liệu</Text>
      </View>
    );
  }

  try {
    const maxValue = Math.max(...data.map(d => d.value));
    const barWidth = Math.max(20, (width - 60) / data.length);
    const chartHeight = height - 80;
    const barSpacing = 10;

    return (
      <View style={styles.container}>
        {title && <Text style={styles.title}>{title}</Text>}
        
        {/* Chart Container */}
        <View style={[styles.chartContainer, { width, height }]}>
          {/* Bars */}
          {data.map((item, index) => {
            const barHeight = maxValue > 0 ? (item.value / maxValue) * chartHeight : 0;
            const x = 30 + index * (barWidth + barSpacing);
            const y = chartHeight - barHeight;
            const barColor = item.color || colors.accent;

            return (
              <View key={index} style={styles.barContainer}>
                {/* Bar */}
                <View
                  style={[
                    styles.bar,
                    {
                      width: barWidth,
                      height: barHeight,
                      backgroundColor: barColor,
                      position: 'absolute',
                      bottom: 0,
                      left: x,
                    },
                  ]}
                />
                
                {/* Value Label */}
                <Text
                  style={[
                    styles.valueLabel,
                    {
                      position: 'absolute',
                      bottom: barHeight + 5,
                      left: x + barWidth / 2,
                      transform: [{ translateX: -15 }],
                    },
                  ]}
                >
                  {item.value}
                </Text>
                
                {/* X-axis Label */}
                <Text
                  style={[
                    styles.xAxisLabel,
                    {
                      position: 'absolute',
                      bottom: -25,
                      left: x + barWidth / 2,
                      transform: [{ translateX: -15 }],
                    },
                  ]}
                >
                  {item.label}
                </Text>
              </View>
            );
          })}

          {/* Y-axis labels */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
            const y = chartHeight - ratio * chartHeight;
            const value = ratio * maxValue;
            return (
              <Text
                key={`y-label-${index}`}
                style={[
                  styles.yAxisLabel,
                  {
                    position: 'absolute',
                    top: y - 8,
                    left: 5,
                  },
                ]}
              >
                {value.toFixed(0)}
              </Text>
            );
          })}
        </View>

        {/* Axis Labels */}
        {xAxisLabel && (
          <Text style={styles.axisTitle}>{xAxisLabel}</Text>
        )}
        {yAxisLabel && (
          <Text style={[styles.axisTitle, styles.yAxisTitle]}>{yAxisLabel}</Text>
        )}
      </View>
    );
  } catch (error) {
    console.error('SimpleBarChart error:', error);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.noData}>Không thể hiển thị biểu đồ</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.md,
  },
  title: {
    ...typography.h3,
    color: colors.textPrimary,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  noData: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  chartContainer: {
    position: 'relative',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.lg,
  },
  barContainer: {
    position: 'relative',
  },
  bar: {
    borderRadius: 4,
  },
  valueLabel: {
    ...typography.bodySmall,
    color: colors.textPrimary,
    fontSize: 10,
    textAlign: 'center',
  },
  xAxisLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    fontSize: 10,
    textAlign: 'center',
  },
  yAxisLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    fontSize: 9,
  },
  axisTitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
  yAxisTitle: {
    position: 'absolute',
    left: -40,
    top: '50%',
    transform: [{ rotate: '-90deg' }],
  },
});
