import React from 'react'
import UserListItem from './UserListItem'
import {IUser} from './Types'

interface UserListProps{
  users: IUser[]
}

function UserList({users}: UserListProps) {
  return (
    <div>
      <p className="h3">User list:</p>
      <div className="p-3">
        {users.map((item) => <UserListItem key={item.id} user={item}/>)}
      </div>
    </div>
  )

}

export default UserList
