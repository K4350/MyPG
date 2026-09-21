import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MealsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meals</Text>
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

export default MealsScreen;