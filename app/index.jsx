import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.mainTitle}>Soul Mate, Sole Match</Text>
        <Text style={styles.subtitle}>
          발의 특성과 스타일을 매칭하여 편안하고 이상적인 신발을 추천해드립니다.
        </Text>
      </View>
      <Text style={styles.title}>발 모양과 압력 분석으로 신발 추천받기</Text>
      <Text style={styles.description}>
        발의 압력을 재고 사진을 찍으면 AI가 신발을 추천해드려요.
      </Text>
      <Link
        href="/measurePressure"
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable style={styles.button}>
          <Text style={styles.buttontext}>나에게 딱맞는 신발 찾으러 가기</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f8",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  mainTitle: {
    fontFamily: "BlackHanSans-Regular",
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginHorizontal: 20,
  },
  title: {
    color: "#333",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    height: 60,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#0066cc",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  buttontext: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
