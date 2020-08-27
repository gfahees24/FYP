 import React, { Component } from 'react';
import {View, 
        Text,
        StyleSheet,
        StatusBar,
        Dimensions,
        TouchableOpacity} from 'react-native'

import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as firebase from 'firebase'

export default class LoadingScreen extends React.Component {
    

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ?  "App" : "Auth");
        });
    }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.header}>
                    <Animatable.Image
                    animation="bounceIn"
                    duration={1500}
                    source={require('./assets/logo.png')}
                    style={styles.logo}
                    resizeMode={"stretch"}
                    />
                </View>
                <Animatable.View style={styles.footer}
                animation="fadeInUpBig">
                    <Text style={styles.title}>Let's Explore by Connecting Yourself with World Class Location Based Advertisement Application </Text>
                    <Text style={styles.text}>Sign in with account </Text>
                    <View style={styles.button}>
                        <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate("Login")}>
                            <LinearGradient 
                            colors={['#5db8fe','#39cff2']}
                            style={styles.signIn}>
                                <Text style={styles.textSign}>Get Started</Text>
                                <MaterialIcons
                                name="navigate-next"
                                color="white"
                                size={20}
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                   </View>
                
                </Animatable.View>

            </View>
        )
      
    }
}
const {height}=Dimensions.get("screen");
const height_logo= height*0.7*0.4;
var styles= StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#0f1025'
    },
    header: {
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    footer: {
        flex:1,
        backgroundColor: 'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontWeight: 'bold',
        fontSize:20
    },
    text: {
        color: 'gray',
        marginTop:5
    },
    button: {
        alignItems:'flex-end',
        marginTop:30
    },
    signIn: {
        width:150,
        height:40,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row'
    },
    textSign: {
        color:'white',
        fontWeight: 'bold'
    }

});