import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

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

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
  }

  const [tasks, setTasks] = useState(data);
  return (
    <div className="container">
      <Header title='Task Tracker App' />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No tasks to display"}
    </div>
  );
}

export default App;
