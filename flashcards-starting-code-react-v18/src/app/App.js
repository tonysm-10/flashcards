import React from "react";
import { Provider } from "react-redux"; // Import the Provider
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NewQuizForm from "../components/NewQuizForm";
import NewTopicForm from "../components/NewTopicForm";
import Topics from "../features/topics/Topics";
import Topic from "../features/topics/Topic";
import Quiz from "../features/quizzes/Quiz";
import Quizzes from "../features/quizzes/Quizzes";
import AppLayout from "./AppLayout";
import store from "./store"; // Import your Redux store

export default function App() {
  return (
    <Provider store={store}> {/* Wrap your entire app with the Provider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="topics" element={<Topics />} />
            <Route path="topics/new" element={<NewTopicForm />} />
            <Route path="topics/:topicId" element={<Topic />} />
            <Route path="quizzes" element={<Quizzes />} />
            <Route path="quizzes/new" element={<NewQuizForm />} />
            <Route path="quizzes/:quizId" element={<Quiz />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
