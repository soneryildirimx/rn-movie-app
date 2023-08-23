// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home as HomeIcon, Archive, User } from "react-native-feather";
// Screens
import Home from "../screens/Home";
import Upcomings from "../screens/Upcomings";
import Profile from "../screens/Profile";
// Constants
import { COLORS } from "../constants/styles";

// Navigation Stack
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: COLORS.black,
                        borderTopWidth: 0,
                        opacity: 0.9,
                        height: 120,
                    },
                    tabBarActiveTintColor: COLORS.white,
                    tabBarInactiveTintColor: COLORS.gray,
                    tabBarLabelStyle: {
                        fontFamily: "Poppins-Regular",
                        fontSize: 12,
                    },
                    tabBarItemStyle: {
                        marginBottom: 24,
                    },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: "Home",

                        tabBarIcon: ({ color }) => <HomeIcon color={color} />,
                    }}
                />
                <Tab.Screen
                    name="Upcomings"
                    component={Upcomings}
                    options={{
                        tabBarLabel: "Upcomings",

                        tabBarIcon: ({ color }) => <Archive color={color} />,
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarLabel: "Profile",

                        tabBarIcon: ({ color }) => <User color={color} />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigation;
