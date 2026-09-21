import React from 'react';
import {Alert, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi, Kaushik</Text>
            <Text style={styles.location}>SRY Heritage · Room 302</Text>
          </View>
          <Pressable onPress={() => Alert.alert('Notifications', 'You are all caught up.')} style={styles.notification}><Text style={styles.notificationIcon}>●</Text></Pressable>
        </View>

        <View style={styles.mealCard}>
          <Text style={styles.cardLabel}>TODAY'S MEALS</Text>
          <Text style={styles.mealType}>BREAKFAST</Text>
          <Text style={styles.mealName}>Poha + Tea</Text>
          <Text style={styles.mealType}>DINNER</Text>
          <Text style={styles.mealName}>Paneer Butter Masala</Text>
          <Text style={styles.mealMeta}>Tomorrow's meals · 1 meal skipped</Text>
          <Pressable onPress={() => Alert.alert('Meals', 'Tomorrow’s meal preferences will open here.')} style={styles.mealButton}><Text style={styles.mealButtonText}>Update tomorrow's meals</Text></Pressable>
        </View>

        <View style={styles.quickActions}>
          <View style={styles.quickCard}>
            <View style={[styles.actionIcon, styles.rentIcon]}><Text style={styles.actionIconText}>₹</Text></View>
            <Text style={styles.actionTitle}>Rent</Text>
            <Text style={styles.rentDue}>Due in 3 days</Text>
            <Pressable onPress={() => Alert.alert('Rent', 'Your rent payment flow will open here.')} style={styles.payButton}><Text style={styles.payButtonText}>Pay now</Text></Pressable>
          </View>
          <View style={styles.quickCard}>
            <View style={[styles.actionIcon, styles.issueIcon]}><Text style={[styles.actionIconText, styles.issueIconText]}>!</Text></View>
            <Text style={styles.actionTitle}>Issues</Text>
            <Text style={styles.issueMeta}>Light, fan, water...</Text>
            <Pressable onPress={() => Alert.alert('Report issue', 'The issue report form will open here.')} style={styles.reportButton}><Text style={styles.reportButtonText}>Report</Text></Pressable>
          </View>
        </View>

        <View style={styles.noticeHeader}><Text style={styles.noticeLabel}>NOTICE BOARD</Text><Pressable><Text style={styles.viewAll}>View all</Text></Pressable></View>
        <View style={styles.noticeCard}>
          <View style={styles.noticeRail} />
          <View style={styles.noticeBody}>
            <View style={styles.noticeTitleRow}><Text style={styles.noticeTitle}>Water supply off</Text><Text style={styles.noticeDate}>OCT 24</Text></View>
            <Text style={styles.noticeText}>Maintenance work scheduled for the overhead tanks. Please store enough water for your daily needs.</Text>
            <Pressable><Text style={styles.noticeLink}>Show more</Text></Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: '#FFFFFF'},
  content: {paddingHorizontal: 20, paddingTop: 18, paddingBottom: 30},
  header: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 21},
  greeting: {fontSize: 24, fontWeight: '800', color: '#162237', letterSpacing: -0.6},
  location: {fontSize: 12, fontWeight: '600', color: '#8290A4', marginTop: 4},
  notification: {height: 38, width: 38, borderRadius: 19, backgroundColor: '#F1F5FA', alignItems: 'center', justifyContent: 'center'},
  notificationIcon: {fontSize: 17, color: '#2F6FE4'},
  mealCard: {backgroundColor: '#3675E7', borderRadius: 16, padding: 17, shadowColor: '#2F6FE4', shadowOpacity: 0.24, shadowOffset: {width: 0, height: 7}, shadowRadius: 15, elevation: 4},
  cardLabel: {fontSize: 10, letterSpacing: 0.8, fontWeight: '900', color: '#E8F0FF', marginBottom: 15},
  mealType: {fontSize: 9, letterSpacing: 0.65, fontWeight: '800', color: '#C9DBFF', marginTop: 3},
  mealName: {fontSize: 16, fontWeight: '800', color: '#FFFFFF', marginTop: 2, marginBottom: 7},
  mealMeta: {fontSize: 11, color: '#D4E2FF', marginTop: 3, marginBottom: 15},
  mealButton: {height: 39, borderRadius: 9, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center'},
  mealButtonText: {fontSize: 12, fontWeight: '800', color: '#2F6FE4'},
  quickActions: {flexDirection: 'row', gap: 13, marginTop: 20},
  quickCard: {flex: 1, minHeight: 175, backgroundColor: '#FFFFFF', borderRadius: 14, padding: 13, borderWidth: 1, borderColor: '#EEF2F7', shadowColor: '#95A4B8', shadowOpacity: 0.1, shadowRadius: 9, shadowOffset: {width: 0, height: 3}, elevation: 2},
  actionIcon: {height: 28, width: 28, borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginBottom: 11},
  rentIcon: {backgroundColor: '#E6F0FF'}, issueIcon: {backgroundColor: '#FFEBEF'},
  actionIconText: {fontSize: 16, fontWeight: '900', color: '#3675E7'}, issueIconText: {color: '#E86373'},
  actionTitle: {fontSize: 15, fontWeight: '800', color: '#1A2A40'}, rentDue: {fontSize: 11, color: '#D17862', marginTop: 4}, issueMeta: {fontSize: 10, color: '#92A0B1', marginTop: 5},
  payButton: {marginTop: 'auto', height: 36, backgroundColor: '#142238', borderRadius: 9, alignItems: 'center', justifyContent: 'center'},
  payButtonText: {fontSize: 12, fontWeight: '800', color: '#FFFFFF'},
  reportButton: {marginTop: 'auto', height: 36, backgroundColor: '#FFFFFF', borderRadius: 9, borderWidth: 1, borderColor: '#E5EAF1', alignItems: 'center', justifyContent: 'center'},
  reportButtonText: {fontSize: 12, fontWeight: '800', color: '#44546A'},
  noticeHeader: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 26, marginBottom: 10},
  noticeLabel: {fontSize: 10, letterSpacing: 0.9, fontWeight: '900', color: '#94A1B1'}, viewAll: {fontSize: 11, fontWeight: '800', color: '#3675E7'},
  noticeCard: {flexDirection: 'row', overflow: 'hidden', borderRadius: 13, borderWidth: 1, borderColor: '#EDF1F6', backgroundColor: '#FFFFFF'},
  noticeRail: {width: 4, backgroundColor: '#3675E7'}, noticeBody: {padding: 14, flex: 1}, noticeTitleRow: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'},
  noticeTitle: {fontSize: 13, fontWeight: '800', color: '#23364F'}, noticeDate: {fontSize: 9, fontWeight: '800', color: '#A7B2C1'},
  noticeText: {fontSize: 11, lineHeight: 16, color: '#718096', marginTop: 6}, noticeLink: {fontSize: 10, color: '#3675E7', fontWeight: '800', marginTop: 8},
});

export default HomeScreen;
