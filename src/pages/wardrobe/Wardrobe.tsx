import React, { useState } from "react";
import { collectionStore } from "../../reducers/collectionReducer";
import { useNavigate } from "react-router-dom";
import ArticleCard from "./components/ArticleCard";
import { ArticleValuesInterface } from "../new-article/InitialValues";
import { Box } from "@mui/material";
import styles from "./Wardrobe.module.scss";

const Wardrobe = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box className={styles.articleCardsContainer}>
        {collectionStore
          .getState()
          .collection.map((item: ArticleValuesInterface, index: number) => {
            return (
              <ArticleCard
                key={index}
                name={item.name}
                brand={item.brand}
                type={item.type}
                image={item.image}
                size={item.size}
                color={item.color}
              />
            );
          })}
      </Box>
    </>
  );
};

export default Wardrobe;
