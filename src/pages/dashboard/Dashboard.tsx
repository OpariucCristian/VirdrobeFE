import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box className={styles.contentContainer}>
        <h2 className={styles.title}>Manage your wardrobe digitally.</h2>
        <Box>
          <Button>How it works</Button>
          <Button variant="outlined" onClick={() => navigate("/newArticle")}>
            Get started
          </Button>
        </Box>
        <img className={styles.dashPic} src="/woman-choosing-clothes.jpg" />
      </Box>
    </>
  );
};

export default Dashboard;
