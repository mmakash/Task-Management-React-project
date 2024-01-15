import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';
import TaskBoard from './Task/TaskBoard';


const App = () => {
  return (
    <div>
     <Header />
    <div className='flex flex-col justify-center items-center'>
    <HeroSection />  
     <TaskBoard />
    </div>
     <Footer />
    </div>
  );
};

export default App;