import React, {useEffect, useState} from 'react'
import Search from './Search'
import UserList from './UserList'
import {IUser} from './Types'


function App() {
  const [users, setUsers] = useState<IUser[]>([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const handelSearch = (text: React.ChangeEvent<HTMLInputElement>) => {
    return setSearchText(text.target.value.toLowerCase())
  }

  const filteringData = users.filter(item => item.name.toLowerCase().includes(searchText))

  return (
    <div>
      <Search searchText={searchText} onSearch={handelSearch}/>
      <UserList users={filteringData}/>
    </div>
  )
}

export default App;
