import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ArrowLeftCircle } from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            className="absolute top-14 left-6 z-50 bg-primary rounded-full"
            onPress={() => navigation.goBack()}
        >
            <ArrowLeftCircle
                width={32}
                height={32}
                className="text-lightGray"
            />
        </TouchableOpacity>
    );
};

export default BackButton;
