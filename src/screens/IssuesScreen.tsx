import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type IssueComment = {
  author: string;
  initials: string;
  time: string;
  text: string;
  isUser?: boolean;
};

type Issue = {
  title: string;
  category: string;
  location: string;
  time: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  icon: string;
  reportedAt?: string;
  progressAt?: string;
  fixedAt?: string;
  progressMessage?: string;
  comments?: IssueComment[];
};

type RootStackParamList = {
    MainTabs: undefined;
    Issues: {
        newIssue?: Issue;
    };
    IssueDetails: {
        issue: Issue;
    };
    ReportIssue: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;



const activeIssues: Issue[] = [
    {
  title: 'Light not working',
  category: 'Electricity',
  location: 'Room 302',
  time: '2 days ago',
  status: 'In Progress',
  icon: '💡',
  reportedAt: '20 Mar 2026 · 9:41 PM',
  progressAt: '21 Mar 2026 · 10:00 AM',
  progressMessage:
    'Electrician scheduled for today evening. Please ensure someone is available in the room.',
  comments: [
    {
      author: 'Kaushik Baruah',
      initials: 'KB',
      time: '9:41 PM',
      text:
        'The light in my room has completely stopped working. It flickered for a bit before going dark. Please check.',
      isUser: true,
    },
    {
      author: 'Caretaker',
      initials: 'CT',
      time: '10:05 AM',
      text:
        'Acknowledged. Electrician will visit today during the maintenance slot.',
    },
  ],
},
    {
  title: 'Water tap leaking',
  category: 'Plumbing',
  location: 'Bathroom',
  time: '1 day ago',
  status: 'Open',
  icon: '💧',
  reportedAt: '21 Mar 2026 · 8:30 PM',
  comments: [
    {
      author: 'Kaushik Baruah',
      initials: 'KB',
      time: '8:30 PM',
      text: 'The bathroom tap is continuously leaking. Please check.',
      isUser: true,
    },
  ],
},
];

const resolvedIssues: Issue[] = [
  {
    title: 'WiFi not working',
    category: 'WiFi',
    location: 'Room 302',
    time: '5 days ago',
    status: 'Resolved',
    icon: '⌁',
    reportedAt: '17 Mar 2026 · 8:15 PM',
    fixedAt: '18 Mar 2026 · 10:30 AM',
    comments: [],
  },
  {
    title: 'Door lock broken',
    category: 'Lock',
    location: 'Room 302',
    time: '2 weeks ago',
    status: 'Resolved',
    icon: '🔒',
    reportedAt: '10 Mar 2026 · 7:30 PM',
    fixedAt: '11 Mar 2026 · 11:00 AM',
    comments: [],
  },
  {
    title: 'Room cleaning missed',
    category: 'Cleaning',
    location: 'Room 302',
    time: '3 weeks ago',
    status: 'Resolved',
    icon: '🧹',
    reportedAt: '3 Mar 2026 · 9:00 AM',
    fixedAt: '3 Mar 2026 · 2:00 PM',
    comments: [],
  },
];

const IssueCard = ({
    issue, onPress,
}: {
    issue: Issue;
    onPress: () => void;
}) => {
    const isResolved = issue.status === 'Resolved';

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.issueCard,
                isResolved && styles.resolvedCard,
                pressed && styles.cardPressed,
            ]}
        >
            <View
                style={[
                    styles.issueIconContainer,
                    isResolved
                        ? styles.resolvedIconContainer
                        : styles.activeIconContainer,
                ]}
            >
                <Text
                    style={[
                        styles.issueIcon,
                        isResolved ? styles.resolvedIcon : styles.activeIcon,
                    ]}
                >
                    {issue.icon}
                </Text>
            </View>

            <View style={styles.issueContent}>
                <Text style={styles.issueTitle} numberOfLines={1}>
                    {issue.title}
                </Text>

                <Text style={styles.issueMeta}>
                    {issue.location} · {issue.time}
                </Text>
            </View>

            <View style={styles.issueRight}>
                <View
                    style={[
                        styles.statusPill,
                        issue.status === 'In Progress' && styles.inProgressPill,
                        issue.status === 'Open' && styles.openPill,
                        isResolved && styles.resolvedPill,
                    ]}
                >
                    <Text
                        style={[
                            styles.statusText,
                            issue.status === 'In Progress' && styles.inProgressText,
                            issue.status === 'Open' && styles.openText,
                            isResolved && styles.resolvedText,
                        ]}
                    >
                        {issue.status}
                    </Text>
                </View>

                <Text style={styles.chevron}>›</Text>
            </View>
        </Pressable>
    );
};

const IssuesScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    const insets = useSafeAreaInsets();

    const route =
        useRoute<
            import('@react-navigation/native').RouteProp<RootStackParamList, 'Issues'>
        >();

    const newIssue = route.params?.newIssue;

    const displayedActiveIssues = newIssue
        ? [newIssue, ...activeIssues]
        : activeIssues;

    return (
        <View style={styles.container}>
            {/* Header */}
            <View
                style={[
                    styles.header,
                    {
                        paddingTop: insets.top,
                        height: 64 + insets.top,
                    },
                ]}
            >
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <Text style={styles.backIcon}>‹</Text>
                </Pressable>

                <View>
                    <Text style={styles.headerTitle}>Issues</Text>
                    <Text style={styles.headerSubtitle}>Room 302 · SRV Heritage</Text>
                </View>
            </View>

            <ScrollView
                style={styles.content}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                {/* Report New Issue */}
                <Pressable
                    style={({ pressed }) => [
                        styles.reportButton,
                        pressed && styles.pressed,
                    ]}
                    onPress={() => navigation.navigate('ReportIssue')}
                >
                    <Text style={styles.reportButtonText}>＋ Report New Issue</Text>
                </Pressable>

                {/* Active */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        ACTIVE ({displayedActiveIssues.length})
                    </Text>

                    <View style={styles.cardsContainer}>
                        {displayedActiveIssues.map((issue, index) => (
                            <IssueCard
                                key={`${issue.title}-${index}`}
                                issue={issue}
                                onPress={() =>
                                    navigation.navigate('IssueDetails', {
                                        issue,
                                    })
                                }
                            />
                        ))}
                    </View>
                </View>

                {/* Resolved */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>RESOLVED (3)</Text>

                    <View style={styles.cardsContainer}>
                        {resolvedIssues.map(issue => (
                            <IssueCard
                                key={issue.title}
                                issue={issue}
                                onPress={() =>
                                    navigation.navigate('IssueDetails', {
                                        issue,
                                    })
                                }
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },

    header: {
        height: 64,
        backgroundColor: '#1A73E8',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },

    backButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255,0.10)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },

    backIcon: {
        color: '#FFFFFF',
        fontSize: 27,
        lineHeight: 27,
        fontWeight: '300',
        marginTop: -2,
    },

    headerTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
    },

    headerSubtitle: {
        color: 'rgba(255,255,255,0.65)',
        fontSize: 10,
        fontWeight: '500',
        marginTop: 2,
    },

    content: {
        flex: 1,
    },

    contentContainer: {
        padding: 14,
        paddingBottom: 30,
    },

    reportButton: {
        height: 48,
        backgroundColor: '#1A73E8',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },

    reportButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
    },

    section: {
        marginBottom: 24,
    },

    sectionTitle: {
        color: '#888888',
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 1,
        marginBottom: 12,
    },

    cardsContainer: {
        gap: 12,
    },

    issueCard: {
        minHeight: 72,
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        borderColor: '#EEEEEE',
        borderRadius: 14,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },

    resolvedCard: {
        opacity: 0.7,
    },

    issueIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },

    activeIconContainer: {
        backgroundColor: '#FFEBEE',
    },

    resolvedIconContainer: {
        backgroundColor: '#E8F5E9',
    },

    issueIcon: {
        fontSize: 20,
    },

    activeIcon: {
        color: '#E53935',
    },

    resolvedIcon: {
        color: '#2E7D32',
    },

    issueContent: {
        flex: 1,
        minWidth: 0,
    },

    issueTitle: {
        color: '#1A1A1A',
        fontSize: 13,
        fontWeight: '700',
    },

    issueMeta: {
        color: '#888888',
        fontSize: 10,
        marginTop: 3,
    },

    issueRight: {
        alignItems: 'flex-end',
        marginLeft: 8,
    },

    statusPill: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 999,
    },

    inProgressPill: {
        backgroundColor: '#FFF8E1',
    },

    openPill: {
        backgroundColor: '#FFEBEE',
    },

    resolvedPill: {
        backgroundColor: '#E8F5E9',
    },

    statusText: {
        fontSize: 9,
        fontWeight: '700',
    },

    inProgressText: {
        color: '#E65100',
    },

    openText: {
        color: '#C62828',
    },

    resolvedText: {
        color: '#2E7D32',
    },

    chevron: {
        color: '#888888',
        fontSize: 24,
        lineHeight: 20,
        marginTop: 2,
    },

    pressed: {
        transform: [{ scale: 0.98 }],
    },
    cardPressed: {
        opacity: 0.95,
    },
});

export default IssuesScreen;
