import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../theme';

const NoticeCard = () => (
  <View style={styles.card}>
    <View style={styles.iconWrap}><Text style={styles.icon}>i</Text></View>
    <View style={styles.body}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>Water supply off</Text>
        <Text style={styles.date}>OCT 24, 10:30 AM</Text>
      </View>
      <Text style={styles.text}>
        Maintenance work scheduled for overhead tanks. Please store enough water for your daily needs during this period.
      </Text>
      <Text style={styles.link}>Show more</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', gap: 10, padding: 16,
    backgroundColor: colors.surface, borderRadius: 16,
    borderWidth: 1, borderColor: '#EEF0F3',
    borderLeftWidth: 4, borderLeftColor: colors.primary,
  },
  iconWrap: {paddingTop: 1},
  icon: {
    width: 22, height: 22, borderRadius: 11, overflow: 'hidden',
    textAlign: 'center', textAlignVertical: 'center',
    color: colors.primary, fontWeight: '900', fontSize: 14,
    borderWidth: 1, borderColor: colors.primary,
  },
  body: {flex: 1},
  titleRow: {flexDirection: 'row', justifyContent: 'space-between', gap: 8},
  title: {flex: 1, fontSize: 14, fontWeight: '700', color: colors.text},
  date: {fontSize: 9, fontWeight: '600', color: '#9AA3AF'},
  text: {fontSize: 11, lineHeight: 16, color: colors.textMuted, marginTop: 5},
  link: {fontSize: 10, fontWeight: '800', color: colors.primary, marginTop: 7},
});

export default NoticeCard;
