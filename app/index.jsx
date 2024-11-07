import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="light" /> */}
      <View style={styles.header}>
        <Text style={styles.subTitle}>Soul Mate</Text>
        <Text style={styles.mainTitle}>SoleMatch</Text>
        <Text style={styles.description}>
          발의 특성과 스타일을 매칭하여 편안하고 이상적인 신발을 추천해드립니다.
        </Text>
        <View style={styles.buttonContainer}>
          <Link
            href="/measurePressure"
            style={{ marginHorizontal: "auto" }}
            asChild
          >
            <Pressable style={styles.button}>
              <Text style={styles.buttontext}>
                나에게 딱맞는 신발 찾으러 가기
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.gray.gray100,
    padding: 20,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignItems: "flex-start", // Align texts to the left within this container
  },
  subTitle: {
    fontFamily: "BlackHanSans-Regular",
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.green.green100,
    opacity: 0.8,
    paddingBottom: 10,
  },
  mainTitle: {
    fontFamily: "BlackHanSans-Regular",
    fontSize: 50,
    fontWeight: "bold",
    color: Colors.green.green100,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    paddingTop: 30,
  },
  button: {
    height: 50,
    width: 250,
    borderRadius: 10,
    backgroundColor: Colors.green.green100,
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
