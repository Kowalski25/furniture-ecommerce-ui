import React, { useState } from 'react';
import { 
  View, 
  Text,
  Image, 
  TouchableOpacity, 
} from 'react-native';
import { 
  Ionicons, 
  SimpleLineIcons,
  MaterialCommunityIcons 
} from '@expo/vector-icons';
import styles from './productDetails.style';
import { COLORS, SIZES } from '../constants';

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(1);
  const isDisabled = count <= 1;

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

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
            <TouchableOpacity 
              onPress={decrement}
              disabled={isDisabled}
              style={{
                opacity: isDisabled ? 0.2 : 1,
              }}
            >
              <SimpleLineIcons name='minus' size={20} />
            </TouchableOpacity>

            <Text style={styles.itemCount}>{ count }</Text>

            <TouchableOpacity onPress={increment} >
              <SimpleLineIcons name='plus' size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description title</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
        <View style={{marginBottom: SIZES.small}}>
          <View style={styles.location}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name='location-outline' size={20} />
              <Text> Bacolor, Pampanga</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons name='truck-delivery-outline' size={20} />
              <Text>  Free Delivery </Text>
            </View>
          </View>
        </View>

      </View>
    </View>
  );
};

export default ProductDetails;
