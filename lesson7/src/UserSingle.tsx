import React from 'react'
import {IUser} from './Types'

interface UserProps{
  user: IUser
}

function UserSingle({user}: UserProps ) {
  return (
    <div className="card my-2">
      <div className="card-header">
        <strong>Name</strong>: {user.name}
      </div>
      <div className="card-body">
        <strong>Username</strong>: {user.username} - <strong>Email</strong>: {user.email}
      </div>
    </div>
  )

}

export default UserSingle
