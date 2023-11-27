import { Box } from "@mui/material";
import React from "react";
import styles from "./NewArticleToast.module.scss";

interface NewArticleToastProps {
  imageFile: string;
}

const NewArticleToast = (props: NewArticleToastProps) => {
  const { imageFile } = props;
  return (
    <Box className={styles.newArticleToastContainer}>
      <img
        src={imageFile || "/article-placeholder.png"}
        width={30}
        height={30}
      />
      <h4>Item added to wardrobe!</h4>
    </Box>
  );
};

export default NewArticleToast;
