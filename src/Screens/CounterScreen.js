import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{counter}</Text>
      <View style={styles.buttonViewStyle}>
        <Button
          title="INCREASE"
          onPress={() => {
            setCounter(counter + 1);
          }}
        />
        <Button
          title="DECREASE"
          onPress={() => {
            setCounter(counter - 1);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 80,
  },
  viewStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonViewStyle: {
    display: "flex",
    flexDirection: "row",
  },
});

export default CounterScreen;
