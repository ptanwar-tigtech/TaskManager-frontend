import Header from "./components/Header";
import TaskList from "./components/TaskList";
import BasicInput from "./components/InputTypes";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div>
      <Header />
      {/* <TaskList /> */}
      <RegistrationForm />
      <BasicInput/>
    </div>
  );
}

export default App;