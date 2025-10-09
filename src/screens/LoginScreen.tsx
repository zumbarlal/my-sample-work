import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Asset } from "expo-asset";

import { Image, StyleSheet, View } from "react-native";
import { Appbar, Button, Card, Icon, Text, useTheme } from "react-native-paper";

export default function LoginScreen({ navigation }) {
  useEffect(() => {
    Asset.loadAsync([require("../../assets/images/profile_pic.png")]);
  }, []);

  const theme = useTheme();
  return (
    <>
      <Appbar.Header elevated={true}>
        <Appbar.Content title="Zumbarlal's Sample Work"></Appbar.Content>

        <Appbar.Action icon="theme-light-dark"></Appbar.Action>
      </Appbar.Header>

      <StatusBar style="auto" />

      <Text
        style={{
          padding: 8,
          // margin: 8,
          fontStyle: "italic",
          textAlign: "center",
          color: theme.colors.primary,
          backgroundColor: theme.colors.background,
        }}
      >
        This app is built with React Native(0.81) bare workflow, Its works on
        Android, iOS and Web and Use of Expo
        {<b>(Recommmended)</b>} CLI locally {<b>(free part of expo)</b>} and
        doesn't depend on eas(paid services).
      </Text>

      <View
        style={{
          ...styles.container,
          backgroundColor: theme.colors.background,
        }}
      >
        <Card
          style={{
            padding: 8,
            margin: 8,
          }}
        >
          <Image
            style={styles.profile_pic}
            source={require("../../assets/images/profile_pic.png")}
          />
          <Text>Welcome to see my-sample-work</Text>
        </Card>
        <Button
          mode="contained"
          style={{ margin: 8 }}
          onPress={() => navigation.replace("Dashboard")}
        >
          Login
        </Button>
      </View>

      <View style={styles.footer}>
        <Text style={{ margin: 8 }}>Lot's more things are coming soon!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
  },
  profile_pic: {
    alignSelf: "center",
    borderRadius: 20,
    margin: 8,
    width: 100,
    height: 100,
  },
});
