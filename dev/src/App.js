import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';


function App() {

  const [courseData, setCourseData] = useState([])

  useEffect(() => {
    fetch('http://localhost:2000/courses')
      .then(response => response.json())
      .then(data => setCourseData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        {courseData.map((course) => (
          <Main key={course.number} {...course} />
        ))}
      </div>
    </div>
  );
}

export default App;
