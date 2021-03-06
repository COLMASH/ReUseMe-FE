import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView, { Circle } from "react-native-maps";

import colors from "../config/colors";

const { width } = Dimensions.get("window");
const height = width * 0.8;

function ShowLocation({ item }) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: parseFloat(item.latitude),
          longitude: parseFloat(item.longitude),
          latitudeDelta: 0.102,
          longitudeDelta: 0.101,
        }}
      >
        <Circle
          center={{
            latitude: parseFloat(item.latitude),
            longitude: parseFloat(item.longitude),
          }}
          radius={2000}
          fillColor={colors.dangerMap}
          strokeWidth={2}
          strokeColor={colors.danger}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    overflow: "hidden",
  },
  map: {
    width: width * 0.9,
    height: height,
  },
});

export default ShowLocation;
