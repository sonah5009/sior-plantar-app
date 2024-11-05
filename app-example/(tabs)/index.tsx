import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { Link } from 'expo-router';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    // <ParallaxScrollView>
      <View style={styles.centerContainer}>
        <ThemedView style={styles.modalContainer}>
          <ThemedText type="title">발 모양과 압력 분석으로 신발 추천받기</ThemedText>
          <ThemedText type='default'>발의 압력을 재고 사진을 찍으면 AI가 신발을 추천해드려요.</ThemedText>
            <ThemedView style={styles.buttonContainer}>
              <Link
                  href="/measure/pressure"
                  >
                  <ThemedText type='subtitle'>내 발 측정하러가기 {'>'}</ThemedText>
              </Link>
            </ThemedView>
          
        </ThemedView>
      </View>
    // </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  modalContainer: {
    backgroundColor: '#f5f5f7',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    gap: 7
  },
  buttonContainer: {
    color: '#fff',
    backgroundColor: '#2e2f32',
    padding: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
  },
});
