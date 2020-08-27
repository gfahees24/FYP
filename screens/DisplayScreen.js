// screens/UserScreen.js

import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import firebase from '../database/firebaseDb';

class DisplayScreen extends Component {
  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('users');
    this.state = {
      isLoading: true,
      userArr: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((res) => {
      const {
        owner_name,
        car_reg_no,
        make,
        model_year,
        horse_power,
      } = res.data();
      userArr.push({
        key: res.id,
        res,
        owner_name,
        car_reg_no,
        make,
        model_year,
        horse_power,
      });
    });
    this.setState({
      userArr,
      isLoading: false,
    });
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
        {this.state.userArr.map((item, i) => {
          return (
            <ListItem
              key={i}
              chevron
              bottomDivider
              style={{ color: '#000000' }}
              title={item.owner_name}
              subtitle={item.make}
              onPress={() => {
                this.props.navigation.navigate('UpdateDetailScreen', {
                  userkey: item.key,
                });
              }}
            />
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 22,
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

export default DisplayScreen;
