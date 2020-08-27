import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
  View,
} from 'react-native';
import firebase from '../database/firebaseDb';

class AddVehicleScreen extends Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('users');
    this.state = {
      owner_name: '',
      car_reg_no: '',
      make: '',
      model_year: '',
      horse_power: '',
      isLoading: false,
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };
viewscreen(){
this.props.navigation.navigate('DisplayScreen')
}
  storeUser() {
    if (this.state.owner_name === '') {
      alert('Fill at least your name!');
    } else {
      this.setState({
        isLoading: true,
      });
      this.dbRef
        .add({
          owner_name: this.state.owner_name,
          car_reg_no: this.state.car_reg_no,
          make: this.state.make,
          model_year: this.state.model_year,
          horse_power: this.state.horse_power,
        })
        .then((res) => {
          this.setState({
            owner_name: '',
            car_reg_no: '',
            make: '',
            model_year: '',
            horse_power: '',
            isLoading: false,
          });
          this.props.navigation.navigate('DisplayScreen');
        })
        .catch((err) => {
          console.error('Error found: ', err);
          this.setState({
            isLoading: false,
          });
        });
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={'Owner Name'}
            value={this.state.owner_name}
            onChangeText={(val) => this.inputValueUpdate(val, 'owner_name')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            multiline={true}
            numberOfLines={4}
            placeholder={'Car Registration Number'}
            value={this.state.car_reg_no}
            onChangeText={(val) => this.inputValueUpdate(val, 'car_reg_no')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={'Make'}
            value={this.state.make}
            onChangeText={(val) => this.inputValueUpdate(val, 'make')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={'Model Year'}
            value={this.state.model_year}
            onChangeText={(val) => this.inputValueUpdate(val, 'model_year')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={'Horse Power'}
            value={this.state.horse_power}
            onChangeText={(val) => this.inputValueUpdate(val, 'horse_power')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Add Vehicle"
            onPress={() => this.storeUser()}
            color="#19AC52"
          />
        </View>
         <View style={styles.button}>
          <Button
            title="Vehicle Details"
            onPress={() => this.viewscreen()}
            color="#19AC52"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddVehicleScreen;
