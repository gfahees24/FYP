 import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  ActivityIndicator,
  FlatList,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  Linking,
  Share
} from 'react-native';


const { width, height } = Dimensions.get('window');
console.displayYellowBox = true;

export default class FeedScreen extends React.Component {
  constructor() {
    super();
    this.state = {
     
      news: [],
      loading: true,
    };
  }

  fetchnews = () => {
    fetch(
      'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=55f18e4c2f574dbfb2f4547e845fbee6'
    )
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          news: response.articles,
          loading: false,
        });
      });
  };

  componentDidMount() {
   
    this.fetchnews();
  }

  sharearticle = async article => {
    try {
        await Share.share ({
          message: 'Checkout this article' + article
        })
    } catch (error) {
      console.log(error)
    }

  }
  

  render() {
      if (this.state.loading) {
        return (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#333',
            }}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        );
      } else {
        return (
          <View style={{ flex: 1, backgroundColor: '#333' }}>
            <View style={{ padding: 30 }}>
              <Text style={{ fontSize: 35, color: '#fff' }}>Top</Text>
              <Text style={{ fontSize: 35, color: '#fff' }}>Headline</Text>
            </View>
            <View style={{ alignSelf: 'center' }}>
              <FlatList
                data={this.state.news}
                renderItem={({ item }) => {
                  return (
                    <TouchableWithoutFeedback onPress={()=>Linking.openURL(item.url)}>
                      <View
                        style={{
                          width: width - 50,
                          height: 200,
                          backgroundColor: '#fff',
                          marginBottom: 15,
                          borderRadius: 15,
                        }}>
                        <Image
                          source={{ uri: item.urlToImage }}
                          style={[
                            StyleSheet.absoluteFill,
                            { borderRadius: 15 },
                          ]}
                        />
                        <View
                          style={{
                            height: '100%',
                            width: '100%',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                          }}>
                          <Text
                            style={{
                              position: 'absolute',
                              bottom: 0,
                              color: '#fff',
                              fontSize: 20,
                              padding: 5,
                            }}>
                            {item.title}
                          </Text>
                            <Text
                            style={{
                              fontSize: 16,
                              color: '#fff',
                              position:'absolute',
                              top: 0,
                              right:0,
                              padding: 5,
                              fontWeight: 'bold'
                            }} onPress={()=>this.sharearticle(item.url)}>
                            Share
                          </Text>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                }}
              />
            </View>
          </View>
        );
      }
  }
}