import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function LoadingAnimation() {
  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({});
