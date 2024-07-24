import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import blogs from "../data/blogs";

function Details() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [content2, setContent2] = useState('')
  const [author, setAuthor] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const result = blogs.find((item) => item.id === parseInt(id));
    setTitle(result.title);
    setImage(result.image_url);
    setContent(result.content);
    setContent2(result.content2)
    setAuthor(result.author);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[24px] font-bold mb-5">{title}</h2>
        <img src={image} alt={title} className="w-[800px] h-[500px] rounded-md mb-5" />
        <div className="mb-5">
          <p>{content}</p>
          {content2 && <p>{content2}</p>}
        </div>
      </div>
    </div>
  );
}

export default Details;
