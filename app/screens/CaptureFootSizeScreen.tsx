import React from 'react';
import { View, StyleSheet } from 'react-native';
import CameraCapture from '@/components/CameraCapture';
import Button from '@/components/Button';

export interface Navigation {
    navigation: any
}

const CaptureFootSizeScreen = ({ navigation }: Navigation) => {
  const handleCapture = (photoUri: string) => {
    // 캡처한 사진을 백엔드로 전송하는 로직 추가
    navigation.navigate('LoadingScreen');
  };

  return (
    <View style={styles.container}>
      <CameraCapture onCapture={handleCapture} />
      <Button title="사진 찍기" onPress={() => {/** 캡처 핸들러 호출 */}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CaptureFootSizeScreen;