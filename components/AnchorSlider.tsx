import {
    FlatList,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    Button,
} from "react-native";
import React, { useEffect } from "react";
import { Movie } from "../constants/types";
import { useNavigation } from "@react-navigation/native";
interface AnchorSliderProps {
    data: Movie[];
}
const AnchorSlider = (props: AnchorSliderProps) => {
    const { data } = props;
    const navigation = useNavigation();

    useEffect(() => {}, []);
    return (
        <View className="flex justify-center items-center">
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View className="mr-4">
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("MovieDetail" as never);
                            }}
                            key={item.id}
                        >
                            <Image
                                className="rounded-3xl"
                                source={{ uri: item.poster_path }}
                                style={{
                                    width: Dimensions.get("window").width / 2,
                                    height:
                                        Dimensions.get("window").height / 2.6,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                )}
                horizontal
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default AnchorSlider;
