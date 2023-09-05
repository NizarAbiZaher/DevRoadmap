import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import harvard from './images/harvard-logo-transparent.jpg'

const courseData = [
  {
    number: '01',
    title: 'Introduction to Programming',
    description: 'This introductory course by Harvard will teach you the bascis and provide you with a starting point for the rest of your coding journey!',
    link: 'https://www.edx.org/plp/introduction-computer-science-harvardx-cs50x?utm_source=google&utm_campaign=19315581336&utm_medium=cpc&utm_term=cs50&hsa_acc=7245054034&hsa_cam=19315581336&hsa_grp=144242542723&hsa_ad=671177474143&hsa_src=g&hsa_tgt=kwd-296840910&hsa_kw=cs50&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwusunBhCYARIsAFBsUP8cwaHfo0DWEIii5xgqqbSZN-2jPNUtmA_Qemwc7QVrUCs86r-bSM4aAqFHEALw_wcB',
    imageSrc: harvard
  },
  {
    number: '02',
    title: ' to Programming',
    description: ' introductory course by Harvard will teach you the bascis and provide you with a starting point for the rest of your coding journey!',
    link: 'https://www.edx.org/plp/introduction-computer-science-harvardx-cs50x?utm_source=google&utm_campaign=19315581336&utm_medium=cpc&utm_term=cs50&hsa_acc=7245054034&hsa_cam=19315581336&hsa_grp=144242542723&hsa_ad=671177474143&hsa_src=g&hsa_tgt=kwd-296840910&hsa_kw=cs50&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwusunBhCYARIsAFBsUP8cwaHfo0DWEIii5xgqqbSZN-2jPNUtmA_Qemwc7QVrUCs86r-bSM4aAqFHEALw_wcB',
    imageSrc: harvard
  },
]



function App() {
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
