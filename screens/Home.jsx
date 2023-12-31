import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './home.style';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { Welcome } from '../components';
import Carousel from '../components/home/Carousel';
import Headings from '../components/home/Headings';
import ProductsRow from '../components/products/ProductsRow';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={24} />
          <Text style={styles.location}> Bacolor, Pampanga </Text>

          <View style={{ alignItems: 'flex-end' }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name='shopping-bag' size={24} />
            </TouchableOpacity>
          </View>

        </View>
      </View>

      <ScrollView>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductsRow />
      </ScrollView>

      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

export default Home;
