import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../theme';

type Props = {onPress: () => void};

const RentCard = ({onPress}: Props) => (
  <View style={styles.card}>
    <View>
      <View style={styles.iconBox}><Text style={styles.icon}>₹</Text></View>
      <Text style={styles.title}>Rent</Text>
      <Text style={styles.due}>Due in 3 days</Text>
    </View>
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Pay Now</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 180,
    padding: 20,
    borderRadius: 16,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: '#EEF0F3',
    justifyContent: 'space-between',
  },
  iconBox: {
    width: 44, height: 44, borderRadius: 12,
    backgroundColor: '#EFF5FF',
    alignItems: 'center', justifyContent: 'center', marginBottom: 14,
  },
  icon: {fontSize: 18, fontWeight: '800', color: colors.primary},
  title: {fontSize: 16, fontWeight: '700', color: colors.text},
  due: {fontSize: 12, fontWeight: '700', color: '#D06C3D', marginTop: 4},
  button: {
    height: 42, borderRadius: 12, backgroundColor: '#191C1D',
    alignItems: 'center', justifyContent: 'center', marginTop: 18,
  },
  buttonText: {fontSize: 14, fontWeight: '700', color: colors.surface},
});

export default RentCard;
