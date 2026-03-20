import React from 'react';
import './App.css'
import Registration from './components/Registration';
import StudentList from './components/StudentList';

function App() {
  const [showList, setShowList] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShowList(!showList)}>
        {showList ? "Go to Registration" : "View All Students"}
      </button>

      {showList ? <StudentList /> : <Registration />}
    </div>
  );
}
export default App
