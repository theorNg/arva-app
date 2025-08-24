import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/colors';
import { typography } from '../theme/typography';

interface DataPoint {
  label: string;
  value: number;
}

interface SimpleLineChartProps {
  title?: string;
  data: DataPoint[];
  color?: string;
  height?: number;
  width?: number;
  xAxisLabel?: string;
  yAxisLabel?: string;
}

export const SimpleLineChart: React.FC<SimpleLineChartProps> = ({
  title,
  data,
  color = colors.accent,
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
    const minValue = Math.min(...data.map(d => d.value));
    const chartHeight = height - 80;
    const chartWidth = width - 60;
    const pointSpacing = chartWidth / (data.length - 1);

    return (
      <View style={styles.container}>
        {title && <Text style={styles.title}>{title}</Text>}
        
        {/* Chart Container */}
        <View style={[styles.chartContainer, { width, height }]}>
          {/* Grid Lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
            const y = chartHeight - ratio * chartHeight;
            return (
              <View
                key={`grid-${index}`}
                style={[
                  styles.gridLine,
                  {
                    position: 'absolute',
                    top: y,
                    left: 30,
                    right: 30,
                  },
                ]}
              />
            );
          })}

          {/* Line Chart */}
          <View style={styles.lineContainer}>
            {data.map((item, index) => {
              const x = 30 + index * pointSpacing;
              const valueRatio = maxValue > minValue ? (item.value - minValue) / (maxValue - minValue) : 0.5;
              const y = chartHeight - valueRatio * chartHeight;

              return (
                <View key={index}>
                  {/* Data Point */}
                  <View
                    style={[
                      styles.dataPoint,
                      {
                        backgroundColor: color,
                        position: 'absolute',
                        left: x - 4,
                        top: y - 4,
                      },
                    ]}
                  />
                  
                  {/* Value Label */}
                  <Text
                    style={[
                      styles.valueLabel,
                      {
                        position: 'absolute',
                        top: y - 20,
                        left: x - 15,
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
                        left: x - 15,
                      },
                    ]}
                  >
                    {item.label}
                  </Text>

                  {/* Connect to next point */}
                  {index < data.length - 1 && (
                    <View
                      style={[
                        styles.lineSegment,
                        {
                          backgroundColor: color,
                          position: 'absolute',
                          left: x,
                          top: y,
                          width: pointSpacing,
                          height: 2,
                          transform: [
                            {
                              rotate: `${Math.atan2(
                                (data[index + 1].value - item.value) / (maxValue - minValue) * chartHeight,
                                pointSpacing
                              )}rad`,
                            },
                          ],
                        },
                      ]}
                    />
                  )}
                </View>
              );
            })}
          </View>

          {/* Y-axis labels */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
            const y = chartHeight - ratio * chartHeight;
            const value = minValue + ratio * (maxValue - minValue);
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
                {value.toFixed(1)}
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
    console.error('SimpleLineChart error:', error);
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
  gridLine: {
    height: 1,
    backgroundColor: colors.border,
    opacity: 0.3,
  },
  lineContainer: {
    position: 'relative',
  },
  dataPoint: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  lineSegment: {
    transformOrigin: 'left center',
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
