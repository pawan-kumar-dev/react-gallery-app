import { makeStyles, Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { CardHeaders, CardContents, CardFooter } from "./Cards";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    width: "100%",
    margin: "10px 0",
  },
  action: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
const CardImages = ({
  description,
  createdAt,
  likes,
  urls: { thumb, regular },
  user: {
    first_name,
    instagram_username,
    location,
    name,
    portfolio_url,
    profile_image: { small, medium },
    twitter_username,
    username,
    links: { html },
  },
  setData,
}) => {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(likes ? likes : 0);
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLike = () => {
    if (like) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
  };
  //   getting the menu list to show
  const menu = [];
  if (portfolio_url) menu.push({ name: "Portfolio", href: portfolio_url });
  if (html) menu.push({ name: "Profile", href: html });

  //   handle preview select event
  const handlePreview = () => {
    setData({
      description,
      createdAt,
      likes,
      urls: { thumb, regular },
      user: {
        first_name,
        instagram_username,
        location,
        name,
        portfolio_url,
        profile_image: { small, medium },
        twitter_username,
        username,
        links: { html },
      },
    });
  };
  return (
    <Card className={classes.card}>
      <CardHeaders
        small={small}
        medium={medium}
        username={username}
        name={name}
        firstName={first_name}
        createdAt={createdAt}
        handleClick={handleClick}
      />
      {menu.length > 0 && (
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {menu.map(({ name, href }) => {
            return (
              <MenuItem
                key={name}
                onClick={handleClose}
                component="a"
                target="_blank"
                href={href}
              >
                {name}
              </MenuItem>
            );
          })}
        </Menu>
      )}
      <CardContents
        handlePreview={handlePreview}
        thumb={thumb}
        regular={regular}
        description={description}
      />
      <CardActions disableSpacing className={classes.action}>
        <CardFooter
          instagram_username={instagram_username}
          twitter_username={twitter_username}
          likeCount={likeCount}
          location={location}
          handleView={handlePreview}
          like={like}
          regular={regular}
          setLike={setLike}
          handleLike={handleLike}
        />
      </CardActions>
    </Card>
  );
};

export default CardImages;
