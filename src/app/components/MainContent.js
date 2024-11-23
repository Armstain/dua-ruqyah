'use client'
import { IoBookmarkOutline, IoBulbOutline, IoCopyOutline, IoShareOutline } from "react-icons/io5";import { useState, useEffect, useRef } from 'react';
import { FaPlayCircle } from "react-icons/fa";
import Image from 'next/image';
import icon from '../../../public/belief.svg';

export default function DuaCard({ selectedSubcategory, selectedSubcategoryName, selectedDua }) {
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
      className="flex-1 bg-background rounded-2xl shadow-sm overflow-y-auto max-h-[calc(100vh-7rem)] mx-4 font-inter"
    >
      <div className="text-xl bg-white p-4 font-semibold rounded-2xl mb-4">
        <span className="text-green-600">Section:</span> <span className="text-black-600">{selectedSubcategoryName}</span>
      </div>
      {filteredDuas.map((dua) => (
        <div key={dua.id} id={`dua-${dua.id}`} className="bg-white rounded-2xl p-4 shadow-sm mb-4">
          <div className="flex items-center gap-2">
          <Image src={icon} alt="Icon"  width={30} height={30} />
          <h2 className="text-xl font-semibold text-green-600">{dua.dua_id}.</h2>
          <h2 className="text-xl font-semibold text-green-600">{dua.dua_name_en}</h2>

          </div>
          
          <div className=" text-2xl text-black rounded-lg my-10">
            {dua.top_en}
          </div>
          <div className="arabic-text text-2xl text-blackrounded-lg mb-4">
            {dua.dua_arabic} 
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-black mb-1">{dua.transliteration_en? "Transliteration:" : ""}</h4>
              <p className="text-black italic">{dua.transliteration_en}</p>
            </div>
            <div>
              <h4 className="font-medium text-black mb-1">{dua.translation_en? "Translation:" : ""}</h4>
              <p className="text-gray-600">{dua.translation_en}</p>
            </div>
            <div>
              <h4 className=" text-black font-bold mb-1">{dua.bottom_en? "" : ""}</h4>
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

