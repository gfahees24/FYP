 import React, { Component } from 'react';
import {View, Text, StyleSheet,TextInput, Image, StatusBar, LayoutAnimation,  ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Container, Footer, Button, FooterTab } from  'native-base'
import * as firebase from 'firebase'
export default class LoginScreen extends React.Component {
    static navigationOption = {
        headerShown: false
    };

    state = {
        email: "",
        password: "",
        errorMessage: null
    }

    handleLogin = () => {
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .catch(error => this.setState({ errorMessage: error.message}));
    };
    render(){
       
        return (
            <Container>
              <ImageBackground 
                  style={{ flex: 1 }}
                  source={require("./assets/loginback.png")}>
            <View style={styles.container}>
                
                
            
            <View style={styles.errorMessage}>
        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
            </View>


            <View style={styles.form}>
                <View>
                    <Text style={styles.inputTitle}>Email Address</Text>
                    <TextInput 
                    style={styles.input} 
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
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

            <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                <Text style={{ color: "#FFF", fontWeight: "500"}}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf: "center", marginTop: 20}} 
            onPress={() => this.props.navigation.navigate("Register")}>
                <Text style={{ color: "#414959", fontSize: 13}}>
                    New to Brando? <Text style={{ fontWeight: "500", color: "#E9446A"}}>Sign Up</Text>
                </Text>
            </TouchableOpacity>
        </View>
        
            <Footer>
                    <FooterTab>
                        <Button transparent>
                            <Text>Developed By Muhammad Fahees Ghouri & Malahim Ayoub</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </ImageBackground>
        </Container>
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
        color: "#8A8F9E",
        fontSize: 12,
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    input: {
        borderBottomColor: "#8A8F9E",
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
    }

})