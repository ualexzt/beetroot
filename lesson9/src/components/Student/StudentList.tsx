import React, { useEffect, useState } from "react";
import StudentItem from "./StudentItem";
import { Container, List, Typography } from "@mui/material";
import { IUser } from "../../types/User";

function StudentList() {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" sx={{ mt: 2 }}>
        Students list:
      </Typography>
      <List>
        {users.map((item) => (
          <StudentItem key={item.id} user={item} />
        ))}
      </List>
    </Container>
  );
}

export default StudentList;
