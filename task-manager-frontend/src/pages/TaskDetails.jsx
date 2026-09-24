import { useLoaderData } from "react-router-dom";

function TaskDetails() {
  const task = useLoaderData();

  return (
    <div>
      <h2>{task.title}</h2>

      <p>
        Status:{" "}
        {task.completed ? "Completed" : "Pending"}
      </p>
    </div>
  );
}

export default TaskDetails;