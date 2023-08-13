import { View, TouchableOpacity, Image, SafeAreaView, Text } from 'react-native';
import React from 'react';
import styles from './productDetails.style';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { COLORS } from '../constants';

const ProductDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Ionicons name='chevron-back' size={32}  />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }}>
          <Ionicons name='heart' size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/cb2e64a8-ad4c-4d45-b58b-b0c7e11b6bb4-fn1.jpg" }}
        style={styles.image}
      />
      <View style={styles.details}>

        <View style={styles.titleRow}>
          <Text style={styles.title}>Product 1</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$249.90</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons 
                key={index}
                name='star'
                size={22}
                color='gold'
              />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={() => {}}>
              <SimpleLineIcons 
                name='plus' size={20}
              />
            </TouchableOpacity>

            <Text style={styles.ratingText}> 1 </Text>
            <TouchableOpacity onPress={() => {}}>
              <SimpleLineIcons 
                name='minus' size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
        

      </View>
    </View>
  );
};

export default ProductDetails;
