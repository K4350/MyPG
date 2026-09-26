import React, { useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  AddCircle,
  AcUnit,
  ArrowForward,
  CleaningServices,
  Lightbulb,
  Lock,
  PhotoCamera,
  Plumbing,
  Weekend,
  Wifi,
  Close,
  ArrowBack,
} from '@material-symbols-svg/react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Category =
  | 'Electricity'
  | 'Plumbing'
  | 'AC'
  | 'Lock'
  | 'Cleaning'
  | 'WiFi'
  | 'Furniture'
  | 'Other';

  type RootStackParamList = {
  MainTabs: undefined;
  Issues: {
    newIssue?: {
      title: string;
      location: string;
      time: string;
      status: 'Open' | 'In Progress' | 'Resolved';
      icon: string;
    };
  };
  ReportIssue: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const categories = [
  { name: 'Electricity' as Category, icon: Lightbulb },
  { name: 'Plumbing' as Category, icon: Plumbing },
  { name: 'AC' as Category, icon: AcUnit },
  { name: 'Lock' as Category, icon: Lock },
  { name: 'Cleaning' as Category, icon: CleaningServices },
  { name: 'WiFi' as Category, icon: Wifi },
  { name: 'Furniture' as Category, icon: Weekend },
  { name: 'Other' as Category, icon: AddCircle },
];

const ReportIssueScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const insets = useSafeAreaInsets();

  const [selectedCategory, setSelectedCategory] =
    useState<Category>('Electricity');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
  if (!title.trim()) {
    Alert.alert('Missing title', 'Please enter an issue title.');
    return;
  }

  const categoryIcons: Record<Category, string> = {
    Electricity: '💡',
    Plumbing: '🔧',
    AC: '❄️',
    Lock: '🔒',
    Cleaning: '🧹',
    WiFi: '⌁',
    Furniture: '🛋️',
    Other: '⊕',
  };

  const newIssue = {
  title: title.trim(),
  category: selectedCategory,
  location: 'Room 302',
  time: 'Just now',
  status: 'Open' as const,
  icon: categoryIcons[selectedCategory],
  reportedAt: 'Just now',
  comments: [],
};

  Alert.alert(
    'Issue submitted',
    'Your issue has been submitted successfully.',
    [
      {
        text: 'OK',
        onPress: () =>
          navigation.navigate('Issues', {
            newIssue,
          }),
      },
    ],
  );
};

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
        ]}
      >
        <Pressable
          style={styles.headerButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowBack size={20} color="#FFFFFF" />
        </Pressable>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Report Issue</Text>
          <Text style={styles.headerSubtitle}>Room 302 · SRV Heritage</Text>
        </View>

        <Pressable
          style={styles.headerButton}
          onPress={() => navigation.goBack()}
        >
          <Close size={20} color="#FFFFFF" />
        </Pressable>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
      >
        {/* Category */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>CATEGORY</Text>

          <View style={styles.categoryGrid}>
            {categories.map(category => {
              const Icon = category.icon;
              const selected = selectedCategory === category.name;

              return (
                <Pressable
                  key={category.name}
                  onPress={() => setSelectedCategory(category.name)}
                  style={[
                    styles.categoryButton,
                    selected && styles.categoryButtonSelected,
                  ]}
                >
                  <Icon size={20} color={selected ? '#1A73E8' : '#666666'} />

                  <Text
                    style={[
                      styles.categoryText,
                      selected && styles.categoryTextSelected,
                    ]}
                  >
                    {category.name}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* Issue title */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>ISSUE TITLE</Text>

          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="e.g. Light not working in room"
            placeholderTextColor="#888888"
            style={styles.input}
          />
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>DESCRIPTION (OPTIONAL)</Text>

          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Describe the problem in detail..."
            placeholderTextColor="#888888"
            multiline
            numberOfLines={3}
            textAlignVertical="top"
            style={[styles.input, styles.descriptionInput]}
          />
        </View>

        {/* Photo */}
        <View style={styles.photoSection}>
          <Text style={styles.sectionLabel}>PHOTO (OPTIONAL)</Text>

          <Pressable
            style={styles.photoBox}
            onPress={() =>
              Alert.alert('Photo', 'Photo picker will be added next.')
            }
          >
            <View style={styles.photoRow}>
              <PhotoCamera size={18} color="#888888" />

              <Text style={styles.photoText}>Add a photo</Text>
            </View>

            <Text style={styles.photoHint}>JPG, PNG up to 5MB</Text>
          </Pressable>
        </View>

        {/* Submit */}
        <Pressable style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit Issue</Text>
          <ArrowForward size={16} color="#FFFFFF" />
        </Pressable>
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
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },

  headerButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.10)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerCenter: {
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  headerSubtitle: {
    fontSize: 10,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.60)',
    marginTop: 2,
  },

  content: {
    flex: 1,
  },

  contentContainer: {
    padding: 14,
    paddingBottom: 30,
  },

  section: {
    marginBottom: 20,
  },

  sectionLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#888888',
    letterSpacing: 1,
    marginBottom: 6,
  },

  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  categoryButton: {
    width: '23%',
    minHeight: 68,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },

  categoryButtonSelected: {
    backgroundColor: '#E8F0FE',
    borderColor: '#1A73E8',
  },

  categoryText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#666666',
    marginTop: 4,
    textAlign: 'center',
  },

  categoryTextSelected: {
    color: '#1A73E8',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 13,
    color: '#191C1D',
  },

  descriptionInput: {
    minHeight: 82,
  },

  photoSection: {
    marginBottom: 28,
  },

  photoBox: {
    height: 70,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#D0D0D0',
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  photoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  photoText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#888888',
  },

  photoHint: {
    fontSize: 9,
    color: '#BBBBBB',
    marginTop: 2,
  },

  submitButton: {
    height: 48,
    backgroundColor: '#1A73E8',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  submitText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});

export default ReportIssueScreen;
