import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>발 모양과 압력 분석으로 신발 추천받기</Text>
      <Text>발의 압력을 재고 사진을 찍으면 AI가 신발을 추천해드려요.</Text>
      {/* <StatusBar /> */}
      <Link
        // href="/measurePressure"
        href="/captureFootSize"
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable style={styles.button}>
          <Text style={styles.buttontext}>나에게 딱맞는 신발 찾으러 가기</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 120,
  },
  link: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 4,
  },
  button: {
    height: 60,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.75)",
    padding: 6,
  },
  buttontext: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
  },
});
