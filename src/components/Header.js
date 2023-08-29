import React from 'react';

const Header = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-12 md:grid-cols-2 p-8 mb-20 md:px-24 md:pt-12 md:pb-24 h-screen">
      <div className='flex items-center justify-center'>
        <section>
      <p className='text-center font-semibold text-2xl pb-8'>এবার অনলাইন ক্লাস হবে বেস্ট ইন্সট্রাক্টরদের সাথে </p>
      <p className='text-center font-medium text-xl'>একাডেমিক লাইফ থেকেই সেরা প্রস্তুতি নিতে এখনই যুক্ত হয়ে যাও আমাদের একাডেমিক সাইকেল এ </p>
      <br />
      <br />
      <div className='grid grid-cols-3 gap-8'>
      <button className='text-center font-medium bg-blue-400 p-2 rounded-xl'>HSC 23 - চলমান কোর্সগুলো ঘুরে দেখ</button>
      <button className='text-center font-medium bg-blue-400 p-2 rounded-xl'>HSC 24 - চলমান কোর্সগুলো ঘুরে দেখ</button>
      <button className='text-center font-medium bg-blue-400 p-2 rounded-xl'>HSC 25 - চলমান কোর্সগুলো ঘুরে দেখ</button>
      <button className='text-center font-medium bg-blue-400 p-2 rounded-xl'>SSC চলমান কোর্সগুলো ঘুরে দেখ</button>
      <button className='text-center font-medium bg-blue-400 p-4 rounded-xl'>চলমান কোর্সগুলো ঘুরে দেখ</button>
      </div>
        </section>
      </div>
      <div className='grid grid-cols-2 gap-0'>
      <img src={require('../pictures/physics-instructor-lineup.jpeg')} alt="logo" className=""/>
      <img src={require('../pictures/chemistry-instructor-lineup.jpeg')} alt="logo" className="md:mt-8 md:ml-4"/>
      <img src={require('../pictures/math-instructor-lineup.jpeg')} alt="logo" className=" md:-mt-8"/>
      <img src={require('../pictures/bio-instructor-lineup.jpeg')} alt="logo" className="md:ml-4"/>
    </div>
     
      <br />
    </div >
  );
};

export default Header;