import {
  Form,
  Link,
  useActionData,
  useLoaderData,
} from "react-router-dom";

function Tasks() {
  const tasks = useLoaderData();
  const newTask = useActionData();

  return (
    <div>
      <h2>Tasks</h2>

      <Form method="post">
        <input
          type="text"
          name="title"
          placeholder="Enter task"
          required
        />

        <button type="submit">
          Add Task
        </button>
      </Form>

      {newTask && (
        <div>
          <h3>Task Created</h3>
          <p>{newTask.title}</p>
        </div>
      )}

      <hr />

      {tasks.slice(0, 10).map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>

          <p>
            Status:{" "}
            {task.completed ? "Completed" : "Pending"}
          </p>

          <Link to={`/tasks/${task.id}`}>
            View Details
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Tasks;