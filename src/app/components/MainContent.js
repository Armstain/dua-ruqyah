'use client'
import { IoBookmarkOutline, IoBulbOutline, IoCopyOutline, IoShareOutline } from "react-icons/io5";import { useState, useEffect, useRef } from 'react';
import { FaPlayCircle } from "react-icons/fa";
export default function DuaCard({ selectedSubcategory, selectedDua }) {
  const [filteredDuas, setFilteredDuas] = useState([]);
  const contentRef = useRef(null);

  useEffect(() => {
    if (selectedSubcategory) {
      fetch(`/api/duas?subcategoryId=${selectedSubcategory}`)
        .then(response => response.json())
        .then(data => {
          if (!data.error) {
            // Show all duas instead of filtering to just one
            setFilteredDuas(data);
          } else {
            console.error(data.error);
          }
        })
        .catch(error => console.error('Error fetching duas:', error));
    }
  }, [selectedSubcategory]);

  useEffect(() => {
    if (selectedDua && contentRef.current) {
      const element = document.getElementById(`dua-${selectedDua}`);
      if (element) {
        const container = contentRef.current;
        const elementPosition = element.offsetTop - container.offsetTop;
        
        container.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [selectedDua]);

  return (
    <div 
      ref={contentRef}
      className="bg-white rounded-xl shadow-sm p-6 max-w-2xl m-4 overflow-y-auto max-h-[calc(100vh-2rem)]"
    >
      {filteredDuas.map((dua) => (
        <div key={dua.id} id={`dua-${dua.id}`} className="mb-6">
          <h2 className="text-xl font-semibold text-green-600">{dua.dua_name_en}</h2>
          
          <div className=" text-2xl text-gray-800p-6 rounded-lg mb-4">
            {dua.top_en}
          </div>
          <div className="arabic-text text-2xl text-gray-800p-6 rounded-lg mb-4">
            {dua.dua_arabic} 
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-700 mb-1">{dua.transliteration_en? "Transliteration:" : ""}</h4>
              <p className="text-gray-600">{dua.transliteration_en}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-1">{dua.translation_en? "Translation:" : ""}</h4>
              <p className="text-gray-600">{dua.translation_en}</p>
            </div>
            <div>
              <h4 className=" text-gray-700 font-bold mb-1">{dua.bottom_en? "Bottom:" : ""}</h4>
              <p className="text-gray-600">{dua.bottom_en}</p>
            </div>
            <div>
              <p className="text-green-600 font-bold ">Reference:</p>
                {dua.refference_en}
            </div>
          </div>
          <div className="flex items-center justify-between pt-4">
            
            <button className="text-gray-500 hover:text-primary transition-colors">
              <FaPlayCircle className="h-8 w-8 text-green-600" />
            </button>
            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-primary transition-colors">
                <IoCopyOutline className="h-8 w-8" />
              </button>
              <button className="text-gray-500 hover:text-primary transition-colors">
                <IoBookmarkOutline className="h-8 w-8" />
              </button>
              <button className="text-gray-500 hover:text-primary transition-colors">
                <IoBulbOutline className="h-8 w-8" />
              </button>
              <button className="text-gray-500 hover:text-primary transition-colors">
                <IoShareOutline className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

