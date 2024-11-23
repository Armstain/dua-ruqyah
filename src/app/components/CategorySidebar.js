'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IoMenuOutline, IoSearchOutline } from "react-icons/io5";
import icon from '../../../public/duaarrow.svg';


function CategorySidebar({ onSubcategorySelect, onDuaSelect }) {
  const [categoriesData, setCategoriesData] = useState({
    categories: [],
    subCategories: [],
    duas: []
  });
  const [expandedCategories, setExpandedCategories] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [duaTitles, setDuaTitles] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/categories');
        const data = await response.json();
        
        setCategoriesData({
          categories: data.categories,
          subCategories: data.subCategories,
          duas: data.duas || []
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  // Process the data to create a hierarchical structure
  const processedCategories = categoriesData.categories.map(category => {
    const categorySubcategories = categoriesData.subCategories.filter(
      sub => sub.cat_id === category.id
    );
    
    const categoryDuas = categoriesData.duas.filter(
      dua => dua.cat_id === category.id
    );

    return {
      ...category,
      subcategories: categorySubcategories,
      duas: categoryDuas.length,
    };
  });

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
    setSelectedCategory(categoryId);
  };

  const handleSubcategoryClick = async (subcategoryId) => {
    setSelectedSubcategory(subcategoryId);
    onSubcategorySelect(subcategoryId);
    
    try {
      const response = await fetch(`/api/duas?subcategoryId=${subcategoryId}`);
      const data = await response.json();
      if (!data.error) {
        setDuaTitles(data);
      }
    } catch (error) {
      console.error('Error fetching duas:', error);
    }
  };

  return (
    <div className="w-[320px] min-w-[320px] bg-white border-r border-gray-200 rounded-2xl">
      <div className="flex items-center bg-primary justify-center p-4 rounded-t-lg">
        <h1 className="text-xl font-semibold text-white">Categories</h1>
       
      </div>
      
      <div className="relative mb-4 mt-4 mx-3">
        <input
          type="text"
          placeholder="Search Categories"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <IoSearchOutline className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4 overflow-y-auto max-h-screen">
        {processedCategories.map((category) => (
          <div 
            key={category.id} 
            className={`border border-gray-100 rounded-lg p-4 cursor-pointer ${
              selectedCategory === category.id ? 'bg-gray-100' : ''
            }`}
            onClick={() => toggleCategory(category.id)}
          >
            <div className="flex items-center justify-between mb-2">
            {/* <img src={category.cat_icon} alt={category.cat_name_en} width={30} height={30} /> */}
            

              <h3 className="font-semibold">{category.cat_name_en}</h3>
              <div className='flex flex-col items-center gap-2'>
              <span className="text-sm text-gray-500">  Duas</span>
              <span className="text-sm text-gray-500">{category.no_of_dua}</span>
              </div>
            </div>
            <h3 className="text-sm text-gray-500"> Subcategories: {category.no_of_subcat}</h3>
            
            {expandedCategories.has(category.id) && (
              <div className="space-y-2 mt-2 pl-4 relative">
                {/* Vertical dotted line */}
                <div className="absolute left-2 top-2 bottom-2 border-l-2 border-dotted border-green-300" />
                
                {category.subcategories.map((sub) => (
                  <div key={sub.id}>
                    <div
                      className="relative flex items-center text-sm p-2 rounded-lg hover:bg-green-50 cursor-pointer text-gray-600"
                      onClick={(e) => {
                        e.stopPropagation(); // Stop event from bubbling up to parent
                        handleSubcategoryClick(sub.id);
                      }}
                    >
                      {/* Bullet point */}
                      <div className="absolute -left-4 w-4 h-4 flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                      </div>
                      <span className="ml-4">{sub.subcat_name_en}</span>
                    </div>
                    
                    {/* Show dua titles when this subcategory is selected */}
                    {selectedSubcategory === sub.id && duaTitles.length > 0 && (
                      <div className="ml-2 mt-2">
                        {duaTitles.map((dua) => (
                          <div
                            key={dua.id}
                            className="text-sm text-gray-600 p-2 hover:bg-green-50 rounded-lg cursor-pointer flex items-center gap-2"
                            onClick={(e) => {
                              e.stopPropagation();
                              onDuaSelect(dua.id);
                            }}
                          >
                            <Image src={icon} alt="Icon" width={20} height={20} />
                            {dua.dua_name_en}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySidebar;
