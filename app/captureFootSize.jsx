import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, Alert, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system"; // Base64 인코딩을 위해 필요

export default function captureFootSize() {
  const [hasPermission, setHasPermission] = useState(null);
  const [imageURI, setImageURI] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      await sendImageToServer(result.assets[0]); // URI 전달
    }
  };

  const sendImageToServer = async (obj) => {
    const formData = new FormData();
    const host = "http://192.168.0.18:5000";
    // Base64로 인코딩
    const base64Image = await FileSystem.readAsStringAsync(obj.uri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    // 이미지 파일 생성
    const imageFile = {
      uri: obj.uri,
      type: "image/jpeg", // 또는 적절한 mime 타입
      name: obj.uri.split("/").pop(),
    };
    // FormData에 파일 추가
    formData.append("file", imageFile);

    // 파일명 추출
    const filename = obj.uri.split("/").pop();

    try {
      const response = await fetch(`${host}/upload`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
      console.log("reposne check");
      console.log(response.ok);
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setImageURI(`${host}/uploads/${responseData.filename}`);
        Alert.alert("Image Processed", "Your foot size has been calculated.");
      } else {
        throw new Error("Failed to upload image");
      }
    } catch (error) {
      console.error("Upload failed", error);
      Alert.alert("Upload failed", "Unable to upload image.");
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Button title="Take a picture" onPress={takeImage} />
      {imageURI && <Image source={{ uri: imageURI }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});
