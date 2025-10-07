import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, View } from "react-native";
import { Button, Card, Text, useTheme } from "react-native-paper";

export default function LoginScreen({ navigation }) {
  const theme = useTheme();
  return (
    <>
      <StatusBar style="auto" />

      <View
        style={{
          ...styles.container,
          backgroundColor: theme.colors.background,
        }}
      >
        <Card style={{ padding: 8, margin: 8 }}>
          <Text>Welcome to see my-work</Text>
        </Card>
        <Button
          mode="contained"
          style={{ margin: 8, padding: 8 }}
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
});
