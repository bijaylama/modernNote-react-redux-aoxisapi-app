import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import MenuCard from "../MenuCard/MenuCard";
import DateRangeIcon from "@mui/icons-material/DateRange";

const CardList = () => {
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
          borderColor: "#87baf5",
          backgroundColor: "#87baf5",
          borderRadius: "8px",
          overflow: "hidden",
        },
      }}
    >
      <Card
        sx={{
          boxShadow: "0 0px 40px rgb(0 0 0 / 5%)",
          display: "flex",
          flexDirection: "column",
          borderRadius: 2,
        }}
      >
        <CardContent
          sx={{
            height: "280px",

            //   border: "1px solid blue",
            display: "flex",
            flexDirection: "column",
            ml: 1,
            mr: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            color="text.secondary"
            gutterBottom
          >
            <IconButton size="small">
              <FavoriteBorderIcon />
            </IconButton>
            <MenuCard />
          </Typography>
          <Typography variant="h5" component="div">
            Heading
          </Typography>

          <Typography
            variant="body1"
            sx={{
              flexGrow: 1,
              overflow: "hidden",
              pt: 1,
              mb: 2,
            }}
          >
            well meaning and kindly.well meaning and jflkjdsklfj jfkds jkf
            sdjfsdj fkjsdk fjlksdj kfjkds jfkj sdkjf ksjdk fjkdsj kfjsdk jfkdjs
            kfjds jflk
          </Typography>
          <Box sx={{ display: "flex" }}>
            <DateRangeIcon />
            <Typography sx={{ pl: 2 }}>Jan 2, 2022</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export default CardList;
