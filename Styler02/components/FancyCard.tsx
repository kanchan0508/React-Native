import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function FancyCard() {
  return (
    <View>
      <Text style={Styles.text}>FancyCard</Text>
      <View style={[Styles.container, Styles.elevateContainer]}>
        <Image style={Styles.image}
          source={{
            uri: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTE0ltbU_H8UCuV5ASJJbCSCN2FgsJ2HLRMawN28mwkl-vxiP6xx8CyatYqHAMcX0KGSFQ-aa9_2DoSfAuNwY-SZ1HqyxGQkl-X08wnDw",
          }}
        />
        <View>
          <Text style={Styles.textheading}>Hawa Mahal</Text>
          <Text style={Styles.textlabel}>Eastern façade of the Hawa Mahal, 2022</Text>
          <Text style={Styles.textdes}>The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.</Text>
          <Text style={Styles.textfooter}>200 KM far</Text>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
    container: {
      margin:5
    },
    elevateContainer :{
          backgroundColor: "white",
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          padding: 10,
          borderRadius: 10,
  
    },
    image: {
        width: 330,
        height: 200,
        marginBottom: 10,
        
    },
    text: {
        marginBottom: 10,
        paddingLeft: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    textheading: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 10,
    },
    textlabel: {
        fontSize: 15,
        marginBottom: 5,
        color: "#666",
    },
    textdes: {
        fontSize: 13,
        marginBottom: 10,
    },
    textfooter: {
        fontSize: 15,
        marginBottom: 5,
        color: "#666",
    },
})