import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseandTeachers from '../components/CourseandTeachers';
import Header from '../components/Header';

const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <CourseandTeachers></CourseandTeachers>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;