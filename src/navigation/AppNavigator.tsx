import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabIcon from '../components/TabIcon';
import IssuesScreen from '../screens/IssuesScreen';
import ReportIssueScreen from '../screens/issues/ReportIssueScreen';
import IssueDetailsScreen from '../screens/issues/IssueDetailsScreen';

import HomeScreen from '../screens/HomeScreen';
import MealsScreen from '../screens/MealsScreen';
import CommunityScreen from '../screens/CommunityScreen';
import MarketplaceScreen from '../screens/MarketplaceScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RentScreen from '../screens/rent/RentScreen';
import PayOnlineScreen from '../screens/rent/PayOnlineScreen';
import PaymentProcessingScreen from '../screens/rent/PaymentProcessingScreen';
import PaymentSuccessScreen from '../screens/rent/PaymentSuccessScreen';
import RentVerificationScreen from '../screens/rent/RentVerificationScreen';
import RentVerifiedScreen from '../screens/rent/RentVerifiedScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const renderTabIcon =
  (name: 'home' | 'meals' | 'community' | 'market' | 'profile') =>
  ({
    color,
    size,
    focused,
  }: {
    color: string;
    size: number;
    focused: boolean;
  }) =>
    (
      <View
        style={{
          width: 40,
          height: 32,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {focused && (
          <View
            pointerEvents="none"
            style={{
              position: 'absolute',
              top: -9,
              width: 20,
              height: 3,
              backgroundColor: '#136DEC',
              borderBottomLeftRadius: 3,
              borderBottomRightRadius: 3,
            }}
          />
        )}

        <TabIcon name={name} color={color} size={size} focused={focused} />
      </View>
    );

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,

      tabBarActiveTintColor: '#136DEC',
      tabBarInactiveTintColor: '#8B8F98',

      tabBarStyle: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        height: 82,
        paddingTop: 6,
        paddingBottom: 6,
      },

      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '500',
        marginTop: 2,
      },

      tabBarIconStyle: {
        marginBottom: 0,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: renderTabIcon('home'),
      }}
    />

    <Tab.Screen
      name="Meals"
      component={MealsScreen}
      options={{
        tabBarIcon: renderTabIcon('meals'),
      }}
    />

    <Tab.Screen
      name="Community"
      component={CommunityScreen}
      options={{
        tabBarIcon: renderTabIcon('community'),
      }}
    />

    <Tab.Screen
      name="Marketplace"
      component={MarketplaceScreen}
      options={{
        tabBarLabel: 'Market',
        tabBarIcon: renderTabIcon('market'),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: renderTabIcon('profile'),
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainTabs" component={MainTabs} />
    <Stack.Screen name="Issues" component={IssuesScreen} />
    <Stack.Screen name="IssueDetails" component={IssueDetailsScreen} />
    <Stack.Screen name="ReportIssue" component={ReportIssueScreen} />

    <Stack.Screen name="Rent" component={RentScreen} />
    <Stack.Screen name="PayOnline" component={PayOnlineScreen} />
    <Stack.Screen
      name="PaymentProcessing"
      component={PaymentProcessingScreen}
    />
    <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />
    <Stack.Screen name="RentVerification" component={RentVerificationScreen} />
    <Stack.Screen name="RentVerified" component={RentVerifiedScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
