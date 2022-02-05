import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuCard from "../MenuCard/MenuCard";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { myStyle } from "./myStyle";
import ShowMoreText from "react-show-more-text";

const CardList = ({ id, title, details, favorite, date, color }) => {
  const newColor = color;
  return (
    <Box
      sx={{
        position: "relative",
        "&::after": {
          content: "''",
          position: "absolute",
          width: "99.2%",
          height: "1px",
          bottom: "0px",
          border: "2px solid",
          borderColor: `${color}`,
          backgroundColor: `${color}`,
          borderRadius: "8px",
          overflow: "hidden",
        },
      }}
    >
      <Card sx={myStyle.myCard}>
        <CardContent sx={myStyle.cardContent}>
          <Typography
            sx={myStyle.cardHeader}
            color="text.secondary"
            gutterBottom
          >
            {/* <IconButton size="small"> */}
            <IconButton sx={{ color }}>
              <FavoriteBorderIcon
              // sx={{ color }}
              />
            </IconButton>
            <MenuCard />
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>

          <Typography variant="body1" sx={myStyle.cardDetail}>
            <ShowMoreText
              lines={4}
              more=""
              less=""
              truncatedEndingComponent={"... "}
            >
              {details}
            </ShowMoreText>
          </Typography>
          <Box sx={myStyle.myFooter}>
            <DateRangeIcon sx={{ color, fontSize: 20 }} />
            <Typography sx={myStyle.cardDate}>{date}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export default CardList;
