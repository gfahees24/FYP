 import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import {
  MaterialCommunityIcons,
  AntDesign,
  SimpleLineIcons,
  Entypo,
  FontAwesome,
} from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

const scr = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

const colors = {
  themeColor: '#24685B',
  white: '#fff',
  greyish: '#a4a4a4',
};

const skillIcons = [
  'language-html5',
  'language-css3',
  'language-javascript',
  'react',
  'language-java',
  'language-python',
];
const skillIcons1 = [
  'language-html5',
  'language-css3',
  'language-javascript',
  'language-java',
  'language-php',
];
const projects = [
  {
    name: 'Radar using Ultrasonic Sensor ',
    icon: 'radar',
  },
  {
    name: 'Robotic Hand',
    icon: 'robot-industrial',
  },
  {
    name: 'Airline Reservation Sytem',
    icon: 'phone',
  },
];

const projects1 = [
  {
    name: '100 Watt Inverter',
    icon: 'bolt',
  },
  {
    name: 'Bluetooth Controlled Home Automation',
    icon: 'bluetooth-b',
  },
  {
    name: 'School Management System',
    icon: 'group',
  },
];
export default class ProfileScreen extends React.Component {
  state = {
    email: '',
    displayName: '',
  };

  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;
    this.setState({ email, displayName });
  }

  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
        }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.themeColor}
        />
        <View
          style={{
            backgroundColor: colors.themeColor,
            paddingBottom: scr.height * 0.2,
            borderBottomLeftRadius: scr.width * 0.1,
            borderBottomRightRadius: scr.width * 0.1,
          }}>
          <View
            style={{
              paddingHorizontal: 32,
              alignItems: 'flex-end',
              marginVertical: 20,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 32,
              marginVertical: 36,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Text style={{ fontSize: 30, color: colors.white }}>
              {' '}
              Hi {this.state.displayName}{' '}
            </Text>
            <Text>" "</Text>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                marginRight: 16,
              }}
              source={require('./assets/Fahees.png')}
            />
            <View>
              <Text style={{ fontSize: 20, color: colors.white }}>
                Muhammad Fahees Ghouri
              </Text>
              <Text style={{ color: colors.white }}>
                Computer System Engineer
              </Text>
              <Text style={{ color: colors.white }}>Hamdard University</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: colors.white,
            marginHorizontal: 32,
            padding: 20,
            borderRadius: 20,
            marginTop: -scr.height * 0.15,
            elevation: 8,
            marginBottom: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 8,
            }}>
            <Text style={{ fontSize: 20 }}>Bio</Text>
            <AntDesign name="user" size={20} style={{}} />
          </View>
          <View style={{ marginVertical: 8 }}>
            <Text style={{ color: colors.greyish }}>
              A self-motivated individual, pursuing Computer Engineering Degree
              from Hamdard University, having profound command on many
              High-Level Languages along with excellent communication and
              leadership skill.
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: colors.white,
            marginHorizontal: 32,
            padding: 20,
            borderRadius: 20,
            elevation: 32,
            marginBottom: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 8,
            }}>
            <Text style={{ fontSize: 20 }}>Skills</Text>
            <MaterialCommunityIcons name="pen" size={20} style={{}} />
          </View>
          <ScrollView horizontal style={{ marginVertical: 8 }}>
            {skillIcons.map((skill) => (
              <View
                key={skill}
                style={{
                  width: 48,
                  height: 48,
                  borderWidth: 2,
                  borderRadius: 24,
                  padding: 5,
                  borderColor: colors.themeColor,
                  marginHorizontal: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name={skill}
                  size={30}
                  style={{
                    color: colors.themeColor,
                  }}
                />
              </View>
            ))}
          </ScrollView>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: 24 }}>
          {projects.map((project) => (
            <View
              style={{
                backgroundColor: colors.themeColor,
                marginHorizontal: 8,
                padding: 20,
                borderRadius: 16,
                marginBottom: 16,
                alignItems: 'center',
                width: scr.width * 0.7,
              }}>
              <Text style={{ color: colors.white, fontSize: 20 }}>
                {project.name}
              </Text>
              <MaterialCommunityIcons
                name={project.icon}
                size={150}
                style={{ color: colors.white, marginVertical: 40 }}
              />
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: colors.white,
                    borderRadius: 8,
                  }}></View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View
          style={{
            backgroundColor: colors.white,
            marginHorizontal: 32,
            padding: 20,
            borderRadius: 20,
            elevation: 32,
            marginBottom: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 8,
            }}>
            <Text style={{ fontSize: 20 }}>Stats</Text>
            <MaterialCommunityIcons name="trending-up" size={20} style={{}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 8,
              alignItems: 'flex-end',
            }}>
            <Text style={{ color: colors.greyish }}>PROJECTS DONE </Text>
            <Text style={{ fontSize: 50, color: colors.themeColor }}>11+</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 8,
              alignItems: 'flex-end',
            }}>
            <Text style={{ fontSize: 50, color: colors.themeColor }}>3.8</Text>
            <Text style={{ color: colors.greyish }}>CGPA</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: colors.white,
            marginHorizontal: 32,
            padding: 20,
            borderRadius: 20,
            elevation: 32,
            marginBottom: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 8,
            }}></View>
        </View>
        <View
          style={{
            backgroundColor: colors.themeColor,
            paddingBottom: scr.height * 0.2,
            borderBottomLeftRadius: scr.width * 0.1,
            borderBottomRightRadius: scr.width * 0.1,
          }}>
          <View
            style={{
              paddingHorizontal: 32,
              alignItems: 'flex-end',
              marginVertical: 20,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 32,
              marginVertical: 36,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                marginRight: 16,
              }}
              source={require('./assets/Malahim.png')}
            />
            <View>
              <Text style={{ fontSize: 20, color: colors.white }}>
                Muhammad Malahim Ayoub
              </Text>
              <Text style={{ color: colors.white }}>
                Computer System Engineer
              </Text>
              <Text style={{ color: colors.white }}>Hamdard University</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: colors.white,
            marginHorizontal: 32,
            padding: 20,
            borderRadius: 20,
            marginTop: -scr.height * 0.15,
            elevation: 8,
            marginBottom: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 8,
            }}>
            <Text style={{ fontSize: 20 }}>Bio</Text>
            <AntDesign name="user" size={20} style={{}} />
          </View>
          <View style={{ marginVertical: 8 }}>
            <Text style={{ color: colors.greyish }}>
              The most innovative solution to a complex problem is often the
              simplest one. But as anyone who’s devoted their time to big ideas
              knows, simple and easy are two very different things. I am fueled
              by my passion for understanding the nuances of different
              programming languages while creating interactive UI/UX.
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: colors.white,
            marginHorizontal: 32,
            padding: 20,
            borderRadius: 20,
            elevation: 32,
            marginBottom: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 8,
            }}>
            <Text style={{ fontSize: 20 }}>Skills</Text>
            <MaterialCommunityIcons name="pen" size={20} style={{}} />
          </View>
          <ScrollView horizontal style={{ marginVertical: 8 }}>
            {skillIcons1.map((skill) => (
              <View
                key={skill}
                style={{
                  width: 48,
                  height: 48,
                  borderWidth: 2,
                  borderRadius: 24,
                  padding: 5,
                  borderColor: colors.themeColor,
                  marginHorizontal: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name={skill}
                  size={30}
                  style={{
                    color: colors.themeColor,
                  }}
                />
              </View>
            ))}
          </ScrollView>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: 24 }}>
          {projects1.map((project) => (
            <View
              style={{
                backgroundColor: colors.themeColor,
                marginHorizontal: 8,
                padding: 20,
                borderRadius: 16,
                marginBottom: 16,
                alignItems: 'center',
                width: scr.width * 0.7,
              }}>
              <Text style={{ color: colors.white, fontSize: 20 }}>
                {project.name}
              </Text>
              <FontAwesome
                name={project.icon}
                size={150}
                style={{ color: colors.white, marginVertical: 40 }}
              />
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: colors.white,
                    borderRadius: 8,
                  }}></View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View
          style={{
            backgroundColor: colors.white,
            marginHorizontal: 32,
            padding: 20,
            borderRadius: 20,
            elevation: 32,
            marginBottom: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 8,
            }}>
            <Text style={{ fontSize: 20 }}>Stats</Text>
            <MaterialCommunityIcons name="trending-up" size={20} style={{}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 8,
              alignItems: 'flex-end',
            }}>
            <Text style={{ color: colors.greyish }}>PROJECTS DONE </Text>
            <Text style={{ fontSize: 50, color: colors.themeColor }}>14+</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 8,
              alignItems: 'flex-end',
            }}>
            <Text style={{ fontSize: 50, color: colors.themeColor }}>3.6</Text>
            <Text style={{ color: colors.greyish }}> CGPA</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: colors.white,
            marginHorizontal: 32,
            padding: 20,
            borderRadius: 20,
            elevation: 32,
            marginBottom: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 8,
            }}>
            <Text style={{ fontSize: 20 }}>Connect With Us</Text>
            {/* <MaterialCommunityIcons name="pen" size={20} style={{}} /> */}
          </View>
          <ScrollView horizontal style={{ marginVertical: 8 }}>
            <View
              style={{
                marginVertical: 8,
              }}>
              <Text style={{ fontSize: 20, color: colors.themeColor }}>
                Social Apps:
              </Text>
            </View>
            <MaterialCommunityIcons
              name="facebook"
              size={30}
              style={{
                color: colors.themeColor,
                borderRadius: 5,
                marginRight: 5,
              }}
            />
            <MaterialCommunityIcons
              name="twitter"
              size={30}
              style={{
                color: colors.themeColor,
                borderRadius: 5,
                marginRight: 5,
              }}
            />
            <MaterialCommunityIcons
              name="instagram"
              size={30}
              style={{
                color: colors.themeColor,
                borderRadius: 5,
                marginRight: 5,
              }}
            />
          </ScrollView>
          <ScrollView verticle style={{ marginVertical: 8 }}>
            <MaterialCommunityIcons
              name="phone"
              size={20}
              style={{
                color: colors.themeColor,
                borderRadius: 5,
                marginRight: 5,
              }}>
              <Text style={{ fontSize: 20, color: colors.themeColor }}>
                : +92-336-3443048
              </Text>
            </MaterialCommunityIcons>

            <MaterialCommunityIcons
              name="email-open"
              size={20}
              style={{
                color: colors.themeColor,
                borderRadius: 5,
                marginRight: 5,
              }}>
              <Text style={{ fontSize: 20, color: colors.themeColor }}>
                : gfahees@yahoo.com
              </Text>
            </MaterialCommunityIcons>
            <MaterialCommunityIcons
              name="access-point"
              size={20}
              style={{
                color: colors.themeColor,
                borderRadius: 5,
                marginRight: 5,
              }}>
              <Text style={{ fontSize: 20, color: colors.themeColor }}>
                FUMS
              </Text>
            </MaterialCommunityIcons>
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.signOutUser}>
          <Text style={{ color: '#FFF', fontWeight: '500' }}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    marginHorizontal: 30,
    backgroundColor: '#E9446A',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
