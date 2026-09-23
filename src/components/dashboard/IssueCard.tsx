import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../theme';

type Props = {onPress: () => void};

const IssueCard = ({onPress}: Props) => (
  <View style={styles.card}>
    <View>
      <View style={styles.iconBox}><Text style={styles.icon}>!</Text></View>
      <Text style={styles.title}>Issues</Text>
      <Text style={styles.meta}>Light, fan, water...</Text>
    </View>
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Report</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1, minHeight: 180, padding: 20, borderRadius: 16,
    backgroundColor: colors.surface, borderWidth: 1, borderColor: '#EEF0F3',
    justifyContent: 'space-between',
  },
  iconBox: {
    width: 44, height: 44, borderRadius: 12,
    backgroundColor: '#FFF0F2', alignItems: 'center', justifyContent: 'center', marginBottom: 14,
  },
  icon: {fontSize: 18, fontWeight: '900', color: colors.rose},
  title: {fontSize: 16, fontWeight: '700', color: colors.text},
  meta: {fontSize: 12, color: colors.textMuted, marginTop: 4},
  button: {
    height: 42, borderRadius: 12, backgroundColor: colors.surface,
    borderWidth: 1, borderColor: '#E1E4E8',
    alignItems: 'center', justifyContent: 'center', marginTop: 18,
  },
  buttonText: {fontSize: 14, fontWeight: '700', color: colors.text},
});

export default IssueCard;
