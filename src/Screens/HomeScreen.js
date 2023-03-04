import React from "react";
import { Button, Text, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

const HomeScreen = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text style={{ fontSize: 40 }}>Hello World</Text>
        <Button
          title="Go To Another Page"
          onPress={() => {
            props.navigation.navigate("List");
          }}
        />
        <Button
          title="Go To Counter Page"
          onPress={() => {
            props.navigation.navigate("Counter");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
