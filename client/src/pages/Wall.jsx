import React from "react";
import { Box, Container, Avatar, Typography, Grid } from "@mui/material";
import styles from "../styles/Wall.module.css";
import Social from "../components/Social";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import CallIcon from "@mui/icons-material/Call";
import TimeLineComponent from "../components/TimeLine";
import Post from "../components/Post";

const posts = [
  {
    id: 1,
    author: "Andrés Belrán Ruiz",
    images: [
      "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/5240547/pexels-photo-5240547.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
  },
  {
    id: 2,
    author: "Andrés Belrán Ruiz",
    images: [
      "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/5240547/pexels-photo-5240547.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
  },
  {
    id: 3,
    author: "Andrés Belrán Ruiz",
    images: [
      "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/5240547/pexels-photo-5240547.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
  },
];

const Wall = () => {
  return (
    <>
      <Box className={styles.container__video}>
        <Avatar
          className={styles.smallAvatar}
          alt="Andrés"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <video autoPlay loop muted src={require("../videos/video.mp4")}></video>
        <Box className={styles.container__social} gap={1}>
          <Social icon={<CallIcon />} />
          <Social icon={<WhatsAppIcon />} />
          <Social icon={<TwitterIcon />} />
        </Box>
      </Box>
      <Container
        maxWidth="md"
        style={{ display: "flex" }}
        className={styles.container}
      >
        <Avatar
          className={styles.avatar}
          alt="Andrés"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <Box padding={3} className={styles.content}>
          <Typography className={styles.name} variant="h4" fontWeight="bold">
            🚀 Andrés Beltrán Ruiz
          </Typography>
          <Typography
            className={styles.aboutMe}
            variant="body1"
            sx={{ opacity: 0.8 }}
            marginTop={1}
          >
            Proactividad e iniciativa en la resolución de problemas, facilidad
            de colaboración e integración para el trabajo en equipo, rápida
            adaptación a cualquier entorno de trabajo, creatividad,
            responsabilidad y compromiso. 🔥
          </Typography>
          <Typography variant="h6" fontWeight="bold" marginTop={3}>
            Experience
          </Typography>
          <TimeLineComponent />
          <Typography
            variant="h6"
            fontWeight="bold"
            marginTop={3}
            marginBottom={2}
          >
            Projects
          </Typography>
          <Grid container padding={0}>
            {posts.map((item) => (
              <Grid
                key={item.id}
                item
                xs={12}
                md={10}
                lg={10}
                xl={10}
                marginTop={2}
              >
                <Post post={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Wall;
