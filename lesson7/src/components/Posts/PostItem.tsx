import React from "react";
import { IPost } from "../../Types";
import { ListItem } from "@mui/material";

interface PostItemProps {
  idx: number;
  post: IPost;
}

function PostItem({ idx, post }: PostItemProps) {
  return (
    <ListItem>
      {idx}. {post.title}
    </ListItem>
  );
}

export default PostItem;
