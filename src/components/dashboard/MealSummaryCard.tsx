import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors, spacing} from '../../theme';

type Props = {onUpdate: () => void};

const MealSummaryCard = ({onUpdate}: Props) => (
  <View style={styles.card}>
    <View style={styles.content}>
      <View style={styles.headingRow}>
        <Text style={styles.icon}>🍽</Text>
        <Text style={styles.label}>TODAY'S MEALS</Text>
      </View>
      <View style={styles.meals}>
        <View>
          <Text style={styles.mealType}>BREAKFAST</Text>
          <Text style={styles.mealName}>Poha + Tea</Text>
        </View>
        <View>
          <Text style={styles.mealType}>DINNER</Text>
          <Text style={styles.mealName}>Paneer Butter Masala</Text>
        </View>
      </View>
      <Text style={styles.meta}>Tomorrow's meals: 1 meal skipped</Text>
      <Pressable onPress={onUpdate} style={styles.button}>
        <Text style={styles.buttonText}>Update Tomorrow's Meals</Text>
      </Pressable>
    </View>
    <View style={styles.circleTop} />
    <View style={styles.circleBottom} />
  </View>
);

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    borderRadius: 16,
    backgroundColor: colors.primary,
    minHeight: 290,
  },
  content: {padding: 24, gap: 18, zIndex: 2},
  headingRow: {flexDirection: 'row', alignItems: 'center', gap: 8},
  icon: {fontSize: 18},
  label: {fontSize: 11, fontWeight: '800', letterSpacing: 1, color: '#FFFFFF'},
  meals: {gap: 14},
  mealType: {fontSize: 10, fontWeight: '800', letterSpacing: 0.8, color: '#BFD5FF'},
  mealName: {fontSize: 18, fontWeight: '700', color: '#FFFFFF', marginTop: 3},
  meta: {fontSize: 11, fontWeight: '500', fontStyle: 'italic', color: '#D8E6FF'},
  button: {
    height: 44,
    borderRadius: 12,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {fontSize: 14, fontWeight: '700', color: colors.primary},
  circleTop: {
    position: 'absolute',
    width: 130,
    height: 130,
    borderRadius: 65,
    right: -55,
    top: -55,
    backgroundColor: 'rgba(255,255,255,0.10)',
  },
  circleBottom: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    left: -50,
    bottom: -55,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
});

export default MealSummaryCard;
