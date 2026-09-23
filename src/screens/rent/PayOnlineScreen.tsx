import React from 'react';
import {Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../theme';
import {paymentMethods, rentDetails} from '../../data/mock/rent';

type Props = {navigation: any};

const PayOnlineScreen = ({navigation}: Props) => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()} style={styles.circle}><Text style={styles.back}>‹</Text></Pressable>
      <View style={styles.headerText}>
        <Text style={styles.title}>Pay Online</Text>
        <Text style={styles.subtitle}>{rentDetails.month} · ₹{rentDetails.amount.toLocaleString('en-IN')}</Text>
      </View>
      <View style={styles.circle} />
    </View>
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.amountSection}>
        <Text style={styles.label}>AMOUNT TO PAY</Text>
        <Text style={styles.amount}>₹{rentDetails.amount.toLocaleString('en-IN')}</Text>
        <Text style={styles.meta}>{rentDetails.month} · {rentDetails.pgName}</Text>
      </View>

      <Text style={styles.sectionLabel}>PAY USING UPI APP</Text>
      <View style={styles.methods}>
        {paymentMethods.map(method => (
          <Pressable key={method.id} style={styles.method} onPress={() => navigation.navigate('PaymentProcessing')}>
            <View style={styles.methodIcon}><Text style={styles.methodIconText}>{method.icon}</Text></View>
            <View style={styles.methodBody}>
              <Text style={styles.methodName}>{method.name}</Text>
              <Text style={styles.methodSubtitle}>{method.subtitle}</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
        ))}
        <Pressable style={styles.method} onPress={() => navigation.navigate('PaymentProcessing')}>
          <View style={[styles.methodIcon, styles.addIcon]}><Text style={styles.addText}>+</Text></View>
          <View style={styles.methodBody}>
            <Text style={styles.methodNameAdd}>Add new UPI ID</Text>
            <Text style={styles.methodSubtitle}>Enter UPI ID manually</Text>
          </View>
          <Text style={styles.chevronAdd}>›</Text>
        </Pressable>
      </View>

      <View style={styles.info}>
        <Text style={styles.infoIcon}>💡</Text>
        <Text style={styles.infoText}>After paying in your UPI app, a receipt with UTR number will be generated automatically.</Text>
      </View>

      <View style={styles.secure}>
        <Text style={styles.shield}>♡</Text>
        <Text style={styles.secureText}>SECURE PAYMENT GATEWAY</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: colors.surface},
  header: {height: 64, backgroundColor: colors.primary, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16},
  circle: {width: 30, height: 30, borderRadius: 15, backgroundColor: 'rgba(255,255,255,0.20)', alignItems: 'center', justifyContent: 'center'},
  back: {fontSize: 28, lineHeight: 28, color: colors.surface, marginTop: -3},
  headerText: {alignItems: 'center'}, title: {fontSize: 20, fontWeight: '700', color: colors.surface},
  subtitle: {fontSize: 11, color: 'rgba(255,255,255,0.70)', marginTop: 2},
  content: {padding: 24, paddingTop: 36, paddingBottom: 40},
  amountSection: {alignItems: 'center', marginBottom: 28},
  label: {fontSize: 10, fontWeight: '800', color: colors.textSecondary, letterSpacing: 0.8},
  amount: {fontSize: 34, fontWeight: '700', color: colors.text, marginVertical: 8},
  meta: {fontSize: 11, color: colors.textSecondary, fontWeight: '500'},
  sectionLabel: {fontSize: 10, fontWeight: '800', color: colors.textSecondary, letterSpacing: 0.8, marginBottom: 10},
  methods: {borderWidth: 1, borderColor: '#EEEEEE', borderRadius: 14, overflow: 'hidden', backgroundColor: colors.surface},
  method: {minHeight: 68, flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 14, borderBottomWidth: 1, borderBottomColor: '#EEEEEE'},
  methodIcon: {width: 42, height: 42, borderRadius: 10, backgroundColor: '#F8F9FA', borderWidth: 1, borderColor: colors.borderStrong, alignItems: 'center', justifyContent: 'center'},
  methodIconText: {fontSize: 18, fontWeight: '800', color: colors.text},
  methodBody: {flex: 1}, methodName: {fontSize: 13, fontWeight: '700', color: '#1A1A1A'},
  methodNameAdd: {fontSize: 13, fontWeight: '700', color: colors.primary},
  methodSubtitle: {fontSize: 11, color: colors.textSecondary, marginTop: 2},
  chevron: {fontSize: 24, color: colors.textSecondary},
  addIcon: {backgroundColor: colors.blueSoft, borderWidth: 0}, addText: {fontSize: 22, color: colors.primary},
  chevronAdd: {fontSize: 24, color: colors.primary},
  info: {marginTop: 16, padding: 12, borderRadius: 10, backgroundColor: colors.blueSoft, flexDirection: 'row', gap: 10},
  infoIcon: {fontSize: 16}, infoText: {flex: 1, fontSize: 11, lineHeight: 16, color: colors.primary, fontWeight: '500'},
  secure: {alignItems: 'center', opacity: 0.35, marginTop: 50}, shield: {fontSize: 44, color: colors.textMuted},
  secureText: {fontSize: 10, fontWeight: '800', letterSpacing: 1, marginTop: 8, color: colors.textMuted},
});

export default PayOnlineScreen;
