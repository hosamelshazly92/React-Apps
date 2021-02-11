import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react';

function App() {
  const data = [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting',
        day: 'Jan 12th',
        reminder: true,
    },
    {
        id: 3,
        text: 'Shoppnig',
        day: 'Jan 12th',
        reminder: false,
    }
  ];

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const [tasks, setTasks] = useState(data);
  return (
    <div className="container">
      <Header title='Task Tracker App' />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : "No tasks to display"}
    </div>
  );
}

export default App;
