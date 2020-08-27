import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileScreen from './ProfileScreen.js';
import VehicleScreen from './VehicleScreen.js';
import AddVehicleScreen from './AddVehicleScreen.js';
import DisplayScreen from './DisplayScreen.js';
import UpdateDetailScreen from './UpdateDetailScreen.js';
import GeofenceScreen from './GeofencingScreen.js';
import OffersScreen from './OffersScreen.js';
import FeedScreen from './FeedScreen.js';

function Feed({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Button
        title="Feed"
        onPress={() => this.props.navigation.navigate('FeedScreen')}
    ></Button>
    </View>
  );
}
function Offers({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
       title=" "
        onPress={() => this.props.navigation.navigate('OffersScreen')}
      ></Button>
    </View>
  );
}
function Profile({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Button
        title=" "
        onPress={() => this.props.navigation.navigate('ProfileScreen')}
      ></Button>
    </View>
  );
}

function Geofence({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Button
        title=" "
        onPress={() => this.props.navigation.navigate('GeofencingScreen')}
     ></Button>
    </View>
  );
}

function VehicleDetails({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Button
        title=" "
        onPress={() => this.props.navigation.navigate('VehicleScreen')}
      ></Button>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Vehicle Details"
        component={VehicleDetails}
        options={{
          tabBarLabel: 'MotoDash',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-car" color={color} size={26} />
          ),
        }}
      />
          <Tab.Screen
        name="Happy Shopping"
        component={Geofence}
        options={{
          tabBarLabel: 'Geofence',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-map" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Chill Pill"
        component={Offers}
        options={{
          tabBarLabel: 'Offers',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-bowtie" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About App"
        component={Profile}
        options={{
          tabBarLabel: 'Portfolio',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
