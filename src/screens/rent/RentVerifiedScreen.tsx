import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../theme';

type Props = {navigation: any};

const RentVerifiedScreen = ({navigation}: Props) => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.content}>
      <View style={styles.check}><Text style={styles.checkText}>✓</Text></View>
      <Text style={styles.title}>Payment Submitted</Text>
      <Text style={styles.subtitle}>Your rent payment has been submitted for verification by the PG manager.</Text>
      <View style={styles.banner}><Text style={styles.bannerTitle}>Verification pending</Text><Text style={styles.bannerText}>₹8,500 · March 2026</Text></View>
      <Pressable style={styles.button} onPress={() => navigation.popToTop()}><Text style={styles.buttonText}>Back to Dashboard</Text></Pressable>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: colors.surface},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center', padding: 28},
  check: {width: 82, height: 82, borderRadius: 41, backgroundColor: colors.successSoft, alignItems: 'center', justifyContent: 'center'},
  checkText: {fontSize: 42, fontWeight: '700', color: colors.success},
  title: {fontSize: 24, fontWeight: '800', color: colors.text, marginTop: 24},
  subtitle: {fontSize: 13, color: colors.textSecondary, textAlign: 'center', lineHeight: 19, marginTop: 8},
  banner: {width: '100%', marginTop: 26, padding: 18, borderRadius: 14, backgroundColor: '#F3F4F5', alignItems: 'center'},
  bannerTitle: {fontSize: 14, fontWeight: '800', color: colors.text},
  bannerText: {fontSize: 12, color: colors.textSecondary, marginTop: 5},
  button: {width: '100%', height: 48, borderRadius: 12, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginTop: 18},
  buttonText: {fontSize: 14, fontWeight: '700', color: colors.surface},
});

export default RentVerifiedScreen;
