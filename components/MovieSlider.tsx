import {
    FlatList,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { Movie } from "../constants/types";
interface MovieSliderProps {
    data: Movie[];
    title?: string;
}
const MovieSlider = (props: MovieSliderProps) => {
    const { data, title } = props;
    return (
        <View className="flex">
            {title && (
                <Text className="font-semiBold text-lightGray text-xl mb-4">
                    {title}
                </Text>
            )}
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View className="mr-4">
                        <TouchableOpacity>
                            <Image
                                className="rounded-3xl"
                                source={{ uri: item.poster_path }}
                                style={{
                                    width: Dimensions.get("window").width / 3,
                                    height: Dimensions.get("window").height / 4,
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

export default MovieSlider;
