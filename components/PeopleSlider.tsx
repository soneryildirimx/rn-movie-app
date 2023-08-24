import { FlatList, TouchableOpacity, View, Image, Text } from "react-native";
import React from "react";
import { People } from "../constants/types";

interface PeopleSliderProps {
    data: People[];
    title?: string;
}
const PeopleSlider = (props: PeopleSliderProps) => {
    const { data, title } = props;

    return (
        <View>
            {title && (
                <Text className="font-semiBold text-lightGray text-xl mb-4">
                    {title}
                </Text>
            )}
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View className="pr-6">
                        <TouchableOpacity>
                            <Image
                                className="rounded-full"
                                source={{ uri: item.avatar }}
                                width={90}
                                height={90}
                            />
                        </TouchableOpacity>
                    </View>
                )}
                horizontal
            />
        </View>
    );
};

export default PeopleSlider;
