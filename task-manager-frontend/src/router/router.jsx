import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import TaskDetails from "../pages/TaskDetails";
import Profile from "../pages/Profile";

const tasksLoader = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return response.json();
};

const taskDetailsLoader = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );

  if (!response.ok) {
    throw new Error("Task not found");
  }

  return response.json();
};

const tasksAction = async ({ request }) => {
  const formData = await request.formData();

  const title = formData.get("title");

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        completed: false,
        userId: 1,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create task");
  }

  const newTask = await response.json();

  return newTask;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "tasks",
        element: <Tasks />,
        loader: tasksLoader,
        action: tasksAction,
      },
      {
        path: "tasks/:id",
        element: <TaskDetails />,
        loader: taskDetailsLoader,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;