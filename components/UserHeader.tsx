import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Search } from "react-native-feather";

const UserHeader = () => {
    return (
        <View className="mt-4 mb-8 flex-row justify-between">
            <Text className="font-semiBold text-lightGray text-2xl">
                <Text className="font-semiBold text-primary text-2xl">
                    Hello
                </Text>{" "}
                Esaldor!
            </Text>
            <TouchableOpacity>
                <Search className="text-lightGray" width={32} height={32} />
            </TouchableOpacity>
        </View>
    );
};

export default UserHeader;

const styles = StyleSheet.create({});
