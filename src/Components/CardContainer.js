import React, { useState } from "react";
import CardImages from "./CardImages";
import Modal from "./Modal";

const CardContainer = ({ images }) => {
  const [data, setData] = useState(null);
  return (
    <div className="flex justify-evenly items-stretch flex-wrap ">
      {data && <Modal data={data} setData={setData} />}
      {images.map(({ alt_description, id, created_at, likes, urls, user }) => {
        return (
          <CardImages
            description={alt_description}
            key={id}
            createdAt={created_at}
            likes={likes}
            urls={urls}
            user={user}
            setData={setData}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
