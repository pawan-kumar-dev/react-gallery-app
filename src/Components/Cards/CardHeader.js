import { Avatar, CardHeader, IconButton, Tooltip } from "@material-ui/core";
import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import * as timeago from "timeago.js";

const CardHeaders = ({
  small,
  medium,
  username,
  name,
  firstName,
  createdAt,
  handleClick,
  modal,
}) => {
  return (
    <CardHeader
      avatar={<Avatar src={small || medium} alt={username}></Avatar>}
      action={
        !modal && (
          <Tooltip title="Menu">
            <IconButton onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
        )
      }
      title={name ? name : firstName}
      subheader={timeago.format(createdAt)}
    />
  );
};

export default CardHeaders;
