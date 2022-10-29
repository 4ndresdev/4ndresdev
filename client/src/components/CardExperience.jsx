import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Stack,
  Box,
  Typography,
  Chip,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

const CardExperience = ({ color, worked, position, from, to, actual }) => {
  return (
    <Grid container padding={0}>
      <Grid item xs={12} md={9} lg={9} xl={9} marginTop={2}>
        <Card
          style={{
            boxShadow: "none",
            border: "1px solid rgb(219, 219, 219)",
            borderRadius: "8px",
          }}
        >
          <CardContent component="div">
            <Stack
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={2}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: `#${color}`,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <WorkIcon />
              </Box>
              <Box>
                <Typography variant="body2" fontWeight="bold" padding={0}>
                  {worked}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }} padding={0}>
                  {position}
                </Typography>
              </Box>
            </Stack>
            <Stack
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              marginTop={3}
            >
              <Box>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ opacity: 0.8 }}
                  padding={0}
                >
                  {from} |{" "}
                  {actual ? (
                    <Chip label="Actual" size="small" color="primary" />
                  ) : (
                    `${to}`
                  )}
                </Typography>
              </Box>
              <Box>
                <AvatarGroup max={6}>
                  <Avatar
                    alt="Cindy Baker"
                    src="https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw"
                  />
                  <Avatar
                    alt="Agnes Walker"
                    src="https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo"
                  />
                  <Avatar
                    alt="Travis Howard"
                    src="https://www.cloudstudio.mx/blog/wp-content/uploads/2019/01/js.png"
                  />
                  <Avatar
                    alt="Remy Sharp"
                    src="https://bahiaxip.com/image/post/main/5af1trB31QPwKVZg7BEiBDMLoScjcMukBlBmdliG.jpeg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="https://www.redeszone.net/app/uploads-redeszone.net/2017/02/mysql.png?x=480&y=375&quality=40"
                  />
                </AvatarGroup>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardExperience;
