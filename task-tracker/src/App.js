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

  const [tasks, setTasks] = useState(data);
  return (
    <div className="container">
      <Header title='Task Tracker App' />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
