 import React, { Component } from 'react';
 import {View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator();

function AddVehicleScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Button
        title=" "
        onPress={() => this.props.navigation.navigate('AddVehicleScreen')}
      ></Button>
    </View>
  );
}
function DisplayScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Button
        title=" "
        onPress={() => this.props.navigation.navigate('DisplayScreen')}
      ></Button>
    </View>
  );
}
function UpdateDetailScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Button
        title=" "
        onPress={() => this.props.navigation.navigate('UpdateDetailScreen')}
     ></Button>
    </View>
  );
}
function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: '#621FF7',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
      <Stack.Screen 
        name="AddVehicleScreen" 
        component={AddVehicleScreen} 
        options={{ title: 'Add Vehicle' }}
      />
      <Stack.Screen 
        name="DisplayScreen" 
        component={DisplayScreen} 
        options={{ title: 'Vehicles List' }}
      />
      <Stack.Screen 
       name="UpdateDetailScreen" 
       component={UpdateDetailScreen} 
       options={{ title: 'Details' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}