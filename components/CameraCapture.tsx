  // components/CameraCapture.tsx
  import React, { useState, useEffect, useRef } from 'react';
  import { StyleSheet, View, Button, Alert, Text } from 'react-native';
  import { Camera } from 'expo-camera';

  interface CameraCaptureProps {
    onCapture: (photoUri: string) => void;
  }

  const CameraCapture: React.FC<CameraCaptureProps> = ({ onCapture }) => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const cameraRef = useRef<Camera>(null);

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);

    const handlePress = async () => {
      if (!cameraRef.current) {
        Alert.alert('카메라 오류', '카메라를 사용할 수 없습니다.');
        return;
      }
      const options = { quality: 0.5, base64: true, skipProcessing: false };
      const photo = await cameraRef.current.takePictureAsync(options);
      onCapture(photo.uri);
    };

    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>카메라 접근 권한이 없습니다.</Text>;
    }

    return (
      <View style={styles.container}>
        <Camera style={styles.camera} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <Button title="사진 찍기" onPress={handlePress} />
          </View>
        </Camera>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
  });

  export default CameraCapture;