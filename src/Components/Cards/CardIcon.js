import { IconButton, Tooltip } from "@material-ui/core";
import React from "react";

const CardIcon = ({ title, Icon }) => {
  return (
    <Tooltip title={title}>
      <IconButton>
        <Icon />
      </IconButton>
    </Tooltip>
  );
};

export default CardIcon;
