import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MarketplaceScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marketplace</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
});

export default MarketplaceScreen;