import { FlatList, View } from 'react-native';
import React from 'react';
import { SIZES } from '../../constants';
import ProductCardView from './ProductCardView';
import styles from './productsRow.style';

const ProductsRow = () => {
  const products = [
    1, 2, 3, 4
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCardView />}
        horizontal={true}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductsRow;
