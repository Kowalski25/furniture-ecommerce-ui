import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS, SIZES } from '../../constants/index';

const Carousel = () => {
  const slides = [
    "https://d326fntlu7tb1e.cloudfront.net/uploads/cb2e64a8-ad4c-4d45-b58b-b0c7e11b6bb4-fn1.jpg",
    "https://d326fntlu7tb1e.cloudfront.net/uploads/b1f6d96d-3297-4270-ba65-657dc2bc0236-fn2.jpg",
    require('../../assets/images/fn3.jpg'),
  ];

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: '93%', marginTop: 15 }}
        circleLoop={true}
        dotsTransitionDuration={100}
        autoplay={true}
        autoplayInterval={4000}
        imageLoadingColor={'gray'}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center'
  },
});
