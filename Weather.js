import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
// import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from 'prop-types';

const weatherCases = {
  Rain: {
    colors:['#00c6fb', "#005BEA"],
    title: "Raining like a MF",
    subtitle: "For more info look outside",
    icon: 'weather-rainy'
  },
  Clear: {
    colors:['#FEF253', "#FF7300"],
    title: "Sunny as Fuck",
    subtitle: "Go get your ass burn",
    icon: 'weather-sunny'
  },
  Thunderstorm: {
    colors:['#00ECBC', "#007ADF"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house",
    icon: 'weather-lightning'
  },
  Clouds: {
    colors:['#D7D2CC', "#384352"],
    title: "Clouds",
    subtitle: "I know, fucking boring",
    icon: 'weather-cloudy'
  },
  Snow: {
    colors:['#7DE2FC', "#89B6E5"],
    title: "Cold as balls",
    subtitle: "Do you want to build a snowman? Fuck no",
    icon: 'weather-snowy'
  },
  Drizzle: {
    colors:['#89F7Fe', "#66A6FF"],
    title: "Drizzle",
    subtitle: "Is like rain,but gay",
    icon: 'weather-hail'
  },
  Haze: {
    colors:['#89F7Fe', "#66A6FF"],
    title: "Haze",
    subtitle: "Haze ~ Oh Haze!",
    icon: 'weather-hail'
  },
  Mist: {
    colors:['#89F7Fe', "#66A6FF"],
    title: "Mist",
    subtitle: "It's like you have no glasses on",
    icon: 'weather-fog'
  }
};

// export default class Weather extends Component {
//   render() {
//     return (
//       <LinearGradient
//       colors={["#00c6fb", "#005BEA"]}
//       style={styles.container}
//       >
//         <View style={styles.upper}>
//           <Ionicons color="white" size={144} name="ios-rainy" />
//           <Text style={styles.temp}>35℃</Text>
//         </View>
//         <View style={styles.lower}>
//           <Text style={styles.title}>Raining like a MF</Text>
//           <Text style={styles.subtitle}>For more info look outside</Text>
//         </View>
//       </LinearGradient>
//     );
//   }
// }

function Weather({ weatherName, temp }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <MaterialCommunityIcons
          color="white"
          size={144}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRuquired
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "transparent"
  },
  temp:{
    fontSize: 48,
    backgroundColor: "transparent",
    color:"white",
    marginTop: 10
  },
  lower:{
    flex:1,
    alignItems:"flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title:{
    fontSize: 38,
    backgroundColor: "transparent",
    color:"white",
    marginBottom: 24,
    fontWeight: "300"
  },
  subtitle:{
    fontSize: 24,
    backgroundColor: "transparent",
    color:"white",
    marginBottom: 24
  }
});
