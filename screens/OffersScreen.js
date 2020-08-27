import React, { Component } from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const FIXED_BAR_WIDTH = 480;
const BAR_SPACE = 0.5;

const images = [
  'https://whatsonsale.com.pk/sites/default/files/styles/medium/public/deal_images/Denizen%20Pakistan%20Freedom%20Sale%202017.jpg?itok=sbk6JH4j',
  'https://i.pinimg.com/236x/91/a6/5b/91a65b414583345a57b62c134f22933e.jpg',
  'https://lh3.googleusercontent.com/proxy/mF369pas283u5Qxp9yjivgVfE6duOyiHOsvYi7ST_sG0uMN7u4fnaMPKA0O12o6u4MzXb_MycMT6IJmZaP0xmdsJvTUuP_gdtuv7UHpDrD_1mag8O3A6qxdDmYvK5m13RoWwb9wXxZq3XT8Qs7sYqcLSSrtmQC9appvbkedvOKXsinlPYHlHlvrOhhv5l42h8dS4l-lhhQ',
  'https://www.lookup.pk/deals/images/17883?w=255&h=200',
  'https://i.dailymail.co.uk/1s/2020/07/14/07/30733718-8519477-The_Australian_retailer_dramatically_reduced_the_price_of_shampo-a-17_1594709211323.jpg',
  'https://i.pinimg.com/originals/fb/35/c5/fb35c5ada75f053b82007974513ceb19.png',
  'https://cdn-images-fishry.azureedge.net/themes/Mobile-View-Banner-1024x1387-M--Up-to-50--Off--a27f16e-one.jpg',
  'https://i.pinimg.com/originals/8a/df/a8/8adfa82c2dc95434c32fe7a25f2b654b.png',
  'https://www.samaa.tv/wp-content/uploads/2019/05/del-frio-384x480.jpg',
  'https://woclothes.com/wp-content/uploads/2020/04/1970205620-1-600x600.jpeg',
];

export default class App extends Component {
  numItems = images.length;
  itemWidth = FIXED_BAR_WIDTH / this.numItems - (this.numItems - 1) * BAR_SPACE;
  animVal = new Animated.Value(0);

  render() {
    let imageArray = [];
    let barArray = [];
    images.forEach((image, i) => {
      console.log(image, i);
      const thisImage = (
        <Image
          key={`image${i}`}
          source={{ uri: image }}
          style={{ width: deviceWidth }}
        />
      );
      imageArray.push(thisImage);

      const scrollBarVal = this.animVal.interpolate({
        inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
        outputRange: [-this.itemWidth, this.itemWidth],
        extrapolate: 'clamp',
      });

      const thisBar = (
        <View
          key={`bar${i}`}
          style={[
            styles.track,
            {
              width: this.itemWidth,
              marginLeft: i === 0 ? 0 : BAR_SPACE,
            },
          ]}>
          <Animated.View
            style={[
              styles.bar,
              {
                width: this.itemWidth,
                transform: [{ translateX: scrollBarVal }],
              },
            ]}
          />
        </View>
      );
      barArray.push(thisBar);
    });

    return (
      <View style={styles.container} flex={1}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={10}
          pagingEnabled
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.animVal } } },
          ])}>
          {imageArray}
        </ScrollView>
        <View style={styles.barContainer}>{barArray}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barContainer: {
    position: 'absolute',
    zIndex: 2,
    top: 40,
    flexDirection: 'row',
  },
  track: {
    backgroundColor: '#ccc',
    overflow: 'hidden',
    height: 2,
  },
  bar: {
    backgroundColor: '#5294d6',
    height: 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
