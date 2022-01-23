import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import UserList from "./components/Users/UserList";
import { IUser } from "./Types";
import { Container } from "@mui/material";
import Navbar from "./ui/navbar";
import "./index.css";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handelSearch: React.ChangeEventHandler<HTMLInputElement> = (text) => {
    return setSearchText(text.target.value.toLowerCase());
  };

  const filteringData = users.filter((item) =>
    item.name.toLowerCase().includes(searchText)
  );

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Search searchText={searchText} onSearch={handelSearch} />
        <UserList users={filteringData} />
      </Container>
    </>
  );
}

export default App;
