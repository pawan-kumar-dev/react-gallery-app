import {
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  image: {
    height: "300px",
  },
  modalImage: {
    height: "500px",
  },
});
const CardContents = ({
  handlePreview,
  thumb,
  regular,
  description,
  modal,
}) => {
  const classes = useStyles();
  return (
    <CardActionArea>
      <CardMedia
        className={modal ? classes.modalImage : classes.image}
        onClick={handlePreview}
        image={thumb || regular}
        title={description}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
  );
};

export default CardContents;
