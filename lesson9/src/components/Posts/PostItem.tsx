import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Zoom,
} from "@mui/material";
import { IPost } from "../../types/Post";

interface PostItemProps {
  idx: number;
  post: IPost;
}

function PostItem({ idx, post }: PostItemProps) {
  return (
    <>
      <Zoom in={true} style={{ transitionDelay: "500ms" }}>
        <Card sx={{ m: 2, maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://7oom.ru/wp-content/uploads/peizaji-01.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Zoom>
    </>
  );
}

export default PostItem;
