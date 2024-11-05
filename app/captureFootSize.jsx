import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, Alert, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";

export default function CaptureFootSize() {
  const [hasPermission, setHasPermission] = useState(null);
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleFetchImage = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/uploads/google.png");
      const blob = await response.blob();
      const localUrl = URL.createObjectURL(blob);
      setImageUri(localUrl);
    } catch (error) {
      console.error("Failed to fetch image:", error);
      Alert.alert("Error", "Unable to fetch image.");
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Fetch Image" onPress={handleFetchImage} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <Text>No access to camera</Text>
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
    width: 300,
    height: 300,
    marginTop: 20,
  },
});
// import React, { useState, useEffect } from "react";
// import { View, Text, Button, Image, Alert, StyleSheet } from "react-native";
// import { Camera } from "expo-camera";
// import * as ImagePicker from "expo-image-picker";

// export default function captureFootSize() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [imageURI, setImageURI] = useState(null); // 서버로부터 가져온 이미지 URL을 저장

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === "granted");
//     })();
//   }, []);

//   const takeImage = async () => {
//     let result = await ImagePicker.launchCameraAsync({
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       sendImageToServer(result.uri);
//     }
//   };

//   const sendImageToServer = async (uri) => {
//     const formData = new FormData();
//     formData.append("file", { uri, name: "photo.jpg", type: "image/jpeg" });

//     try {
//       const response = await fetch("http://127.0.0.1:5000/upload", {
//         method: "POST",
//         body: formData,
//         headers: {
//           //   "Content-Type": "multipart/form-data",
//         },
//       });
//       const responseData = await response.json();
//       if (response.ok) {
//         setImageURI(`http://127.0.0.1:5000/uploads/${responseData.filename}`);
//         Alert.alert("Image Processed", "Your foot size has been calculated.");
//       } else {
//         throw new Error("Failed to upload image");
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert("Upload failed", "Unable to upload image.");
//     }
//     const response = await fetch("http://127.0.0.1:5000/uploads", {
//         method: "GET",
//         body:

//     });
//   };

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Button title="Take a picture" onPress={takeImage} />
//       {imageURI && <Image source={{ uri: imageURI }} style={styles.image} />}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginTop: 20,
//   },
// });
