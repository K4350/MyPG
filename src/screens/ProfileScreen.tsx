import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../theme';

type Props = {navigation: any};

const ProfileScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.hero}>
          <View style={styles.topBar}>
            <Pressable
              style={styles.topButton}
              onPress={() => navigation.goBack()}>
              <Text style={styles.topIcon}>‹</Text>
            </Pressable>
            <Pressable
              style={styles.topButton}
              onPress={() => {}}>
              <Text style={styles.settingsIcon}>⚙</Text>
            </Pressable>
          </View>

          <View style={styles.avatarWrap}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>KB</Text>
            </View>
            <View style={styles.editBadge}>
              <Text style={styles.editBadgeText}>✎</Text>
            </View>
          </View>

          <Text style={styles.name}>Kaushik Baruah</Text>

          <View style={styles.rolePill}>
            <Text style={styles.roleIcon}>▣</Text>
            <Text style={styles.roleText}>Software Engineer</Text>
          </View>

          <Text style={styles.pgText}>SRV Heritage · Room 302</Text>
          <Text style={styles.memberText}>Member since Jan 2025</Text>

          <Pressable style={styles.editProfile} onPress={() => {}}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </Pressable>
        </View>

        <View style={styles.statsCard}>
          <Stat value="3" label="CONNECTIONS" />
          <View style={styles.statDivider} />
          <Stat value="2" label="LISTINGS" />
          <View style={styles.statDivider} />
          <Stat value="82" label="DAYS STAYED" />
        </View>

        <View style={styles.content}>
          <ProfileSection title="MY PG">
            <ProfileRow
              icon="▤"
              iconBg="#E8F0FE"
              iconColor={colors.primary}
              title="My Listings"
              subtitle="2 active"
              subtitleColor={colors.primary}
            />
            <ProfileRow
              icon="!"
              iconBg="#FFF0F2"
              iconColor="#E53935"
              title="My Issues"
              subtitle="1 open"
              subtitleColor="#E53935"
            />
            <ProfileRow
              icon="↗"
              iconBg="#E6F4EA"
              iconColor="#188038"
              title="Payment History"
            />
          </ProfileSection>

          <ProfileSection title="PREFERENCES">
            <View style={styles.preferenceRow}>
              <View style={[styles.rowIcon, {backgroundColor: '#FFF8E7'}]}>
                <Text style={[styles.rowIconText, {color: '#D98A00'}]}>♟</Text>
              </View>
              <View style={styles.rowText}>
                <Text style={styles.rowTitle}>Notifications</Text>
                <Text style={styles.rowSubtitle}>On</Text>
              </View>
              <View style={styles.toggle}>
                <View style={styles.toggleKnob} />
              </View>
            </View>
          </ProfileSection>

          <ProfileSection title="ACCOUNT">
            <ProfileRow
              icon="★"
              iconBg="#EEF0FF"
              iconColor="#4B4FE8"
              title="Rate My PG"
            />
            <ProfileRow
              icon="?"
              iconBg="#EEF3F8"
              iconColor="#4B5D73"
              title="Help & Support"
            />
            <ProfileRow
              icon="↪"
              iconBg="#FFF0F0"
              iconColor="#E53935"
              title="Sign Out"
              titleColor="#E53935"
              showChevron={false}
            />
          </ProfileSection>

          <Text style={styles.version}>MYPG V1.0.0 · BUILD 2026</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Stat = ({value, label}: {value: string; label: string}) => (
  <View style={styles.stat}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const ProfileSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <View style={styles.section}>
    <Text style={styles.sectionLabel}>{title}</Text>
    <View style={styles.sectionCard}>{children}</View>
  </View>
);

const ProfileRow = ({
  icon,
  iconBg,
  iconColor,
  title,
  subtitle,
  subtitleColor,
  titleColor,
  showChevron = true,
}: {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle?: string;
  subtitleColor?: string;
  titleColor?: string;
  showChevron?: boolean;
}) => (
  <View style={styles.row}>
    <View style={[styles.rowIcon, {backgroundColor: iconBg}]}>
      <Text style={[styles.rowIconText, {color: iconColor}]}>{icon}</Text>
    </View>
    <View style={styles.rowText}>
      <Text style={[styles.rowTitle, titleColor ? {color: titleColor} : null]}>
        {title}
      </Text>
      {subtitle ? (
        <Text
          style={[
            styles.rowSubtitle,
            subtitleColor ? {color: subtitleColor} : null,
          ]}>
          {subtitle}
        </Text>
      ) : null}
    </View>
    {showChevron ? <Text style={styles.chevron}>›</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: '#F8F9FA'},
  scrollContent: {paddingBottom: 24},
  hero: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 50,
  },
  topBar: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 48,
  },
  topButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topIcon: {fontSize: 38, lineHeight: 38, color: '#FFF', fontWeight: '300'},
  settingsIcon: {fontSize: 25, color: '#FFF'},
  avatarWrap: {marginTop: 8, position: 'relative'},
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {fontSize: 24, fontWeight: '800', color: '#FFF'},
  editBadge: {
    position: 'absolute',
    right: -1,
    bottom: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#E65100',
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editBadgeText: {fontSize: 16, color: '#FFF'},
  name: {fontSize: 20, fontWeight: '700', color: '#FFF', marginTop: 14},
  rolePill: {
    marginTop: 8,
    paddingHorizontal: 13,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  roleIcon: {fontSize: 13, color: '#FFF', marginRight: 7},
  roleText: {fontSize: 12, fontWeight: '500', color: '#FFF'},
  pgText: {fontSize: 14, color: 'rgba(255,255,255,0.65)', marginTop: 8},
  memberText: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.45)',
    marginTop: 7,
    letterSpacing: 0.7,
  },
  editProfile: {
    marginTop: 18,
    paddingHorizontal: 27,
    paddingVertical: 9,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  editProfileText: {fontSize: 13, fontWeight: '700', color: '#FFF'},
  statsCard: {
    marginHorizontal: 30,
    marginTop: -30,
    height: 100,
    borderRadius: 14,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E7E8E9',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },
  stat: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  statValue: {fontSize: 20, fontWeight: '700', color: colors.primary},
  statLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#94A3B8',
    marginTop: 5,
    letterSpacing: 0.2,
  },
  statDivider: {height: 56, width: 1, backgroundColor: '#E7E8E9'},
  content: {
    backgroundColor: '#FBFCFD',
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  section: {marginBottom: 28},
  sectionLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#999',
    letterSpacing: 1.2,
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  sectionCard: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E7E8E9',
    borderRadius: 14,
    overflow: 'hidden',
  },
  row: {
    minHeight: 72,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E7E8E9',
  },
  rowIcon: {
    width: 34,
    height: 34,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowIconText: {fontSize: 19, fontWeight: '700'},
  rowText: {flex: 1, marginLeft: 16},
  rowTitle: {fontSize: 14, fontWeight: '700', color: colors.text},
  rowSubtitle: {fontSize: 11, color: '#94A3B8', marginTop: 3, fontWeight: '500'},
  chevron: {fontSize: 31, color: '#CBD5E1', fontWeight: '300'},
  preferenceRow: {
    minHeight: 76,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggle: {
    width: 32,
    height: 18,
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  toggleKnob: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#FFF',
    alignSelf: 'flex-end',
  },
  version: {
    textAlign: 'center',
    fontSize: 10,
    color: '#94A3B8',
    letterSpacing: 1.2,
    marginTop: 4,
    marginBottom: 14,
  },
});

export default ProfileScreen;
