import React, { useState, useEffect, FormData } from "react";
import { View, Text, Button, Image, Alert, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { v4 as uuidv4 } from "uuid";
import * as FileSystem from "expo-file-system"; // Ensure expo-file-system is installed

export default function captureFootSize() {
  const [hasPermission, setHasPermission] = useState(null);
  const [imageURI, setImageURI] = useState(null); // 서버로부터 가져온 이미지 URL을 저장

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
    sendImageToServer(result.assets[0]);
  };

  const sendImageToServer = async (obj) => {
    // parts 배열의 마지막 요소를 가져오면 파일 이름입니다.
    const name = obj.uri.split("/")[obj.uri.split("/").length - 1];
    console.log(name);
    const host = "http://192.168.0.18:5000";

    try {
      const response = await fetch(`${host}/upload`, {
        // const response = await fetch("http://192.168.0.18:5000/upload", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: JSON.stringify({
          uri: obj.uri,
          name: obj.uri.split("/")[obj.uri.split("/").length - 1], // 동적으로 이름을 생성할 수 있습니다 (예: timestamp, uuid 사용)
          mimetype: obj.mimetype,
        }),
      });
      console.log("hey");
      const responseData = await response.json();
      console.log(responseData);
      if (response.ok) {
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
