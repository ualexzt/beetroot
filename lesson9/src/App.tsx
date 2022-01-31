import React from "react";
import Header from "./ui/Header";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import StudentList from "./components/Student/StudentList";
import PostsStudents from "./components/Posts/PostsStudents";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="students" element={<StudentList />} />
        <Route path="students/posts/:id" element={<PostsStudents />} />
      </Routes>
    </>
  );
}

export default App;
