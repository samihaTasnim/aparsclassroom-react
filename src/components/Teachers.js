import React from 'react';

const Teachers = () => {
  return (
    <div>
      <p className='text-center p-8 md:px-24 md:pt-12 md:pb-24 text-2xl font-semibold'>টিচার প্যানেল</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-16 px-8 md:px-24'>
        <div className='bg-gray-100 rounded-lg flex justify-center drop-shadow-xl'>
          <div>
            <img src={require('../pictures/Numeri-Sattar-Apar.jpg')} alt="Apar (CEO)" className='h-60 p-10' />
            <p className='text-center'>Numeri Sattar Apar</p>
            <p className='text-center'>CEO, ACS group</p>
            <p className='text-center'>Civil Engineering , BUET</p>
            <br />
          </div>
        </div>
        <div className='bg-gray-100 rounded-lg flex justify-center drop-shadow-xl'>
          <div>
            <img src={require('../pictures/Avi-dada.jpg')} alt="Avi dada" className='h-60 p-10' />
            <p className='text-center'>Abhi Datta Tushar</p>
            <p className='text-center'>CEO, ACS group</p>
            <p className='text-center'>Mechanical Engineering , BUET</p>
            <br />
          </div>
        </div>
        <div className='bg-gray-100 rounded-lg flex justify-center drop-shadow-xl'>
          <div>
            <img src={require('../pictures/Sanjay-dada.png')} alt="Sanjay dada" className='h-60 p-10' />
            <p className='text-center'>Sanjoy Chakraborty</p>
            <p className='text-center'>CEO, ACS group</p>
            <p className='text-center'>Mechanical Engineering , BUET</p>
            <br />
          </div>
        </div>
        <div className='bg-gray-100 rounded-lg flex justify-center drop-shadow-xl'>
          <div>
            <img src={require('../pictures/Kazi-Rakibul-Hasan.png')} alt="Rakibul vaiya" className='h-60 p-10' />
            <p className='text-center'>Kazi Rakibul Hasan</p>
            <p className='text-center'>Math instructor</p>
            <p className='text-center'>Computer Science and Engineering , BUET</p>
            <br />
          </div>
        </div>
        <div className='bg-gray-100 rounded-lg flex justify-center drop-shadow-xl'>
          <div>
            <img src={require('../pictures/nazmus-sakib.jpg')} alt="Sakib vaiya" className='h-60 p-10' />
            <p className='text-center'>Md Nazmus Sakib</p>
            <p className='text-center'>CEO, ACS Group</p>
            <p className='text-center'>Chemistry Dept. Dhaka University</p>
            <br />
          </div>
        </div>
        <div className='bg-gray-100 rounded-lg flex justify-center drop-shadow-xl'>
          <div>
            <img src={require('../pictures/apurbo.jpg')} alt="Apurbo dada" className='h-60 p-10' />
            <p className='text-center'>Apurbo Opu </p>
            <p className='text-center'>Physics instructor</p>
            <p className='text-center'>BUET</p>
            <br />
          </div>
        </div>
        <div className='bg-gray-100 rounded-lg flex justify-center drop-shadow-xl'>
          <div>
            <img src={require('../pictures/shajeeb.png')} alt="Dr. Tofael Ahmed Shajeeb" className='h-60 p-10' />
            <p className='text-center'>Dr. Tofael Ahmed Shajeeb</p>
            <p className='text-center'>Biology instructor</p>
            <p className='text-center'>Dhaka Medical College</p>
            <br />
          </div>
        </div>
        <div className='bg-gray-100 rounded-lg flex justify-center drop-shadow-xl'>
          <div>
            <img src={require('../pictures/hossain-emon.jpg')} alt="Emon vaiya" className='h-60 p-10' />
            <p className='text-center'>Sharoare Hossain Emon</p>
            <p className='text-center'>Physics instructor</p>
            <p className='text-center'>Biomedical Engineering, BUET</p>
            <br />
          </div>
        </div>
        <div className='bg-gray-100 rounded-lg flex justify-center drop-shadow-xl'>
          <div>
            <img src={require('../pictures/shuvro.png')} alt="Hasnat Shuvro" className='h-60 p-10' />
            <p className='text-center'>Hasnat Shuvro</p>
            <p className='text-center'>Biology instructor</p>
            <p className='text-center'>Shaheed Suhrawardy Medical College</p>
            <br />
          </div>
        </div>
        <div className='bg-gray-100 rounded-lg flex justify-center drop-shadow-xl'>
          <div>
            <img src={require('../pictures/abida-parvin-apu.jpg')} alt="Abida apu (Instructor)" className='h-60 p-10' />
            <p className='text-center'>Abida Purvin Chowdhury</p>
            <p className='text-center'>Bangla instructor</p>
            <p className='text-center'>Dhaka University</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;