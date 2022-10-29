import React from "react";
import { Box } from "@mui/material";
import styles from "../styles/Social.module.css";

const Social = ({ icon }) => {
  return <Box className={styles.social}>{icon}</Box>;
};

export default Social;
