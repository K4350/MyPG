import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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

const MainTabs = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Meals" component={MealsScreen} />
    <Tab.Screen name="Community" component={CommunityScreen} />
    <Tab.Screen
      name="Marketplace"
      component={MarketplaceScreen}
      options={{tabBarLabel: 'Market'}}
    />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="MainTabs" component={MainTabs} />
    <Stack.Screen name="Rent" component={RentScreen} />
    <Stack.Screen name="PayOnline" component={PayOnlineScreen} />
    <Stack.Screen name="PaymentProcessing" component={PaymentProcessingScreen} />
    <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />
    <Stack.Screen name="RentVerification" component={RentVerificationScreen} />
    <Stack.Screen name="RentVerified" component={RentVerifiedScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
