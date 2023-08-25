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
import { BlurView } from "expo-blur";
import MovieDetail from "../screens/MovieDetail";

// Navigation Stack
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLORS.background,
                    borderTopWidth: 0,
                    height: 90,
                    position: "absolute",
                    opacity: 0.9,
                },
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.gray,
                tabBarLabelStyle: {
                    fontFamily: "Poppins-Regular",
                    fontSize: 12,
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
    );
};

export default TabNavigation;
