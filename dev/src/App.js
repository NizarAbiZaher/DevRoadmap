import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import harvard from './images/harvard.jpg';
import js from './images/js.png';
import free from './images/free.jpg';
import rea from './images/react.png';
import back from './images/mon.png'
import gi from './images/git.png';
import api from './images/api.png';
import soft from './images/soft.png';
import data from './images/yes.svg';
import Footer from './components/Footer';

function App() {
  const [courseData, setCourseData] = useState([])

  useEffect(() => {
    const updatedCourseData = [
      {
        number: '01',
        title: 'Introduction to Programming',
        description: 'Start your programming journey with the world renowned CS50 course by Harvard University.',
        content: [
          {
            link: 'https://www.edx.org/plp/introduction-computer-science-harvardx-cs50x?utm_source=google&utm_campaign=19315581336&utm_medium=cpc&utm_term=cs50&hsa_acc=7245054034&hsa_cam=19315581336&hsa_grp=144242542723&hsa_ad=671177474143&hsa_src=g&hsa_tgt=kwd-296840910&hsa_kw=cs50&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwusunBhCYARIsAFBsUP8cwaHfo0DWEIii5xgqqbSZN-2jPNUtmA_Qemwc7QVrUCs86r-bSM4aAqFHEALw_wcB',
            imageSrc: harvard
          }
        ],
        approxDuration: <p>Approx. Duration: 1 Month</p>,
      },
      {
        number: '02',
        title: 'Web Development Basics',
        description: 'Learn the basics of how the web works by using HTML CSS & JavaScript.',
        content: [
          {
            link: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
            imageSrc: free
          },
          {
            link: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
            imageSrc: js
          }
        ],
        approxDuration: <p>Approx. Duration: 2-3 Months</p>,
      },
      {
        number: '03',
        title: 'Frameworks',
        description: 'Explore the fundamentals of building dynamic web applications with React, a powerful JavaScript library for creating user interfaces.',
        content: [
          {
            link: 'https://fullstackopen.com/en/',
            imageSrc: rea
          }
        ],
        approxDuration: <p>Approx. Duration: 2 Months</p>,
      },
      {
        number: '04',
        title: 'Backend & APIs',
        description: 'Discover the core principles of server-side development by diving into backend technologies and APIs such as User Authentication, Databases, and much more.',
        content: [
          {
            link: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/',
            imageSrc: back
          },
          {
            link: 'https://youtu.be/WXsD0ZgxjRw?si=0Nlg3DYqjFxEbyHx',
            imageSrc: api
          }
        ],
        approxDuration: <p>Approx. Duration: 1 Month</p>,
      },
      {
        number: '05',
        title: "Finishing Touches",
        description: "Finish your learning journey with some industry standard skills such as Git & Software Design.",
        content: [
          {
            link: 'https://youtu.be/RGOj5yH7evk?si=TpjCQx09Td3VoPsT',
            imageSrc: gi,
          },
          {
            link: 'https://www.youtube.com/playlist?list=PL4JxLacgYgqTgS8qQPC17fM-NWMTr5GW6',
            imageSrc: soft
          },
          {
            link: 'https://www.youtube.com/watch?v=8hly31xKli0',
            imageSrc: data
          }
        ],
        approxDuration: <p>Approx. Duration: 1-2 Weeks</p>,
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
      <Footer />
    </div>
  );
}

export default App;
