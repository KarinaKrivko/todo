import Weekday from "../WeekDay";
import ToDo from "../ToDo";
import s from './index.module.css';


function App() {
  return (
    <div className={s.mainPage}>
      <ToDo />
      <Weekday savedData={localStorage.getItem("tasks")} />
    </div>
  );
}

export default App;
