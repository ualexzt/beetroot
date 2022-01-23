import React, {useState} from 'react'
import {IUser} from '../../Types'
import {Avatar, IconButton, ListItem, ListItemText} from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import PostsUser from '../Posts/PostsUser'

interface UserProps {
  user: IUser
}

function UserListItem({user}: UserProps) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={() => setOpen(!open)}>
            <ArrowForwardIosIcon/>
          </IconButton>
        }>
        <Avatar>
          <AccountBoxIcon/>
        </Avatar>
        <ListItemText
          sx={{px: 3}}
          primary={user.name}
          secondary={`Username: ${user.username} - Email: ${user.email}`}
        />
      </ListItem>
      {open && <PostsUser id={user.id}/>}
    </>
  )

}

export default UserListItem
