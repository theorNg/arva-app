import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuthStore } from '../store/useAuthStore';
import { LoginScreen } from '../screens/LoginScreen';
import { BatteryScreen } from '../screens/BatteryScreen';
import { LeaderboardScreen } from '../screens/LeaderboardScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { TabBarIcon } from '../components/TabBarIcon';
import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof import('@expo/vector-icons').Feather.glyphMap;

          if (route.name === 'Community') {
            iconName = 'users';
          } else if (route.name === 'My battery') {
            iconName = 'battery';
          } else if (route.name === 'My profile') {
            iconName = 'user';
          } else {
            iconName = 'circle';
          }

          return <TabBarIcon name={iconName} focused={focused} size={size} />;
        },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="Community" 
        component={LeaderboardScreen}
        options={{
          title: 'Community',
        }}
      />
      <Tab.Screen 
        name="My battery" 
        component={BatteryScreen}
        options={{
          title: 'My battery',
        }}
      />
      <Tab.Screen 
        name="My profile" 
        component={ProfileScreen}
        options={{
          title: 'My profile',
        }}
      />
    </Tab.Navigator>
  );
};

export const RootNavigator = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="Main" component={TabNavigator} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};