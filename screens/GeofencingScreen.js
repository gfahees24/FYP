import React, { Component } from 'react';
import { StyleSheet, View, Image, ToastAndroid } from 'react-native';
import MapView, { Marker, Polygon, Circle, Polyline } from 'react-native-maps';
import GeoFencing from 'react-native-geo-fencing';
export default class GeofencingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 25.3668426,
      longitute: 68.3583788,

      baitlatitude: 25.083329,
      baitlongitude: 67.010464,

      hietlatitude: 25.08359,
      hietlongitude: 67.006783,

      sportcenterlatitude: 25.083688,
      sportcenterlongitude: 67.011032,

      dentallatitude: 25.083638,
      dentallongitude: 67.005886,

      timestamp: null,
    };
  }

  componentDidMount() {
    //-------------------- Start Get current location of user---------//

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitute: position.coords.longitude,
          timestamp: position.timestamp,
        });
      },

      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: false, timeout: 50000 }
    );
    //-----------------End current location of user--------//

    //-----------------Start geo fencing-------------//

    //-------Set fencing boundary for particular area--------------//
    const polygon = [
      { lat: 25.088416, lng: 67.006178 },
      { lat: 25.083882, lng: 67.002117 },
      { lat: 25.080374, lng: 67.013113 },
      { lat: 25.086891, lng: 67.012261 },
      { lat: 25.088416, lng: 67.006178 },
      // last point has to be same as first point
    ];
    //-----------------End boundary of area--------------------//

    //-----------------another user point-----------//
    let point = {
      baitlatitude: 25.083329,
      baitlongitude: 67.010464,

      hietlatitude: 25.08359,
      hietlongitude: 67.006783,

      sportcenterlatitude: 25.083688,
      sportcenterlongitude: 67.011032,

      dentallatitude: 25.083638,
      dentallongitude: 67.005886,
    };

    //-----------------point end of user-------------//

    // set point and polygon on contains Location method

    GeoFencing.containsLocation(point, polygon)
      .then(() => ToastAndroid.show('User is within area', ToastAndroid.SHORT))
      .catch(() =>
        ToastAndroid.show('User is not within area', ToastAndroid.SHORT)
      );
  }

  //--------------------End geo fencing ------------//

  // console.log("latitude is=="+this.state.latitude);
  // console.log("longitute is=="+this.state.longitute)

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitute,
            latitudeDelta: 0.015 * 0.3,
            longitudeDelta: 0.0121 * 0.3,
          }}
          showsUserLocation={true}
          followUserLocation={true}
          zoomEnabled={true}
          showsScale={true}>
          {/*------------------------------User Location--------------------- */}
          <MapView.Circle
            key={(this.state.latitude + this.state.longitute).toString()}
            center={{
              latitude: this.state.latitude,
              longitude: this.state.longitute,
            }}
            radius={100}
            strokeWidth={5}
            strokeColor={'green'}
            fillColor={'rgba(230,238,255,0.5)'}
          />

          {/* Marker Add */}
          <MapView.Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitute,
            }}
            title={'Hey User'}
            image={require('./assets/logo-2.png')}
          />
          {/*---------------------------Bait ul Hikmah Location--------------------- */}
          <MapView.Circle
            key={(
              this.state.baitlatitude + this.state.baitlongitude
            ).toString()}
            center={{
              latitude: this.state.baitlatitude,
              longitude: this.state.baitlongitude,
            }}
            radius={10}
            strokeWidth={5}
            strokeColor={'red'}
            fillColor={'rgba(230,238,255,0.5)'}
          />

          {/* Marker Add */}
          <Marker
            coordinate={{
              latitude: this.state.baitlatitude,
              longitude: this.state.baitlongitude,
            }}
            title={'Hey User, Welcome To Bait ul Hikmah'}
          />
          {/*---------------------------HIET Location--------------------- */}
          <MapView.Circle
            key={(
              this.state.hietlatitude + this.state.hietlongitude
            ).toString()}
            center={{
              latitude: this.state.hietlatitude,
              longitude: this.state.hietlongitude,
            }}
            radius={10}
            strokeWidth={5}
            strokeColor={'red'}
            fillColor={'rgba(230,238,255,0.5)'}
          />

          {/* Marker Add */}
          <Marker
            coordinate={{
              latitude: this.state.hietlatitude,
              longitude: this.state.hietlongitude,
            }}
            title={'Hey User, Welcome To Hiet Department'}
          />
          {/*---------------------------Sports Center Location--------------------- */}
          <MapView.Circle
            key={(
              this.state.sportcenterlatitude + this.state.sportcenterlongitude
            ).toString()}
            center={{
              latitude: this.state.sportcenterlatitude,
              longitude: this.state.sportcenterlongitude,
            }}
            radius={10}
            strokeWidth={5}
            strokeColor={'red'}
            fillColor={'rgba(230,238,255,0.5)'}
          />

          {/* Marker Add */}
          <MapView.Marker
            coordinate={{
              latitude: this.state.sportcenterlatitude,
              longitude: this.state.sportcenterlongitude,
            }}
            title={'Hey User, Welcome To Sports Center'}
          />
          {/*---------------------------Dental College Location--------------------- */}
          <MapView.Circle
            key={(
              this.state.dentallatitude + this.state.dentallongitude
            ).toString()}
            center={{
              latitude: this.state.dentallatitude,
              longitude: this.state.dentallongitude,
            }}
            radius={10}
            strokeWidth={5}
            strokeColor={'red'}
            fillColor={'rgba(230,238,255,0.5)'}
          />

          {/* Marker Add */}
          <MapView.Marker
            coordinate={{
              latitude: this.state.dentallatitude,
              longitude: this.state.dentallongitude,
            }}
            title={'Hey User, Welcome To Dental College'}
          />

          <Polyline
            coordinates={[
              { latitude: 25.088416, longitude: 67.006178 },
              { latitude: 25.083882, longitude: 67.002117 },
              { latitude: 25.080374, longitude: 67.013113 },
              { latitude: 25.086891, longitude: 67.012261 },
              { latitude: 25.088416, longitude: 67.006178 },
              // last point has to be same as first point
            ]}
            strokeColor={'blue'}
            strokeWidth={6}
          />

          <Image
            source={require('./assets/logo-1.png')}
            style={{ width: 70, height: 70, marginTop: 10, paddingLeft: 10 }}
          />
        </MapView>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
