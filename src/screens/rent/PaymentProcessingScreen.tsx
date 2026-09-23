import React, {useEffect} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../theme';

type Props = {navigation: any};

const PaymentProcessingScreen = ({navigation}: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('PaymentSuccess'), 1800);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.icon}><ActivityIndicator size="large" color={colors.primary} /></View>
        <Text style={styles.title}>Processing Payment</Text>
        <Text style={styles.subtitle}>Please wait while we confirm your payment.</Text>
        <Text style={styles.amount}>₹8,500</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: colors.surface},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32},
  icon: {width: 76, height: 76, borderRadius: 38, backgroundColor: colors.blueSoft, alignItems: 'center', justifyContent: 'center', marginBottom: 24},
  title: {fontSize: 22, fontWeight: '700', color: colors.text},
  subtitle: {fontSize: 13, color: colors.textSecondary, textAlign: 'center', marginTop: 8, lineHeight: 19},
  amount: {fontSize: 28, fontWeight: '800', color: colors.primary, marginTop: 22},
});

export default PaymentProcessingScreen;
