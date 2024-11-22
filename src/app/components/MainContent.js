'use client'
import { IoBookmarkOutline, IoBulbOutline, IoCopyOutline, IoDocumentLockOutline, IoShareOutline } from "react-icons/io5";import { useState, useEffect } from 'react';

export default function DuaCard({ selectedSubcategory, selectedDua }) {
  const [filteredDuas, setFilteredDuas] = useState([]);

  useEffect(() => {
    if (selectedSubcategory) {
      fetch(`/api/duas?subcategoryId=${selectedSubcategory}`)
        .then(response => response.json())
        .then(data => {
          if (!data.error) {
            // If a dua is selected, only show that dua
            if (selectedDua) {
              const selectedDuaData = data.find(dua => dua.id === selectedDua);
              setFilteredDuas(selectedDuaData ? [selectedDuaData] : []);
            } else {
              setFilteredDuas(data);
            }
          } else {
            console.error(data.error);
          }
        })
        .catch(error => console.error('Error fetching duas:', error));
    }
  }, [selectedSubcategory, selectedDua]);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 max-w-3xl">
      {filteredDuas.map((dua) => (
        <div key={dua.id} className="mb-6">
          <h2 className="text-xl font-semibold text-green-600">{dua.dua_name_en}</h2>
          
          <div className=" text-2xl text-gray-800p-6 rounded-lg mb-4">
            {dua.top_en}
          </div>
          <div className="arabic-text text-2xl text-gray-800p-6 rounded-lg mb-4">
            {dua.dua_arabic} 
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-700 mb-1">Transliteration:</h4>
              <p className="text-gray-600">{dua.transliteration_en}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-1">Translation:</h4>
              <p className="text-gray-600">{dua.translation_en}</p>
            </div>
            
            <div>
              <p className="text-gray-600">{dua.reference_en}</p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-primary transition-colors">
                <IoCopyOutline className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-primary transition-colors">
                <IoBookmarkOutline className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-primary transition-colors">
                <IoBulbOutline className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-primary transition-colors">
                <IoShareOutline className="h-5 w-5" />
              </button>
            </div>
            <button className="text-gray-500 hover:text-primary transition-colors">
              <IoDocumentLockOutline className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

