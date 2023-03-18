import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

import client from "../sanity/sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "featured"]{
      ...,
      restaurants[]=>{ 
        ...,
        dishes[]-> 
      }
    }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
    console.log("HELLO WORLD ");
  }, []);

  console.log(featuredCategories);

  return (
    <SafeAreaView className="custom bg-white">
      {/* Header*/}
      <View className="flex-row pb-1 items-center mx-4 space-x-2 px-3">
        <Image
          source={{
            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
          }}
          className="h-7 w-7 bg-gray-300 p-1 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={33} color="#00ccbb" />
      </View>
      {/*Search*/}
      <View className="flex-row items-center space-x-2 mx-4 pb-2">
        <View className="flex-row flex-1 space-x-2  bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and Cuisines"
            KeyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00ccbb" />
      </View>
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
          featuredCategory="discounts"
        />
        <FeaturedRow
          id="12345"
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
          featuredCategory="Offers"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
