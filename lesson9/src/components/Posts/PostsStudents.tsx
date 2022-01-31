import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { Box, Button, Typography } from "@mui/material";
import { IPost } from "../../types/Post";
import { useNavigate, useParams } from "react-router-dom";

function PostsStudents() {
  let params = useParams();
  const [posts, setPosts] = useState<IPost[]>();
  let navigate = useNavigate();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [params.id]);

  return (
    <>
      <Button sx={{ mx: 5, mt: 2 }} onClick={() => navigate(-1)}>
        {" "}
        Back to students
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          p: 3,
        }}
      >
        {posts?.length ? (
          posts?.map((post, index) => (
            <PostItem key={post.id} idx={index + 1} post={post} />
          ))
        ) : (
          <Typography variant="h3">This student don`t create posts</Typography>
        )}
      </Box>
    </>
  );
}

export default PostsStudents;
