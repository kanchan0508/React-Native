import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";

export default function ActionCard() {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };
  return (
    <View>
      <Text style={Styles.text}>Blog Cards</Text>
      <View style={Styles.card}>
        <Text style={Styles.headerText}>Start learning JavaScript</Text>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYuLj3mMw-FtwUvCkbHlEdIwNbG6Q4A0id4w&s",
          }}
          style={Styles.image}
        />
        <View style={Styles.body}>
          <Text numberOfLines={3} style={Styles.Para}>
            JavaScript is the world's most popular programming language.
            JavaScript is the programming language of the Web. JavaScript is
            easy to learn. This tutorial will teach you JavaScript from basic to
            advanced.
          </Text>
        </View>
        <View style={Styles.Footer}>
          <TouchableOpacity onPress={()=> openWebsite("https://www.w3schools.com/js/")}>
            <Text style={Styles.cardText}>Visit Website</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> openWebsite("https://github.com/kanchan0508")}>
            <Text style={Styles.cardText}>Visit Website</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  text: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  card: {
    backgroundColor: "#f58a42",
    borderRadius: 5,
    padding: 10,
    margin: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    paddingLeft: 35,
    paddingBottom: 10,
  },
  image: {
    height: 150,
    width: "100%",
    resizeMode: "cover",
  },
  body: {
    marginBottom: 10,
  },
  Para: {
    color: "white",
  },
  Footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
  },
  cardText: {
    color: "#333",
    fontSize: 12,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    
  },
});
