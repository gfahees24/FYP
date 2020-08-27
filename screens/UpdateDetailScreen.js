import React, { Component } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
  View,
} from 'react-native';
import firebase from '../database/firebaseDb';

class UpdateDetailScreen extends Component {
  constructor() {
    super();
    this.state = {
      owner_name: '',
      car_reg_no: '',
      make: '',
      model_year: '',
      horse_power: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    const dbRef = firebase
      .firestore()
      .collection('users')
      .doc(this.props.route.params.userkey);
    dbRef.get().then((res) => {
      if (res.exists) {
        const user = res.data();
        this.setState({
          key: res.id,
          owner_name: user.owner_name,
          car_reg_no: user.car_reg_no,
          make: user.make,
          model_year: user.model_year,
          horse_power: user.horse_power,
          isLoading: false,
        });
      } else {
        console.log('Document does not exist!');
      }
    });
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  updateUser() {
    this.setState({
      isLoading: true,
    });
    const updateDBRef = firebase
      .firestore()
      .collection('users')
      .doc(this.state.key);
    updateDBRef
      .set({
        owner_name: this.state.owner_name,
        car_reg_no: this.state.car_reg_no,
        make: this.state.make,
        model_year: this.state.model_year,
        horse_power: this.state.horse_power,
      })
      .then((docRef) => {
        this.setState({
          key: '',
          owner_name: '',
          car_reg_no: '',
          make: '',
          model_year: '',
          horse_power: '',
          isLoading: false,
        });
        this.props.navigation.navigate('DisplayScreen');
      })
      .catch((error) => {
        console.error('Error: ', error);
        this.setState({
          isLoading: false,
        });
      });
  }

  deleteUser() {
    const dbRef = firebase
      .firestore()
      .collection('users')
      .doc(this.props.route.params.userkey);
    dbRef.delete().then((res) => {
      console.log('Item removed from database');
      this.props.navigation.navigate('DisplayScreen');
    });
  }

  openTwoButtonAlert = () => {
    Alert.alert(
      'Delete User',
      'Are you sure?',
      [
        { text: 'Yes', onPress: () => this.deleteUser() },
        {
          text: 'No',
          onPress: () => console.log('No item was removed'),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      }
    );
  };

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
            title="Update"
            onPress={() => this.updateUser()}
            color="#19AC52"
          />
        </View>
        <View>
          <Button
            title="Delete"
            onPress={this.openTwoButtonAlert}
            color="#E37399"
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
  button: {
    marginBottom: 7,
  },
});

export default UpdateDetailScreen;
