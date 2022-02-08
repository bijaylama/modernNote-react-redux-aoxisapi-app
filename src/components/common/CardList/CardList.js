import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuCard from "../MenuCard/MenuCard";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { myStyle } from "./myStyle";
import ShowMoreText from "react-show-more-text";
import { useDispatch } from "react-redux";
import { toggleFavAsync } from "../../../redux/noteSlice";

const CardList = ({ note }) => {
  const { id, title, details, favorite, date, color } = note;
  const dispatch = useDispatch();

  const favHandle = () => {
    dispatch(toggleFavAsync({ id, favorite: !favorite }));
  };
  return (
    <Box
      sx={{
        maxWidth: "350px",
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
          {/* card header field */}
          <Typography
            sx={myStyle.cardHeader}
            color="text.secondary"
            gutterBottom
          >
            <IconButton onClick={favHandle} size="small" sx={{ color }}>
              {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
            <MenuCard note={note} />
          </Typography>
          {/* card title field */}
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Box sx={myStyle.cardDetail}>
            <ShowMoreText
              lines={4}
              more=""
              less=""
              truncatedEndingComponent={"... "}
            >
              <Typography variant="body1">{details}</Typography>
            </ShowMoreText>
          </Box>
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
