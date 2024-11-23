'use client'
import React, { useState } from 'react';
import CategorySidebar from './components/CategorySidebar';
import DuaCard from './components/MainContent';
import Settings from './components/SettingsPanel';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const page = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedDua, setSelectedDua] = useState(null);

  return (
    <div className='flex w-full'>
      <Sidebar className='h-screen' />
      <div className='flex-1 flex flex-col'>
        <Header />
        <div className='flex flex-1'>
          <CategorySidebar 
            onSubcategorySelect={setSelectedSubcategory} 
            onDuaSelect={setSelectedDua}
          />
          <DuaCard 
            selectedSubcategory={selectedSubcategory}
            selectedDua={selectedDua} 
          />
          <Settings className="max-w-[100px] hidden xl:block" />
        </div>
      </div>
    </div>
  );
};

export default page;