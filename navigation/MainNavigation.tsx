// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
// Screens
import MovieDetail from "../screens/MovieDetail";
// Navigation Stack
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="TabNavigation" component={TabNavigation} />
                <Stack.Screen name="MovieDetail" component={MovieDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;
