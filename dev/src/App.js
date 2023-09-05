import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import harvard from './images/harvard.jpg';
import js from './images/js.png';
import free from './images/free.jpg';
import rea from './images/react.png';




function App() {
  const [courseData, setCourseData] = useState([])

  useEffect(() => {
    const updatedCourseData = [
      {
        number: '01',
        title: 'Introduction to Programming',
        description: '...',
        content: [
          {
            link: 'https://www.edx.org/plp/introduction-computer-science-harvardx-cs50x...',
            imageSrc: harvard
          }
        ]
      },
      {
        number: '02',
        title: 'Web Development Basics',
        description: '...',
        content: [
          {
            link: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
            imageSrc: free
          },
          {
            link: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
            imageSrc: free
          }
        ]
      },
      {
        number: '03',
        title: 'First Programming Language',
        description: '...',
        content: [
          {
            link: 'https://www.edx.org/plp/introduction-computer-science-harvardx-cs50x...',
            imageSrc: js
          }
        ]
      },
      {
        number: '04',
        title: 'Frameworks',
        description: '...',
        content: [
          {
            link: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
            imageSrc: rea
          }
        ]
      }
    ];
    
setCourseData(updatedCourseData)
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
