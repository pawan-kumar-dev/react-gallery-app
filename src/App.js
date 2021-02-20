import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "./Api";
import { accessKey } from "./Keys";
import { CardContainer, Form } from "./Components";
import { Backdrop, CircularProgress } from "@material-ui/core";
import "./Styles/index.css";
import "./Styles/tailwind.css";

function App() {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [load, setLoad] = useState(false);
  const getInitialImage = async () => {
    setLoad(true);
    const { data } = await Axios.get(`/photos?client_id=${accessKey}`);
    setImages(data);
    setLoad(false);
  };
  useEffect(() => {
    if (text === "") {
      setPerPage(10);
      getInitialImage();
    }
  }, [text]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text) {
      setLoad(true);
      const {
        data: { results },
      } = await Axios.get(
        `/search/photos?query=${text}&client_id=${accessKey}&per_page=${perPage}`
      );
      setImages(results);
      setLoad(false);
    }
  };
  return (
    <div className=" max-w-7xl w-full mx-auto ">
      <Backdrop style={{ zIndex: "1000" }} open={load}>
        <CircularProgress size={80} thickness={5} color="primary" />
      </Backdrop>
      <Form
        text={text}
        handleSubmit={handleSubmit}
        perPage={perPage}
        setPerPage={setPerPage}
        setText={setText}
      />
      {images.length > 0 && <CardContainer images={images} />}
    </div>
  );
}

export default App;
