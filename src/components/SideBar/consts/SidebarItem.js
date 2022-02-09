import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { motion } from "framer-motion";

export const SidebarItem = [
  {
    id: 1,
    icon: <NoteOutlinedIcon />,
    label: "All Notes",
    type: "all",
  },
  {
    id: 2,
    icon: <FavoriteIcon />,
    label: "Favorite Notes",
    type: "true",
  },

  {
    id: 3,
    icon: <FavoriteBorderOutlinedIcon />,
    label: "Non Favorite",
    type: "false",
  },
];
