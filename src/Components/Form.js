import { Button, makeStyles, MenuList, Select } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    padding: "10px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "stretch",
    },
  },
  input: {
    flex: "1",
    padding: "10px",
    border: "2px solid black",
    borderRadius: "10px",
  },
  button: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      margin: "10px auto",
    },
  },
}));

const Form = ({ text, handleSubmit, perPage, setPerPage, setText }) => {
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search Here"
        className={classes.input}
      />
      <div className={classes.button}>
        <div>
          Per Page{" "}
          <Select
            value={perPage}
            onChange={(e) => setPerPage(e.target.value)}
            placeholder="Select Perpage"
          >
            {[10, 20, 30].map((v) => (
              <MenuList key={v} value={v}>
                {v}
              </MenuList>
            ))}
          </Select>
        </div>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          disabled={text === ""}
          className="m-2"
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default Form;
