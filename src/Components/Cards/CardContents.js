import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";

const CardContents = ({
  handlePreview,
  thumb,
  regular,
  description,
  modal,
}) => {
  return (
    <CardActionArea>
      <CardMedia
        className={`w-full ${modal ? "h-96" : "h-44"}`}
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
