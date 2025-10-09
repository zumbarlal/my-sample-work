import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

export default function DashboardScreen({ navigation }) {
  return (
    <>
      <StatusBar style="auto" />

      <View style={styles.container}>
        <Card style={{ padding: 8, margin: 8 }}>
          <Text variant="bodyMedium" style={{ textAlign: "center" }}>
            Technical Leader and Full-Stack Mobile Developer{"\n"}with 13+ years
            in Android, iOS, React Native & Flutter. {"\n"}Expert in enterprise
            architecture, {"\n"}Salesforce integration, CI/CD, code reviews,{" "}
            {"\n"}mentoring and production deployment
          </Text>
        </Card>

        <Button
          mode="contained"
          style={{ margin: 8 }}
          onPress={() => navigation.replace("Login")}
        >
          Logout
        </Button>
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
});
