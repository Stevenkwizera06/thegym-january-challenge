import Wrapper from "../layout/wrapper";
import Image from "next/image";
import logo from "../../public/images/logo-black.svg";
import dezetnat from "../../public/images/Dezernat.jpeg";
import mail from "../../public/images/mail.svg";
import call from "../../public/images/phone.svg";
import alert from "../../public/images/alert.svg";
import profile from "../../public/images/profile.png"

function Contact() {
  return (
    <Wrapper>
    

       <div>
          <div className='max-w-[74rem] bg-white md:px-5 pt-20 px-24 mx-auto'>
            <h4 className='text-2xl font-bold'>Contact</h4>
            <div className='grid md:grid-cols-1 grid-cols-3 gap-6 mt-3 pb-20'>
              {[
                {
                  title: 'Dezernat Internationales',
                  img: 'https://www.beschaeftigte.uni-stuttgart.de/img-beschaeftigte/iz_mitarbeiter/Dezernat-Internationales-IZ.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:2000,ch:2000',
                  desc: [
                    {
                      text: 'Profile Page',
                      Image:alert
                    },
                    {
                      text: '+4971 7775674',
                      Image:alert
                    },
                    {
                      text: 'Write Email',
                      Image:alert
                    },
                    {
                      text: 'Office hours (online). d: Mon & Wed 10 a.m. to noon; Office hours (on site): Mon & Wed, 2 p.m. to 4 p.m. , Tue & Thur, 10 a.m. to noon',
                      Image:alert
                    },
                  ]
                },
                {
                  title: 'Student Counseling Center',
                  img: 'https://www.uni-stuttgart.de/studium/beratung/img-fachstudienberater/zsb_employee.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:620,ch:620',
                  desc: [
                    {
                      text: 'Profile Page',
                      Image:alert
                    },
                    {
                      text: '+4971 7775674',
                      Image:alert
                    }
                  ]
                },
                {
                  title: 'Student Service and Examination Office',
                  img: 'https://www.uni-stuttgart.de/studium/beratung/img-fachstudienberater/zsb_employee.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:620,ch:620',
                  desc: [
                    {
                      text: 'Pfaffenwaldring 5 c, 70569 Stuttgart, House of students',
                      Image:alert
                    },
                    , 3]
                }
              ].map((e, idx) => {
                return (
                  <div key={idx} className='border-2  border-black p-6 '>
                    <img className='rounded-full  m-auto' src={e.img} alt="" />
                    <h4 className='text-2xl mt-14  flex justify-start font-bold'>{e.title}</h4>
                    <div>
                      <div className='mt-2'>
                        {e.desc.map((e, idx) => {
                          return (
                            <div className='flex items-center underline hover:no-underline duration-300 cursor-pointer'>
                              <img src={e.Image} alt="" />
                              <p>{e.text}</p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
    </Wrapper>
  );
}

export default Contact;
