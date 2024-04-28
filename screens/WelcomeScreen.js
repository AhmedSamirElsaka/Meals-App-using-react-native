import { View, Text, Button } from "react-native";

function WelcomeScreen({ navigation }) {
  function openDrawerPressHandler() {
    navigation.toggleDrawer();
  }
  return (
    <View>
      <Text>Hello to this app</Text>
      <Button title="Open drawer" onPress={openDrawerPressHandler} />
    </View>
  );
}

export default WelcomeScreen;
