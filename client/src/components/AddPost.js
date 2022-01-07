import React, { useState } from "react";
import { Button, TextField, Grid } from "@mui/material";
import axios from "axios";
const AddPost = () => {
  const [content, setContent] = useState("");

  const submitHandler = (e) => {
    if (content === "") alert("Please write content");
    axios.post("http://localhost:5001/", { content });
  };

  return (
    <form onSubmit={submitHandler}>
      <Grid container spacing={3}>
        <Grid item xs />
        <Grid item xs={6}>
          <h2>Add Post</h2>
          <br />
          <TextField
            id="outlined-basic"
            label="Content"
            variant="outlined"
            fullWidth
            onChange={(e) => setContent(e.target.value)}
          />
          <br />
          <br />
          <Button variant="contained" type="submit" fullWidth>
            Add
          </Button>
        </Grid>
        <Grid item xs />
      </Grid>
    </form>
  );
};

export default AddPost;
