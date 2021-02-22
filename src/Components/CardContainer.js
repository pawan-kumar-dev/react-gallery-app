import { Button, Hidden, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import CardImages from "./CardImages";
import Modal from "./Modal";
import ListIcon from "@material-ui/icons/List";
import AppsIcon from "@material-ui/icons/Apps";

const useStyles = makeStyles({
  gridContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    flexWrap: "wrap",
    maxWidth: "1280px",
    margin: "0 auto",
    width: "100%",
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
});
const CardContainer = ({ images }) => {
  const [data, setData] = useState(null);
  const [list, setList] = useState(false);
  const classes = useStyles();
  return (
    <>
      <Hidden mdDown>
        <div className={classes.buttons}>
          <Button
            startIcon={<AppsIcon />}
            color="primary"
            variant={!list ? "contained" : "outlined"}
            onClick={() => setList(false)}>
            Grid View
          </Button>
          <span style={{ margin: "10px" }} />
          <Button
            startIcon={<ListIcon />}
            color="primary"
            variant={list ? "contained" : "outlined"}
            onClick={() => setList(true)}>
            List View
          </Button>
        </div>
      </Hidden>
      <div
        className={`${classes.gridContainer} ${list && classes.listContainer}`}>
        {data && <Modal data={data} setData={setData} />}
        {images.map(
          ({ alt_description, id, created_at, likes, urls, user }) => {
            return (
              <CardImages
                description={alt_description}
                key={id}
                createdAt={created_at}
                likes={likes}
                urls={urls}
                user={user}
                setData={setData}
              />
            );
          }
        )}
      </div>
    </>
  );
};

export default CardContainer;
