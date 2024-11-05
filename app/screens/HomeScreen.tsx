import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '@/components/Button'; 
import { HomeScreenNavigationProp } from '../index';  // 타입 파일의 경로에 맞게 수정

interface Props {
    navigation: HomeScreenNavigationProp;
  }

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the ShoeSizer!</Text>
      <Button title="내 발 측정하러 가기" onPress={() => navigation.navigate('CaptureFootSizeScreen')} />
      <Button title="발압력측정하기" onPress={() => navigation.navigate('MeasurePressureScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;