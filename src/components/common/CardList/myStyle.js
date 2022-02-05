export const myStyle = {
  wrapper: {
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
  },
  myCard: {
    boxShadow: "0 0px 40px rgb(0 0 0 / 5%)",
    display: "flex",
    flexDirection: "column",
    borderRadius: 2,
  },
  cardContent: {
    height: "280px",
    display: "flex",
    flexDirection: "column",
    ml: 1,
    mr: 1,
  },
  cardHeader: {
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardDetail: {
    flexGrow: 1,
    overflow: "hidden",
    pt: 1,
    mb: 2,
  },
  myFooter: { display: "flex", alignItems: "center" },
  cardDate: { pl: 2 },
};
