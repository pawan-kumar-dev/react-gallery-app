import { Button, MenuList, Select } from "@material-ui/core";
import React from "react";

const Form = ({ text, handleSubmit, perPage, setPerPage, setText }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex p-4 items-center md:flex-col md:items-stretch "
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search Here"
        className="flex-1 border-gray-500 border-2 p-4 rounded-sm "
      />
      <div className="flex md:mx-auto md:my-2 ">
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
