import {
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    Platform,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import PeopleSlider from "../components/PeopleSlider";
import { People } from "../constants/types";
import BackButton from "../components/BackButton";

const people: People[] = [
    {
        id: 1,
        fullname: "John Doe",
        avatar: "https://www.themoviedb.org/t/p/w235_and_h235_face/lldeQ91GwIVff43JBrpdbAAeYWj.jpg",
    },
    {
        id: 2,
        fullname: "John Doe",
        avatar: "https://www.themoviedb.org/t/p/w235_and_h235_face/2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg",
    },
    {
        id: 3,
        fullname: "John Doe",
        avatar: "https://www.themoviedb.org/t/p/w235_and_h235_face/AbXKtWQwuDiwhoQLh34VRglwuBE.jpg",
    },
    {
        id: 4,
        fullname: "John Doe",
        avatar: "https://www.themoviedb.org/t/p/w235_and_h235_face/cIbuK91Da9QS2gh43018CmRnx96.jpg",
    },
    {
        id: 5,
        fullname: "John Doe",
        avatar: "https://www.themoviedb.org/t/p/w235_and_h235_face/lwuFGAL8Vpy0seLgzJqhJcke3py.jpg",
    },
];
const ios = Platform.OS === "ios";

const MovieDetail = () => {
    return (
        <View>
            <BackButton />
            <ScrollView className={ios ? "-mb-2" : "mb-3"}>
                <View className="flex-1 bg-background space-y-4 pb-14">
                    <View className="relative">
                        <Image
                            source={{
                                uri: "https://www.themoviedb.org/t/p/w440_and_h660_face/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
                            }}
                            style={{
                                width: Dimensions.get("window").width,
                                height: Dimensions.get("window").height / 1.4,
                            }}
                        />

                        <LinearGradient
                            colors={["#0f0f0f", "transparent"]}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            style={{
                                position: "absolute",
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 4,
                                height: Dimensions.get("window").height / 1.4,
                            }}
                        />
                    </View>
                    <View className="px-5 space-y-4">
                        <View className="mb-8">
                            <Text className="text-gray font-regular text-md text-center mb-2">
                                2023 | Animation, Action, Adventure | 2h 20m
                            </Text>
                            <Text className="font-bold text-lightGray text-3xl text-center">
                                Spider-Man: Across the Spider-Verse
                            </Text>
                        </View>
                        <View>
                            <Text className="font-semiBold text-primary text-xl mb-4">
                                Summary
                            </Text>
                            <Text className="font-regular text-gray text-base">
                                After reuniting with Gwen Stacy, Brooklyn’s
                                full-time, friendly neighborhood Spider-Man is
                                catapulted across the Multiverse, where he
                                encounters the Spider Society, a team of
                                Spider-People charged with protecting the
                                Multiverse’s very existence. But when the heroes
                                clash on how to handle a new threat, Miles finds
                                himself pitted against the other Spiders and
                                must set out on his own to save those he loves
                                most.
                            </Text>
                        </View>
                        <View>
                            <Text className="font-semiBold text-primary text-xl mb-4">
                                Cast
                            </Text>
                        </View>
                        <PeopleSlider data={people} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default MovieDetail;
