import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../theme';

type Props = {navigation: any};

const PaymentSuccessScreen = ({navigation}: Props) => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.content}>
      <View style={styles.check}><Text style={styles.checkText}>✓</Text></View>
      <Text style={styles.title}>Payment Successful</Text>
      <Text style={styles.subtitle}>Your March rent payment has been recorded successfully.</Text>
      <View style={styles.banner}><Text style={styles.bannerText}>₹8,500 paid</Text><Text style={styles.bannerSub}>UPI payment · Confirmed</Text></View>
      <Pressable style={styles.button} onPress={() => navigation.popToTop()}><Text style={styles.buttonText}>Back to Dashboard</Text></Pressable>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: colors.surface},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center', padding: 28},
  check: {width: 82, height: 82, borderRadius: 41, backgroundColor: colors.successSoft, alignItems: 'center', justifyContent: 'center', marginBottom: 24},
  checkText: {fontSize: 42, fontWeight: '700', color: colors.success},
  title: {fontSize: 24, fontWeight: '800', color: colors.text},
  subtitle: {fontSize: 13, color: colors.textSecondary, textAlign: 'center', lineHeight: 19, marginTop: 8},
  banner: {width: '100%', marginTop: 26, padding: 18, borderRadius: 14, backgroundColor: colors.blueSoft, alignItems: 'center'},
  bannerText: {fontSize: 22, fontWeight: '800', color: colors.primary},
  bannerSub: {fontSize: 11, color: colors.textSecondary, marginTop: 4},
  button: {width: '100%', height: 48, borderRadius: 12, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginTop: 18},
  buttonText: {fontSize: 14, fontWeight: '700', color: colors.surface},
});

export default PaymentSuccessScreen;
