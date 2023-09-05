const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = 2000;
app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));

const courseData = [
    {
        number: '01',
        title: 'Introduction to Programming',
        description: 'This introductory course by Harvard will teach you the bascis and provide you with a starting point for the rest of your coding journey!',
        link: 'https://www.edx.org/plp/introduction-computer-science-harvardx-cs50x?utm_source=google&utm_campaign=19315581336&utm_medium=cpc&utm_term=cs50&hsa_acc=7245054034&hsa_cam=19315581336&hsa_grp=144242542723&hsa_ad=671177474143&hsa_src=g&hsa_tgt=kwd-296840910&hsa_kw=cs50&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwusunBhCYARIsAFBsUP8cwaHfo0DWEIii5xgqqbSZN-2jPNUtmA_Qemwc7QVrUCs86r-bSM4aAqFHEALw_wcB',
        imageSrc: '/images/harvard-logo-transparent.jpg'
      },
      {
        number: '02',
        title: 'The Basics',
        description: ' introductory course by Harvard will teach you the bascis and provide you with a starting point for the rest of your coding journey!',
        link: 'https://www.edx.org/plp/introduction-computer-science-harvardx-cs50x?utm_source=google&utm_campaign=19315581336&utm_medium=cpc&utm_term=cs50&hsa_acc=7245054034&hsa_cam=19315581336&hsa_grp=144242542723&hsa_ad=671177474143&hsa_src=g&hsa_tgt=kwd-296840910&hsa_kw=cs50&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwusunBhCYARIsAFBsUP8cwaHfo0DWEIii5xgqqbSZN-2jPNUtmA_Qemwc7QVrUCs86r-bSM4aAqFHEALw_wcB',
        imageSrc: '/images/js.png'
      }
];

app.get('/courses', (req, res) => {
    res.json(courseData);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
