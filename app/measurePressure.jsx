import { Pressable, View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import React from "react";

const measurePressure = () => {
  return (
    <View>
      <Text style={styles.title}>발 압력 측정 시작</Text>
      <Link
        href="/measurePressure"
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable style={styles.button}>
          <Text style={styles.buttontext}>시작하기</Text>
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
