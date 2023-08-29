import React from 'react'
import Navbar from '../components/Navbar'
import Teachers from '../components/Teachers';
import Footer from '../components/Footer';


const About = () => {
  return (
    <div className=''>
      <Navbar></Navbar>
      <p className='text-center text-2xl font-semibold mt-12'>শুধু অনলাইনে ক্লাস করেও যে সকল বিষয়ে A+ , ভালো বিশ্ববিদ্যালয়, মেডিকেলে চান্স পাওয়া যায় তা বাস্তবায়নই আমাদের মূল উদ্দেশ্য।</p>
      <br />
      <p className='text-center text-lg font-medium'> More than 500K+ students in Bangladesh are learning and developing their skills using this online education platform.</p>
      <br />
      <br />
      <Teachers></Teachers>
      <Footer></Footer>
    </div>
  );
};

export default About;