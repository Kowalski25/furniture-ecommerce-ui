import { Text, View, TouchableOpacity, Image, } from 'react-native';
import React from 'react';
import styles from './productCardView.style';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const ProductCardView = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails')}
      activeOpacity={0.9}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/cb2e64a8-ad4c-4d45-b58b-b0c7e11b6bb4-fn1.jpg" }}
            style={styles.image}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>Product</Text>
          <Text style={styles.supplier} numberOfLines={1}>Ikea</Text>
          <Text style={styles.price}>$200</Text>
        </View>
        <TouchableOpacity
          style={styles.addBtn}
          activeOpacity={0.8}
        >
          <Ionicons name='add-circle' size={35} color={COLORS.primary} />
        </TouchableOpacity>

      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
