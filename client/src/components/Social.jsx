import React from "react";
import { Box, Link } from "@mui/material";
import styles from "../styles/Social.module.css";

const Social = ({ icon, _blank = false, link }) => {
  return (
    <Link
      href={link}
      target={_blank ? "_blank" : ""}
      rel="noopener"
      sx={{ textDecoration: "none", color: "#000000" }}
    >
      <Box className={styles.social}>{icon}</Box>
    </Link>
  );
};

export default Social;
