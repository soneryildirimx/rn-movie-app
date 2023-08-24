import { FlatList, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { Movie } from "../constants/types";
interface AnchorSliderProps {
    data: Movie[];
}
const AnchorSlider = (props: AnchorSliderProps) => {
    const { data } = props;
    return (
        <View className="flex justify-center items-center">
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View className="mr-4">
                        <Image
                            className="rounded-3xl"
                            source={{ uri: item.poster_path }}
                            style={{
                                width: Dimensions.get("window").width / 2,
                                height: Dimensions.get("window").height / 2.6,
                            }}
                        />
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
