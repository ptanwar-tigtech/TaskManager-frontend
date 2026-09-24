import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Task Manager</h1>

      <nav>
        <Link to="/tasks">Tasks</Link>
        {" | "}
        <Link to="/profile">Profile</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Dashboard;