import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native";
import client from "../sanity/sanity";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  // useEffect(() => {
  //   client
  //     .fetch(
  //       `
  // *[_type == "category"  ]
  // `
  //     )
  //     .then((data) => {
  //       setCategories(data);
  //     });
  // }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard*/}

      <CategoryCard
        imgUrl="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg"
        title="Testing 1 "
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg"
        title="Testing 2 "
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg"
        title="Testing 3 "
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg"
        title="Testing 3 "
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg"
        title="Testing 3 "
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg"
        title="Testing 3 "
      />
    </ScrollView>
  );
};

export default Categories;
