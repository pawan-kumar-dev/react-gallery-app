import React from "react";
import Slide from "@material-ui/core/Slide";
import { DialogContent, DialogActions, Dialog } from "@material-ui/core";
import { CardHeaders, CardContents, CardFooter } from "./Cards";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
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
  return (
    <Dialog
      open={true}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setData(null)}
      maxWidth="lg"
    >
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
      <DialogActions
        disableSpacing
        className="flex justify-between items-center"
      >
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
