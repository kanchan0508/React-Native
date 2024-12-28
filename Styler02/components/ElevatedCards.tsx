import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const ElevatedCards = () => {
  return (
    <View>
      <Text style={Styles.cardText}> Elevated cards </Text>
      <ScrollView horizontal={true} style={Styles.container}>
        <View style={Styles.elevatedCard}>
          <Text>Tap</Text>
        </View>
        <View style={Styles.elevatedCard}>
          <Text>on</Text>
        </View>
        <View style={Styles.elevatedCard}>
          <Text>me</Text>
        </View>
        <View style={Styles.elevatedCard}>
          <Text>to</Text>
        </View>
        <View style={Styles.elevatedCard}>
          <Text>Scroll</Text>
        </View>
        <View style={Styles.elevatedCard}>
          <Text>more......</Text>
        </View>
        <View style={Styles.elevatedCard}>
          <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
   padding: 10,
    backgroundColor: "#fff",
   
  },
  elevatedCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "blue",
    width: 100,
    height: 100
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    padding: 10,
  },
});

export default ElevatedCards;
