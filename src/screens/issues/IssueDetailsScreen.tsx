import React, { useState } from 'react';
import {
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {
    ArrowBack,
    Check,
    Delete,
    DoneAll,
    Lightbulb,
    Send,
} from '@material-symbols-svg/react-native';
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
    IssueDetails: {
        issue: Issue;
    };
};

const IssueDetailsScreen = () => {
    const navigation = useNavigation();
    const route = useRoute<
        import('@react-navigation/native').RouteProp<
            RootStackParamList,
            'IssueDetails'
        >
    >();

    const { issue } = route.params;
    const insets = useSafeAreaInsets();
    const [comments, setComments] = useState<IssueComment[]>(
        issue.comments ?? [],
    );

    const [commentText, setCommentText] = useState('');

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            {/* Header */}
            <View
                style={[
                    styles.header,
                    {
                        paddingTop: insets.top,
                        height: 64 + insets.top,
                    },
                ]}>
                <View style={styles.headerLeft}>
                    <Pressable
                        style={styles.headerButton}
                        onPress={() => navigation.goBack()}>
                        <ArrowBack size={20} color="#FFFFFF" />
                    </Pressable>

                    <Text style={styles.headerTitle}>Issue Details</Text>
                </View>

                <Text style={styles.issueId}>#ISS-042</Text>
            </View>

            <ScrollView
                style={styles.content}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}>
                {/* Issue Summary */}
                <View style={styles.summaryCard}>
                    <Text style={styles.issueTitle}>{issue.title}</Text>

                    <View style={styles.metaRow}>
                        <View style={styles.categoryPill}>
                            <Lightbulb size={14} color="#1A73E8" />
                            <Text style={styles.categoryText}>{issue.category}</Text>
                        </View>

                        <View style={styles.roomPill}>
                            <Text style={styles.roomText}>{issue.location}</Text>
                        </View>

                        <Text style={styles.dateText}>
                            {issue.reportedAt?.split(' · ')[0] ?? issue.time}
                        </Text>
                    </View>

                    <View style={styles.thumbnail}>
                        <Lightbulb size={24} color="#888888" />
                    </View>
                </View>

                {/* Status Timeline */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>STATUS TIMELINE</Text>

                    <View style={styles.timeline}>
                        {/* Reported */}
                        <View style={styles.timelineItem}>
                            <View style={styles.timelineLeft}>
                                <View style={styles.completedDot}>
                                    <Check width={16} height={16} color="#FFFFFF" />
                                </View>
                                <View style={styles.timelineLine} />
                            </View>

                            <View style={styles.timelineContent}>
                                <Text style={styles.timelineItemTitle}>Issue Reported</Text>
                                <Text style={styles.timelineDate}>
                                    {issue.reportedAt ?? issue.time}
                                </Text>
                            </View>
                        </View>

                        {/* In Progress */}
                        <View style={styles.timelineItem}>
                            <View style={styles.timelineLeft}>
                                <View
                                    style={[
                                        styles.timelineDot,
                                        issue.status === 'Open' && styles.pendingDot,
                                        issue.status === 'In Progress' && styles.activeDot,
                                        issue.status === 'Resolved' && styles.completedDot,
                                    ]}
                                >
                                    {issue.status === 'Resolved' ? (
                                        <Check width={16} height={16} color="#FFFFFF" />
                                    ) : null}
                                </View>

                                <View style={styles.timelineLine} />
                            </View>

                            <View style={styles.timelineContent}>
                                <Text
                                    style={[
                                        styles.timelineItemTitle,
                                        issue.status === 'In Progress' && styles.activeTimelineTitle,
                                    ]}
                                >
                                    In Progress
                                </Text>

                                {issue.status === 'In Progress' && (
                                    <>
                                        {issue.progressAt && (
                                            <Text style={styles.timelineDate}>
                                                {issue.progressAt}
                                            </Text>
                                        )}

                                        {issue.progressMessage && (
                                            <Text style={styles.timelineMessage}>
                                                {issue.progressMessage}
                                            </Text>
                                        )}
                                    </>
                                )}

                                {issue.status === 'Open' && (
                                    <Text style={styles.timelineDate}>
                                        Waiting for caretaker
                                    </Text>
                                )}

                                {issue.status === 'Resolved' && issue.progressAt && (
                                    <Text style={styles.timelineDate}>
                                        {issue.progressAt}
                                    </Text>
                                )}
                            </View>
                        </View>

                        {/* Fixed */}
                        <View style={styles.timelineItem}>
                            <View style={styles.timelineLeft}>
                                <View
                                    style={[
                                        styles.timelineDot,
                                        issue.status === 'Resolved'
                                            ? styles.completedDot
                                            : styles.pendingDot,
                                    ]}
                                >
                                    {issue.status === 'Resolved' ? (
                                        <Check width={16} height={16} color="#FFFFFF" />
                                    ) : null}
                                </View>
                            </View>

                            <View style={styles.timelineContent}>
                                <Text
                                    style={[
                                        styles.timelineItemTitle,
                                        issue.status === 'Resolved' && styles.activeTimelineTitle,
                                    ]}
                                >
                                    Issue Fixed
                                </Text>

                                {issue.status === 'Resolved' ? (
                                    <Text style={styles.timelineDate}>
                                        {issue.fixedAt ?? 'Resolved'}
                                    </Text>
                                ) : (
                                    <Text style={styles.timelineDate}>
                                        Waiting for resolution
                                    </Text>
                                )}
                            </View>
                        </View>
                    </View>
                </View>

                {/* Comments */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>COMMENTS</Text>

                    <View style={styles.commentsCard}>
                        {comments.map((comment, index) => (
                            <View
                                key={`${comment.author}-${comment.time}-${index}`}
                                style={[
                                    styles.comment,
                                    !comment.isUser && styles.caretakerComment,
                                ]}>
                                <View
                                    style={
                                        comment.isUser
                                            ? styles.userAvatar
                                            : styles.caretakerAvatar
                                    }>
                                    <Text style={styles.avatarText}>
                                        {comment.initials}
                                    </Text>
                                </View>

                                <View style={styles.commentBody}>
                                    <View style={styles.commentHeader}>
                                        <Text style={styles.commentName}>
                                            {comment.author}
                                            {comment.isUser && (
                                                <Text style={styles.youText}> (You)</Text>
                                            )}
                                        </Text>

                                        <Text style={styles.commentTime}>
                                            {comment.time}
                                        </Text>
                                    </View>

                                    <Text style={styles.commentText}>
                                        {comment.text}
                                    </Text>
                                </View>
                            </View>
                        ))}

                        {/* Add comment */}
                        <View style={styles.commentInputRow}>
                            <TextInput
                                placeholder="Write a comment..."
                                placeholderTextColor="#5E5E5E"
                                style={styles.commentInput}
                                value={commentText}
                                onChangeText={setCommentText}
                            />

                            <Pressable
                                style={styles.sendButton}
                                onPress={() => {
                                    const text = commentText.trim();

                                    if (!text) {
                                        return;
                                    }

                                    setComments(prev => [
                                        ...prev,
                                        {
                                            author: 'Kaushik Baruah',
                                            initials: 'KB',
                                            time: 'Just now',
                                            text,
                                            isUser: true,
                                        },
                                    ]);

                                    setCommentText('');
                                }}>
                                <Send size={20} color="#FFFFFF" />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom actions */}
            <View style={styles.footer}>
                <Pressable style={styles.closeIssueButton}>
                    <DoneAll size={18} color="#FFFFFF" />
                    <Text style={styles.closeIssueText}>Close Issue</Text>
                </Pressable>

                <Pressable style={styles.deleteButton}>
                    <Delete size={18} color="#E53935" />
                    <Text style={styles.deleteText}>Delete</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },

    header: {
        backgroundColor: '#1A73E8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },

    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },

    headerButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255,0.10)',
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
    },

    issueId: {
        fontSize: 11,
        fontWeight: '500',
        color: 'rgba(255,255,255,0.65)',
    },

    content: {
        flex: 1,
    },

    contentContainer: {
        padding: 14,
        paddingBottom: 24,
    },

    summaryCard: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#EEEEEE',
        borderRadius: 14,
        padding: 12,
        marginBottom: 24,
    },

    issueTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: '#191C1D',
        marginBottom: 8,
    },

    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 12,
    },

    categoryPill: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: '#E8F0FE',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 999,
    },

    categoryText: {
        fontSize: 11,
        fontWeight: '600',
        color: '#1A73E8',
    },

    roomPill: {
        backgroundColor: '#EDEEEF',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 999,
    },

    roomText: {
        fontSize: 11,
        color: '#414754',
    },

    dateText: {
        fontSize: 11,
        color: '#5E5E5E',
    },

    thumbnail: {
        width: 52,
        height: 52,
        borderRadius: 8,
        backgroundColor: '#EDEEEF',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },

    section: {
        marginBottom: 24,
    },

    sectionTitle: {
        fontSize: 10,
        fontWeight: '700',
        color: '#5E5E5E',
        letterSpacing: 1,
        marginBottom: 16,
        marginLeft: 4,
    },

    timeline: {
        position: 'relative',
        marginLeft: 12,
    },
    timelineItem: {
        flexDirection: 'row',
        minHeight: 72,
    },

    timelineLeft: {
        width: 32,
        alignItems: 'center',
    },

    timelineLine: {
        width: 2,
        flex: 1,
        backgroundColor: '#E5E7EB',
        marginTop: 4,
    },

    timelineDot: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#E5E7EB',
        alignItems: 'center',
        justifyContent: 'center',
    },

    completedDot: {
        backgroundColor: '#136DEC',
    },

    activeDot: {
        backgroundColor: '#136DEC',
        borderWidth: 5,
        borderColor: '#DCEBFF',
    },

    pendingDot: {
        backgroundColor: '#E5E7EB',
    },

    timelineContent: {
        flex: 1,
        paddingLeft: 12,
        paddingBottom: 20,
    },

    timelineItemTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1F2937',
    },

    timelineTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: '#191C1D',
    },

    activeTimelineTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: '#1A73E8',
    },

    pendingTimelineTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: '#5E5E5E',
    },

    timelineDate: {
        fontSize: 11,
        color: '#5E5E5E',
        marginTop: 2,
    },

    timelineDateItalic: {
        fontSize: 11,
        color: '#5E5E5E',
        fontStyle: 'italic',
        marginTop: 2,
    },

    timelineMessage: {
        backgroundColor: '#F0F6FF',
        padding: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#DCEAFF',
        marginTop: 8,
    },

    timelineMessageText: {
        fontSize: 11,
        color: '#414754',
        fontStyle: 'italic',
        lineHeight: 17,
    },

    commentsCard: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#EEEEEE',
        borderRadius: 14,
        overflow: 'hidden',
    },

    comment: {
        padding: 16,
        flexDirection: 'row',
        gap: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
    },

    caretakerComment: {
        backgroundColor: '#F3F4F5',
    },

    userAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#1A73E8',
        alignItems: 'center',
        justifyContent: 'center',
    },

    caretakerAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#5E5E5E',
        alignItems: 'center',
        justifyContent: 'center',
    },

    avatarText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '700',
    },

    commentBody: {
        flex: 1,
    },

    commentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },

    commentName: {
        fontSize: 12,
        fontWeight: '700',
        color: '#191C1D',
    },

    youText: {
        color: '#1A73E8',
        fontWeight: '400',
    },

    commentTime: {
        fontSize: 10,
        color: '#5E5E5E',
    },

    commentText: {
        fontSize: 12,
        color: '#414754',
        lineHeight: 18,
    },

    commentInputRow: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },

    commentInput: {
        flex: 1,
        height: 40,
        backgroundColor: '#F3F4F5',
        borderRadius: 20,
        paddingHorizontal: 16,
        fontSize: 13,
        color: '#191C1D',
    },

    sendButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#1A73E8',
        alignItems: 'center',
        justifyContent: 'center',
    },

    footer: {
        padding: 14,
        flexDirection: 'row',
        gap: 12,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE',
    },

    closeIssueButton: {
        flex: 1,
        height: 48,
        borderRadius: 12,
        backgroundColor: '#059669',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },

    closeIssueText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
    },

    deleteButton: {
        flex: 1,
        height: 48,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E53935',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },

    deleteText: {
        color: '#E53935',
        fontSize: 14,
        fontWeight: '700',
    },
});

export default IssueDetailsScreen;