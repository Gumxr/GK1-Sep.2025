import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import ExploreScreen from './screens/SportFritid/ExploreScreen';
import FacilityDetailsScreen from './screens/SportFritid/FacilityDetailsScreen';
import BookingScreen from './screens/SportFritid/BookingScreen';
import PreviousScreen from './screens/SportFritid/PreviousScreen';
import ProfileScreen from './screens/SportFritid/ProfileScreen';
import { BookingsProvider } from './store/bookings';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ExploreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" component={ExploreScreen} options={{ title: 'Vælg sportsgren' }} />
      <Stack.Screen name="FacilityDetails" component={FacilityDetailsScreen} options={{ title: 'Vælg bane' }} />
      <Stack.Screen name="Booking" component={BookingScreen} options={{ title: 'Book' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <BookingsProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Søg"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#0a84ff',
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({ focused, color, size }) => {
              let icon = 'ellipse';
              if (route.name === 'Søg') icon = focused ? 'search' : 'search-outline';
              if (route.name === 'Bookinger') icon = focused ? 'calendar' : 'calendar-outline';
              if (route.name === 'Profil') icon = focused ? 'person' : 'person-outline';
              return <Ionicons name={icon} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Søg" component={ExploreStack} />
          <Tab.Screen name="Bookinger" component={PreviousScreen} />
          <Tab.Screen name="Profil" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </BookingsProvider>
  );
}