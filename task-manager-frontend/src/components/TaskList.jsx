import { useEffect, useState } from "react";
import axios from "axios";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos")
      .then((response) => {
        setTasks(response.data.todos);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  return (
    <div className="task-container">
      <div className="task-header">
        <h2>My Tasks</h2>
        <span>{tasks.length} Tasks</span>
      </div>

      <div className="task-grid">
        {tasks.map((task) => (
          <article className="task-card" key={task.id}>
            <div className="task-top">
              <span className="task-id">#{task.id}</span>

              <span
                className={
                  task.completed
                    ? "status completed"
                    : "status pending"
                }
              >
                {task.completed ? "Completed" : "Pending"}
              </span>
            </div>

            <h3>{task.todo}</h3>
          </article>
        ))}
      </div>
    </div>
  );
}

export default TaskList;