import { Text, View, TouchableOpacity, Image, } from 'react-native';
import React from 'react';
import styles from './productCardView.style';

const ProductCardView = () => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      activeOpacity={0.9}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image 
            source={{uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/cb2e64a8-ad4c-4d45-b58b-b0c7e11b6bb4-fn1.jpg"}}
            style={styles.image}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title}>Product</Text>
          <Text style={styles}></Text>
          <Text style={styles}></Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;