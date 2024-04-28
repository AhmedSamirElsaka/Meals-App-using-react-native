import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import IconButtonItem from "./components/IconButtonItem";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTabNavigator = createBottomTabNavigator();
export default function App() {
  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "green" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#24180f" },

          drawerActiveBackgroundColor: "#c6e2b6",
          drawerActiveTintColor: "green",
          drawerStyle: { backgroundColor: "#ccc", padding: 8 },
        }}
      >
        <Drawer.Screen component={CategoriesScreen} name={"MealsCategories"} />
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: "Welcome Screen",
            // drawerIcon: ({ color }) => (
            //   <IconButtonItem color="white" name="star" />
            // ),
            headerStyle: { backgroundColor: "green" },
            headerTintColor: "white",
            drawerActiveBackgroundColor: "#c6e2b6",
            drawerActiveTintColor: "green",
            drawerStyle: { backgroundColor: "#ccc", padding: 8 },
          }}
        />
      </Drawer.Navigator>
    );
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "green" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#24180f" },
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                title: "Alll Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              // options={{
              //   headerRight: () => {
              //     return <Button title="Tap me !" />;
              //   },
              // }
              // }
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Welcome"
            screenOptions={{
              headerStyle: { backgroundColor: "green" },
              headerTintColor: "white",
              // drawerLabel: "Welcome Screen",
              drawerActiveBackgroundColor: "#c6e2b6",
              drawerActiveTintColor: "green",
              drawerStyle: { backgroundColor: "#ccc", padding: 8 },
            }}
          >
            <Drawer.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{
                drawerLabel: "Welcome Screen",
                drawerIcon: ({ color }) => (
                  <IconButtonItem color="white" name="star" />
                ),
                //   headerStyle: { backgroundColor: "green" },
                //   headerTintColor: "white",
                //   drawerActiveBackgroundColor: "#c6e2b6",
                //   drawerActiveTintColor: "green",
                //   drawerStyle: { backgroundColor: "#ccc", padding: 8 },
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer> */}

        {/* <NavigationContainer>
          <BottomTabNavigator.Navigator
            screenOptions={{
              tabBarActiveTintColor: "green",
            }}
          >
            <BottomTabNavigator.Screen
              name="MealsCategories"
              component={CategoriesScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <IconButtonItem name="home" color={color} />
                ),
              }}
            />
            <BottomTabNavigator.Screen
              component={WelcomeScreen}
              name="Welcome"
            />
            <BottomTabNavigator.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <BottomTabNavigator.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{
                headerRight: () => {
                  return <Button title="Tap me !" />;
                },
              }}
            />
          </BottomTabNavigator.Navigator> */}
        {/* </NavigationContainer> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
