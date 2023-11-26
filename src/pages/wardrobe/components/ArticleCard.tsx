import React from "react";
import { ArticleValuesInterface } from "../../new-article/InitialValues";
import { Box, Paper } from "@mui/material";
import styles from "./ArticleCard.module.scss";

const ArticleCard = (props: ArticleValuesInterface) => {
  const { name, brand, type, image, size, color } = props;
  return (
    <Paper className={styles.card}>
      <Box className={styles.cardImage}>
        <img src={image} alt="article-image" width={250} height={250} />
      </Box>
      <Box className={styles.cardInfoContainer}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <Box className={styles.cardBrandSizeContainer}>
          <h4 className={styles.cardBrand}>{brand}</h4>
          <h4 className={styles.cardSize}>{size}</h4>
        </Box>
        {/* <h4>{color}</h4> */}
      </Box>
    </Paper>
  );
};

export default ArticleCard;
