import {
  Pressable,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Link } from "expo-router";
import React, { useState } from "react";
import LoadingAnimation from "@/components/LoadingAnimation";

const measurePressure = () => {
  // Activity Indicator의 보여줄지 말지를 결정하는 상태
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = () => {
    setIsLoading(true);

    // 시뮬레이션을 위해 setTimeout을 사용하였으나,
    // 실제 앱에서는 여기에서 실제 일을 수행하는 로직으로 대체될 수 있습니다.
    setTimeout(() => {
      setIsLoading(false); // 예: 측정 완료 후 로딩 상태 해제
    }, 5000); // 5초 후 로딩을 종료하고 결과를 표시
  };

  return (
    <View>
      <Text style={styles.title}>발 압력 측정 시작</Text>
      <Link
        href="/measurePressure"
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>시작하기</Text>
          {isLoading && (
            <View>
              <ActivityIndicator size="large" color="#0000FF" />
            </View>
          )}
        </Pressable>
      </Link>
    </View>
  );
};

export default measurePressure;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginRight: 10,
  },
});
