'use client'
import React, { useState } from 'react';
import CategorySidebar from './components/CategorySidebar';
import DuaCard from './components/MainContent';
import Settings from './components/SettingsPanel';
import Sidebar from './components/Sidebar';

const page = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedDua, setSelectedDua] = useState(null);

  return (
    <div className='flex'>
      <Sidebar />
      <CategorySidebar 
        onSubcategorySelect={setSelectedSubcategory} 
        onDuaSelect={setSelectedDua}
      />
      <DuaCard 
        selectedSubcategory={selectedSubcategory}
        selectedDua={selectedDua} 
      />
      <Settings className="max-w-[100px]" />
    </div>
  );
};

export default page;