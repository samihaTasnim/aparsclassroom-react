import React from 'react';
import Teachers from './Teachers';

const CourseandTeachers = () => {
  return (
    <div className='' id="courses">
      <p className='text-center text-2xl font-semibold mt-12'>সকল চলমান কোর্স সমূহ</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 mb-20 md:px-24 md:pt-12 md:pb-24">
          <div className='p-4 md:p-8 rounded-2xl shadow-2xl'>
            <img src={require('../pictures/dummy.jpeg')} alt="logo" className=""/>
            <br />
            <p className='text-center font-medium'>SSC 23 Academic cycle</p>
            <br />
            <div className='flex flex-col items-center justify-center'>
            <button className='text-center font-medium bg-blue-400 p-2 rounded-xl'>কোর্স সম্পর্কে বিস্তারিত </button>
            </div>
          </div>
          <div className='p-4 md:p-8 rounded-2xl shadow-2xl'>
            <img src={require('../pictures/dummy.jpeg')} alt="logo" className=""/>
            <br />
            <p className='text-center font-medium'>SSC 23 Academic cycle</p>
            <br />
            <div className='flex flex-col items-center justify-center'>
            <button className='text-center font-medium bg-blue-400 p-2 rounded-xl'>কোর্স সম্পর্কে বিস্তারিত </button>
            </div>
          </div>
          <div className='p-4 md:p-8 rounded-2xl shadow-2xl'>
            <img src={require('../pictures/dummy.jpeg')} alt="logo" className=""/>
            <br />
            <p className='text-center font-medium'>SSC 23 Academic cycle</p>
            <br />
            <div className='flex flex-col items-center justify-center'>
            <button className='text-center font-medium bg-blue-400 p-2 rounded-xl'>কোর্স সম্পর্কে বিস্তারিত </button>
            </div>
          </div>
          <div className='p-4 md:p-8 rounded-2xl shadow-2xl'>
            <img src={require('../pictures/dummy.jpeg')} alt="logo" className=""/>
            <br />
            <p className='text-center font-medium'>SSC 23 Academic cycle</p>
            <br />
            <div className='flex flex-col items-center justify-center'>
            <button className='text-center font-medium bg-blue-400 p-2 rounded-xl'>কোর্স সম্পর্কে বিস্তারিত </button>
            </div>
          </div>
          <div className='p-4 md:p-8 rounded-2xl shadow-2xl'>
            <img src={require('../pictures/dummy.jpeg')} alt="logo" className=""/>
            <br />
            <p className='text-center font-medium'>SSC 23 Academic cycle</p>
            <br />
            <div className='flex flex-col items-center justify-center'>
            <button className='text-center font-medium bg-blue-400 p-2 rounded-xl'>কোর্স সম্পর্কে বিস্তারিত </button>
            </div>
          </div>
          <div className='p-4 md:p-8 rounded-2xl shadow-2xl'>
            <img src={require('../pictures/dummy.jpeg')} alt="logo" className=""/>
            <br />
            <p className='text-center font-medium'>SSC 23 Academic cycle</p>
            <br />
            <div className='flex flex-col items-center justify-center'>
            <button className='text-center font-medium bg-blue-400 p-2 rounded-xl'>কোর্স সম্পর্কে বিস্তারিত </button>
            </div>
          </div>
          <div className='p-4 md:p-8 rounded-2xl shadow-2xl'>
            <img src={require('../pictures/dummy.jpeg')} alt="logo" className=""/>
            <br />
            <p className='text-center font-medium'>SSC 23 Academic cycle</p>
            <br />
            <div className='flex flex-col items-center justify-center'>
            <button className='text-center font-medium bg-blue-400 p-2 rounded-xl'>কোর্স সম্পর্কে বিস্তারিত </button>
            </div>
          </div>
          <div className='p-4 md:p-8 rounded-2xl shadow-2xl'>
            <img src={require('../pictures/dummy.jpeg')} alt="logo" className=""/>
            <br />
            <p className='text-center font-medium'>SSC 23 Academic cycle</p>
            <br />
            <div className='flex flex-col items-center justify-center'>
            <button className='text-center font-medium bg-blue-400 p-2 rounded-xl'>কোর্স সম্পর্কে বিস্তারিত </button>
            </div>
          </div>
      </div>
      <Teachers></Teachers>
    </div >
  );
};

export default CourseandTeachers;