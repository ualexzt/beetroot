import React, { useState } from "react";
import { IUser } from "../../Types";
import { Avatar, IconButton, ListItem, ListItemText } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PostsUser from "../Posts/PostsUser";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface UserProps {
  user: IUser;
}

function UserListItem({ user }: UserProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ListItem
        onClick={() => setOpen(!open)}
        sx={{
          "&:hover": {
            backgroundColor: "#eceff1",
            cursor: "pointer",
          },
        }}
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            {open ? (
              <ArrowDropDownIcon fontSize="large" />
            ) : (
              <ArrowRightIcon fontSize="large" />
            )}
          </IconButton>
        }
      >
        <Avatar>
          <AccountBoxIcon />
        </Avatar>
        <ListItemText
          sx={{ px: 3 }}
          primary={user.name}
          secondary={`Username: ${user.username} - Email: ${user.email}`}
        />
      </ListItem>
      {open && <PostsUser id={user.id} />}
    </>
  );
}

export default UserListItem;
