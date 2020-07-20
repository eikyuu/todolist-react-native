import React from "react";
import { Text, View, StyleSheet } from "react-native";

const days = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

const months = [
  "Janv",
  "Fev",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Decembre",
];

const Header = () => {
  const date = new Date();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {days[date.getDay()] +
          " " +
          date.getDate() +
          " " +
          months[date.getMonth()]}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
});

export default Header;
