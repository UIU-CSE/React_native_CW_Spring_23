import React, { useEffect, useState } from "react";
import { Button, Text, View, StyleSheet, TextInput } from "react-native";
import axios from "axios";
import { getUser } from "../Services/user.service";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [countryPred, setCountryPred] = useState("");
  const [users, setUsers] = useState([]);

  const predictCountry = () => {
    axios.get(`https://api.nationalize.io?name=${name}`).then((res) => {
      const pred = res.data["country"][0]["country_id"];
      console.log(pred);
      setCountryPred(pred);
    });
  };
  useEffect(() => {
    getUser().then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);

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
      <View>
        <TextInput
          placeholder="Enter Your Name"
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
        />
        <Button
          title="Submit"
          onPress={() => {
            predictCountry();
          }}
        />
        <Text>{countryPred}</Text>
        {users.length > 0 ? (
          <View>
            <Text>{users[0].email}</Text>
            <Text>{users[1].email}</Text>
            <Text>{users[2].email}</Text>
          </View>
        ) : (
          <></>
        )}
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
