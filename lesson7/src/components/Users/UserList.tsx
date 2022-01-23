import React from 'react'
import UserListItem from './UserListItem'
import {IUser} from '../../Types'
import {List, Typography} from '@mui/material'

interface UserListProps {
  users: IUser[]
}

function UserList({users}: UserListProps) {
  return (
    <div>
      <Typography variant="h3" sx={{mt: 2}}>User list:</Typography>
      <List>
        {users.map((item) => <UserListItem key={item.id} user={item}/>)}
      </List>
    </div>
  )

}

export default UserList
