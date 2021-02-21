import { Button, IconButton, makeStyles, Tooltip } from "@material-ui/core";
import React from "react";
import CardIcon from "./CardIcon";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles({
  footer: {
    display: "flex",
    flex: "1",
    alignItems: "center",
  },
});
const CardFooter = ({
  instagram_username,
  twitter_username,
  likeCount,
  location,
  handleView,
  like,
  setLike,
  handleLike,
  modal,
  regular,
  likes,
}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.footer}>
        {modal ? (
          <p>{likes ? likes : 0} Likes</p>
        ) : (
          <p>
            {like ? (
              <Tooltip title="Add Likes">
                <IconButton
                  onClick={() => {
                    setLike(!like);
                    handleLike();
                  }}
                >
                  <FavoriteIcon />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Add Likes">
                <IconButton
                  onClick={() => {
                    setLike(!like);
                    handleLike();
                  }}
                >
                  <FavoriteBorderIcon />
                </IconButton>
              </Tooltip>
            )}
            {likeCount}
          </p>
        )}
        {location && <CardIcon title={location} Icon={LocationOnIcon} />}
        {instagram_username && (
          <CardIcon title={instagram_username} Icon={InstagramIcon} />
        )}
        {twitter_username && (
          <CardIcon title={twitter_username} Icon={TwitterIcon} />
        )}
        {regular && (
          <a href={regular} download target="_blank">
            <CardIcon title="Download Image" Icon={GetAppIcon} />
          </a>
        )}
      </div>
      <Button color="primary" onClick={handleView} variant="contained">
        {modal ? "Close" : "Preview"}
      </Button>
    </>
  );
};

export default CardFooter;
