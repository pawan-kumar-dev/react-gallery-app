import React from "react";
import Slide from "@material-ui/core/Slide";
import {
  DialogContent,
  DialogActions,
  Dialog,
  makeStyles,
} from "@material-ui/core";
import { CardHeaders, CardContents, CardFooter } from "./Cards";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles({
  action: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modal: {
    width: "100%",
  },
});
const Modal = ({
  data: {
    description,
    createdAt,
    likes,
    urls: { regular },
    user: {
      first_name,
      instagram_username,
      location,
      name,
      profile_image: { small, medium },
      twitter_username,
      username,
    },
  },
  setData,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      open={true}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setData(null)}
      classes={{ paperWidthMd: classes.modal }}
      maxWidth="md">
      <CardHeaders
        small={small}
        medium={medium}
        username={username}
        name={name}
        firstName={first_name}
        createdAt={createdAt}
        handleClick={null}
        modal
      />
      <DialogContent>
        <CardContents
          handlePreview={null}
          regular={regular}
          description={description}
          modal
        />
      </DialogContent>
      <DialogActions disableSpacing className={classes.action}>
        <CardFooter
          modal
          likes={likes}
          instagram_username={instagram_username}
          twitter_username={twitter_username}
          location={location}
          regular={regular}
          handleView={() => setData(null)}
        />
      </DialogActions>
    </Dialog>
  );
};
export default Modal;
