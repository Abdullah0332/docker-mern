import React from "react";

const SinglePost = ({ data }) => {
  return <li key={data._id}>{data.content}</li>;
};

export default SinglePost;
