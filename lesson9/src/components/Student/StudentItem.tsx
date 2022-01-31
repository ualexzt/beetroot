import React from "react";
import { Avatar, ListItem, ListItemText } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { IUser } from "../../types/User";
import { Link } from "react-router-dom";

interface UserProps {
  user: IUser;
}

function StudentItem({ user }: UserProps) {
  return (
    <>
      <Link
        style={{ textDecoration: "none", color: "gray" }}
        to={`/students/posts/${user.id}`}
      >
        <ListItem
          sx={{
            "&:hover": {
              backgroundColor: "#eceff1",
              cursor: "pointer",
            },
          }}
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
      </Link>
    </>
  );
}

export default StudentItem;
