import React from "react";
import { Platform, StatusBar, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ios = Platform.OS === "ios";

const Profile = () => {
    return (
        <View className="flex-1 bg-background">
            <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
                <StatusBar barStyle={"light-content"} />
                <Text className="text-primary font-bold text-2xl">Profile!</Text>
            </SafeAreaView>
        </View>
    );
};

export default Profile;
