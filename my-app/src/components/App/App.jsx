import Weekday from "../WeekDay";
import ToDo from "../ToDo";

function App() {
  return (
    <div>
      <ToDo />
      <Weekday savedData={localStorage.getItem("tasks")} />
    </div>
  );
}

export default App;
