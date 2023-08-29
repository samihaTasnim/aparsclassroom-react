import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <NavBar></NavBar>
      <br />
      <br />
      <div className="p-12 lg:py-16 mx-auto max-w-screen-md bg-gray-200 shadow-xl rounded-lg">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-700 sm:text-xl">কোর্স সম্পর্কিত যেকোনো তথ্য বা জিজ্ঞাসা করতে পার।</p>
        <form action="#" className="space-y-8">
          <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900">তোমার E-mail</label>
            <input type="email" id="email" className="shadow-sm border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 bg-gray-600 " placeholder="name@gmail.com" required/>
          </div>
          <div>
            <label for="subject" className="block mb-2 text-sm font-medium text-gray-900">বিষয়</label>
            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-600 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 ">বিস্তারিত লিখ</label>
            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-600 rounded-lg shadow-sm border border-gray-300 focus:ring-gray-500 focus:border-gray-500 " placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm text-white font-medium text-center rounded-lg sm:w-fit bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 hover:bg-gray-700">Send message</button>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contact;    