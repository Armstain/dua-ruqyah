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
    <div className='flex w-full min-h-screen'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <Header />
        <div className='flex flex-1 gap-4 p-4'>
          <CategorySidebar 
            onSubcategorySelect={setSelectedSubcategory} 
            onDuaSelect={setSelectedDua}
          />
          <DuaCard 
            className="flex-1"
            selectedSubcategory={selectedSubcategory}
            selectedDua={selectedDua} 
          />
          <Settings className="w-[320px] hidden xl:block" />
        </div>
      </div>
    </div>
  );
};

export default page;