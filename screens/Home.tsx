import React, { useEffect } from "react";
import {
    Platform,
    StatusBar,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    FlatList,
    Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AnchorSlider from "../components/AnchorSlider";
import { Search } from "react-native-feather";
import UserHeader from "../components/UserHeader";
import { Movie, People } from "../constants/types";
import PeopleSlider from "../components/PeopleSlider";
import MovieSlider from "../components/MovieSlider";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const ios = Platform.OS === "ios";
const trending: Movie[] = [
    {
        id: 1,
        poster_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    },
    {
        id: 2,
        poster_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    },
    {
        id: 3,
        poster_path:
            "https://www.themoviedb.org/t/p/w440_and_h660_face/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
    },
];

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

const Home = () => {
    const tabBarHeight = useBottomTabBarHeight();
    return (
        <View className="flex-1 bg-background px-5 space-y-4">
            <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
                <StatusBar barStyle={"light-content"} />
                <UserHeader />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: tabBarHeight + 70,
                    }}
                    className="space-y-8"
                >
                    <View>
                        <AnchorSlider data={trending} />
                    </View>
                    <View>
                        <PeopleSlider data={people} title="Popular People" />
                    </View>
                    <View>
                        <MovieSlider data={trending} title="Top Rated" />
                    </View>
                    <View>
                        <MovieSlider data={trending} title="Now Playing" />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default Home;
