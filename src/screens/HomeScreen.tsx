import React from 'react';
import {Alert, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import MealSummaryCard from '../components/dashboard/MealSummaryCard';
import RentCard from '../components/dashboard/RentCard';
import IssueCard from '../components/dashboard/IssueCard';
import NoticeCard from '../components/dashboard/NoticeCard';
import {colors} from '../theme';

type Props = {navigation: any};

const HomeScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi, Kaushik 👋</Text>
            <Text style={styles.location}>SRV Heritage / Room 302</Text>
          </View>
          <Pressable
            onPress={() => Alert.alert('Notifications', 'You are all caught up.')}
            style={styles.notification}>
            <Text style={styles.notificationIcon}>●</Text>
            <View style={styles.dot} />
          </Pressable>
        </View>

        <MealSummaryCard
          onUpdate={() => Alert.alert('Meals', 'Tomorrow’s meal preferences will open here.')}
        />

        <View style={styles.actions}>
          <RentCard onPress={() => navigation.navigate('Rent')} />
          <IssueCard
            onPress={() => Alert.alert('Report issue', 'The issue report form will open here.')}
          />
        </View>

        <View style={styles.noticeHeader}>
          <Text style={styles.sectionLabel}>NOTICE BOARD</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>
        <NoticeCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: colors.background},
  content: {paddingHorizontal: 24, paddingTop: 18, paddingBottom: 110},
  header: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between', paddingBottom: 16,
  },
  greeting: {fontSize: 20, fontWeight: '700', color: colors.text},
  location: {fontSize: 14, color: '#64748B', marginTop: 4},
  notification: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: colors.surface, borderWidth: 1, borderColor: '#EEF0F3',
    alignItems: 'center', justifyContent: 'center',
  },
  notificationIcon: {fontSize: 14, color: '#64748B'},
  dot: {
    position: 'absolute', top: 10, right: 10,
    width: 7, height: 7, borderRadius: 4, backgroundColor: colors.primary,
  },
  actions: {flexDirection: 'row', gap: 16, marginTop: 20},
  noticeHeader: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginTop: 22, marginBottom: 12,
  },
  sectionLabel: {
    fontSize: 11, fontWeight: '800', letterSpacing: 1,
    color: '#9AA3AF',
  },
  viewAll: {fontSize: 11, fontWeight: '800', color: colors.primary},
});

export default HomeScreen;
