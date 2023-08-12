import { FlatList, Text, View } from 'react-native';
import React from 'react';
import { SIZES } from '../../constants';
import ProductCardView from './ProductCardView';

const ProductsRow = () => {
  const products = [
    1, 2, 3, 4
  ]

  return (
    <View style={{ marginTop: SIZES.medium }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCardView />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductsRow;
