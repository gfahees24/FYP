 import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, ImageBackground,Image, StatusBar} from 'react-native';
import {Content} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase'


export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };

    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    }

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                });
            })
            .catch(error => this.setState({ errorMessage: error.message}));
    };

    render(){
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
            
            <ImageBackground 
            style={{ flex: 1 }}
            source={require("./assets/registerback.jpg")}>
            <View style={styles.container}>
                
            <TouchableOpacity style={styles.back} onPress={()=> this.props.navigation.goBack()}>
                <Ionicons name="ios-arrow-round-back" size={32} color="#FFF"></Ionicons>
            </TouchableOpacity>
            <View style={styles.errorMessage}>
        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
            </View>

            <Content>
            <View style={styles.form}>
                
                <View>
                    
                    <Text style={styles.inputTitle}>Full Name</Text>
                    <TextInput 
                    style={styles.input} 
                    autoCapitalize="none"
                    onChangeText={name => this.setState({ name })}
                    vlaue={this.state.name}
                    ></TextInput>
                </View>
                <View style={{ marginTop: 32 }}>
                    <Text style={styles.inputTitle}>Email Address</Text>
                    <TextInput 
                    style={styles.input} 
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                    vlaue={this.state.email}
                    ></TextInput>
                </View>

                <View style={{ marginTop: 32 }}>
                    <Text style={styles.inputTitle}>Password</Text>
                    <TextInput 
                    style={styles.input} 
                    secureTextEntry 
                    autoCapitalize="none"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    ></TextInput>
                </View>
                
            </View>

            <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                <Text style={{ color: "#FFF", fontWeight: "500"}}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf: "center", marginTop: 25}}
            onPress={() => this.props.navigation.navigate("Login")}>
                <Text style={{ color: "#414959", fontSize: 13}}>
                    Already a Member? <Text style={{ fontWeight: "500", color: "#E9446A"}}>Sign In</Text>
                </Text>
            </TouchableOpacity>
            </Content>
        </View>
        
        </ImageBackground>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


    errorMessage: {
        height: 72,
        alignItems:"center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },

    form: {
        marginTop: 200,
        marginHorizontal:30
    },
    inputTitle: {
        color: "#000000",
        fontSize: 15,
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    input: {
        borderBottomColor: "#000000",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#FFD700"
    },

    button: {
        marginTop:30,
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    back: {
        position:"absolute",
        top: 48,
        left: 32,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "rgba(21,22,48,0.1)",
        alignItems: "center",
        justifyContent: "center"
    }

})