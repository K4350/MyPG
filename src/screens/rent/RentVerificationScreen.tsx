import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../theme';

type Props = {navigation: any};

const RentVerificationScreen = ({navigation}: Props) => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()} style={styles.circle}><Text style={styles.back}>‹</Text></Pressable>
      <Text style={styles.title}>Rent Verification</Text>
      <View style={styles.circle} />
    </View>
    <View style={styles.content}>
      <View style={styles.icon}><Text style={styles.iconText}>✓</Text></View>
      <Text style={styles.heading}>Already paid?</Text>
      <Text style={styles.subtitle}>Submit your payment details so the PG manager can verify your rent payment.</Text>
      <View style={styles.card}>
        <Text style={styles.cardLabel}>RENT AMOUNT</Text>
        <Text style={styles.amount}>₹8,500</Text>
        <Text style={styles.meta}>March 2026 · SRV Heritage</Text>
      </View>
      <Pressable style={styles.primaryButton} onPress={() => navigation.replace('RentVerified')}>
        <Text style={styles.primaryText}>Submit for Verification</Text>
      </Pressable>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: colors.surface},
  header: {height: 64, backgroundColor: colors.primary, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16},
  circle: {width: 30, height: 30, borderRadius: 15, backgroundColor: 'rgba(255,255,255,0.20)', alignItems: 'center', justifyContent: 'center'},
  back: {fontSize: 28, color: colors.surface, marginTop: -3},
  title: {fontSize: 20, fontWeight: '700', color: colors.surface},
  content: {flex: 1, padding: 24, alignItems: 'center', justifyContent: 'center'},
  icon: {width: 72, height: 72, borderRadius: 36, backgroundColor: colors.blueSoft, alignItems: 'center', justifyContent: 'center'},
  iconText: {fontSize: 32, fontWeight: '800', color: colors.primary},
  heading: {fontSize: 24, fontWeight: '800', color: colors.text, marginTop: 22},
  subtitle: {fontSize: 13, color: colors.textSecondary, textAlign: 'center', lineHeight: 19, marginTop: 8},
  card: {width: '100%', marginTop: 24, padding: 18, borderRadius: 14, borderWidth: 1, borderColor: '#EEEEEE', alignItems: 'center'},
  cardLabel: {fontSize: 10, fontWeight: '800', letterSpacing: 0.8, color: colors.textSecondary},
  amount: {fontSize: 28, fontWeight: '800', color: colors.text, marginVertical: 7},
  meta: {fontSize: 11, color: colors.textSecondary},
  primaryButton: {width: '100%', height: 48, borderRadius: 12, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginTop: 16},
  primaryText: {fontSize: 14, fontWeight: '700', color: colors.surface},
});

export default RentVerificationScreen;
