import React, { useState } from "react";
import { collectionStore } from "../../reducers/collectionReducer";
import { useNavigate } from "react-router-dom";
import ArticleCard from "./components/ArticleCard";
import { ArticleValuesInterface } from "../new-article/InitialValues";
import { Box, Button } from "@mui/material";
import styles from "./Wardrobe.module.scss";
import { ArticleTypesEnum } from "../../constants/ArticleTypesConstant";

const Wardrobe = () => {
  const navigate = useNavigate();

  const getWardrobeItems = (type?: string): ArticleValuesInterface[] => {
    if (type) {
      console.log(
        collectionStore
          .getState()
          .collection.filter((collectionItem) => collectionItem.type === type)
      );
      return collectionStore
        .getState()
        .collection.filter((collectionItem) => collectionItem.type === type)[0]
        .articles;
    } else {
      return collectionStore
        .getState()
        .collection.map((collectionItem) => collectionItem.articles)
        .flat();
    }
  };

  const [filteredItems, setFilteredItems] = useState<ArticleValuesInterface[]>(
    getWardrobeItems()
  );

  return (
    <>
      <Box className={styles.wardrobePageContainer}>
        <Box className={styles.wardrobePageInnerContainer}>
          <Button onClick={() => setFilteredItems(getWardrobeItems(""))}>
            All items
          </Button>
          <Button
            onClick={() =>
              setFilteredItems(getWardrobeItems(ArticleTypesEnum.T_SHIRT))
            }
          >
            Set T-shirt
          </Button>
          <Button
            onClick={() =>
              setFilteredItems(getWardrobeItems(ArticleTypesEnum.PANTS))
            }
          >
            Set pants
          </Button>
          <Box className={styles.wardrobeItemsContainer}>
            {filteredItems &&
              filteredItems.map(
                (item: ArticleValuesInterface, index: number) => {
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
                }
              )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Wardrobe;
