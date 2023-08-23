// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";

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
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;
