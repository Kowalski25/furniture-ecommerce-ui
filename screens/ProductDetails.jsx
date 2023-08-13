import { View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './productDetails.style';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';

const ProductDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Ionicons name='chevron-back' size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }}>
          <Ionicons name='heart' size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/cb2e64a8-ad4c-4d45-b58b-b0c7e11b6bb4-fn1.jpg" }}
        style={styles.image}
      />
    </View>
  );
};

export default ProductDetails;
