import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuCard from "../MenuCard/MenuCard";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { myStyle } from "./myStyle";
import { useDispatch } from "react-redux";
import { toggleFavAsync } from "../../../redux/noteSlice";
import { motion } from "framer-motion";
import ShowMoreText from "react-show-more-text";

const CardList = ({ note }) => {
  const { id, title, details, favorite, date, color } = note;
  const dispatch = useDispatch();

  const favHandle = () => {
    dispatch(toggleFavAsync({ id, favorite: !favorite }));
  };
  return (
    <Box
      component={motion.div}
      whileHover={{
        scale: 1.1,
        transition: { type: "spring", stiffness: 200 },
      }}
      sx={{
        maxWidth: { xs: "525px", md: "350px" },

        position: "relative",
        "&::after": {
          content: "''",
          position: "absolute",
          width: "99%",
          height: "1px",
          bottom: "0px",
          border: "2px solid",
          borderColor: `${color}`,
          backgroundColor: `${color}`,
          borderRadius: "8px",
          overflow: "hidden",
        },
        "&:hover::after": {
          display: "none",
          transition: "1s",
        },
        "&:hover": {
          "& .MuiIconButton-root": {
            color: "#fff",
          },
        },
      }}
    >
      <Card
        component={motion.div}
        whileHover={{
          backgroundColor: `${color}`,
          color: "#fff",
        }}
        sx={myStyle.myCard}
      >
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
            {/* ============= menu card component =================== */}
            <MenuCard note={note} />
          </Typography>
          {/* card title field */}
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Box sx={myStyle.cardDetail}>
            <Typography variant="body1">
              <ShowMoreText
                width={250}
                lines={4}
                more=""
                less=""
                truncatedEndingComponent={"..."}
              >
                {details}
              </ShowMoreText>
            </Typography>
          </Box>
          <Box sx={myStyle.myFooter}>
            <IconButton size="small" sx={{ color, fontSize: 20 }}>
              <DateRangeIcon />
            </IconButton>
            <Typography sx={myStyle.cardDate}>{date}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export default CardList;
