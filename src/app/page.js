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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div className='flex flex-col md:flex-row w-full min-h-screen font-inter'>
      <div className={`${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <Sidebar />
      </div>
      <div className='flex-1 flex flex-col'>
        <Header 
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
          onCategoryClick={() => setIsCategoryOpen(!isCategoryOpen)}
        />
        <div className='flex flex-col md:flex-row flex-1 gap-4 p-4'>
          <div className={`${isCategoryOpen ? 'block' : 'hidden'} md:block`}>
            <CategorySidebar 
              onSubcategorySelect={setSelectedSubcategory} 
              onDuaSelect={setSelectedDua}
            />
          </div>
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