import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={Styles.title}>FlatCards</Text>
      <View style={Styles.container}>
        <View style={Styles.card}>
          <Text>Card 1</Text>
        </View>
        <View style={Styles.card}>
          <Text>Card 2</Text>
        </View>
        <View style={Styles.card}>
          <Text>Card 3</Text>
        </View>
        <View style={Styles.card}>
          <Text>Card 4</Text>
        </View>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    padding: 10
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'red',
    padding: 20,
    margin: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: 100,
    height: 100
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  }
})