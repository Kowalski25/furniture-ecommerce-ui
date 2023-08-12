import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import styles from './search.style';
import { Feather, Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants';

const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name='camera-outline'
            size={SIZES.xLarge} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            value=''
            onPressIn={() => {}}
            placeholder='Search for anything here'
            style={styles.searchInput}
          />
        </View>
        <View style={styles.searchBtn}>
          <TouchableOpacity>
            <Feather 
              name='search' 
              size={24}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
