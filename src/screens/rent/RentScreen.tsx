import React from 'react';
import {Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../theme';
import {rentDetails} from '../../data/mock/rent';

type Props = {navigation: any};

const RentScreen = ({navigation}: Props) => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()} style={styles.circle}>
        <Text style={styles.back}>‹</Text>
      </Pressable>
      <View style={styles.headerText}>
        <Text style={styles.title}>Rent</Text>
        <Text style={styles.subtitle}>{rentDetails.month} · ₹{rentDetails.amount.toLocaleString('en-IN')}</Text>
      </View>
      <View style={styles.circle} />
    </View>

    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.amountSection}>
        <Text style={styles.label}>RENT DUE</Text>
        <Text style={styles.amount}>₹{rentDetails.amount.toLocaleString('en-IN')}</Text>
        <Text style={styles.meta}>{rentDetails.month} · {rentDetails.pgName}</Text>
      </View>

      <View style={styles.summaryCard}>
        <Row label="Room" value={rentDetails.room} />
        <Row label="Due date" value="In 3 days" />
        <Row label="Status" value="Payment due" valueStyle={styles.warning} />
      </View>

      <Text style={styles.sectionLabel}>PAYMENT OPTIONS</Text>

      <Pressable style={styles.option} onPress={() => navigation.navigate('PayOnline')}>
        <View style={styles.optionIcon}><Text style={styles.iconText}>₹</Text></View>
        <View style={styles.optionBody}>
          <Text style={styles.optionTitle}>Pay Online</Text>
          <Text style={styles.optionSubtitle}>UPI payment · Instant confirmation</Text>
        </View>
        <Text style={styles.chevron}>›</Text>
      </Pressable>

      <Pressable style={styles.option} onPress={() => navigation.navigate('RentVerification')}>
        <View style={[styles.optionIcon, styles.greenIcon]}><Text style={styles.iconText}>✓</Text></View>
        <View style={styles.optionBody}>
          <Text style={styles.optionTitle}>Mark as Paid</Text>
          <Text style={styles.optionSubtitle}>Already paid? Submit your receipt</Text>
        </View>
        <Text style={styles.chevron}>›</Text>
      </Pressable>
    </ScrollView>
  </SafeAreaView>
);

const Row = ({label, value, valueStyle}: any) => (
  <View style={styles.row}>
    <Text style={styles.rowLabel}>{label}</Text>
    <Text style={[styles.rowValue, valueStyle]}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: colors.surface},
  header: {
    height: 64, backgroundColor: colors.primary,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16,
  },
  circle: {
    width: 30, height: 30, borderRadius: 15, backgroundColor: 'rgba(255,255,255,0.20)',
    alignItems: 'center', justifyContent: 'center',
  },
  back: {fontSize: 28, lineHeight: 28, color: colors.surface, marginTop: -3},
  headerText: {alignItems: 'center'},
  title: {fontSize: 20, fontWeight: '700', color: colors.surface},
  subtitle: {fontSize: 11, fontWeight: '500', color: 'rgba(255,255,255,0.70)', marginTop: 2},
  content: {padding: 24, paddingTop: 36, paddingBottom: 40},
  amountSection: {alignItems: 'center', marginBottom: 28},
  label: {fontSize: 10, fontWeight: '800', letterSpacing: 0.8, color: colors.textSecondary},
  amount: {fontSize: 34, fontWeight: '700', color: colors.text, marginVertical: 8},
  meta: {fontSize: 11, fontWeight: '500', color: colors.textSecondary},
  summaryCard: {
    backgroundColor: colors.surface, borderWidth: 1, borderColor: '#EEEEEE',
    borderRadius: 14, paddingHorizontal: 14, marginBottom: 28,
  },
  row: {
    minHeight: 48, flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#F0F0F0',
  },
  rowLabel: {fontSize: 12, color: colors.textSecondary},
  rowValue: {fontSize: 12, fontWeight: '700', color: colors.text},
  warning: {color: '#C65D36'},
  sectionLabel: {
    fontSize: 10, fontWeight: '800', letterSpacing: 0.8,
    color: colors.textSecondary, marginBottom: 10,
  },
  option: {
    minHeight: 72, flexDirection: 'row', alignItems: 'center', gap: 12,
    paddingHorizontal: 14, paddingVertical: 12,
    backgroundColor: colors.surface, borderWidth: 1, borderColor: '#EEEEEE',
    borderRadius: 14, marginBottom: 10,
  },
  optionIcon: {
    width: 42, height: 42, borderRadius: 10, backgroundColor: colors.blueSoft,
    alignItems: 'center', justifyContent: 'center',
  },
  greenIcon: {backgroundColor: colors.successSoft},
  iconText: {fontSize: 18, fontWeight: '800', color: colors.primary},
  optionBody: {flex: 1},
  optionTitle: {fontSize: 13, fontWeight: '700', color: '#1A1A1A'},
  optionSubtitle: {fontSize: 11, color: colors.textSecondary, marginTop: 2},
  chevron: {fontSize: 24, color: colors.textSecondary},
});

export default RentScreen;
