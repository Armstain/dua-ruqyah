import { IoSearchOutline, IoPersonOutline, IoSettings, IoMenuOutline, IoGridOutline } from "react-icons/io5";

export default function Header({ onMenuClick, onCategoryClick }) {
  return (
    <header className="bg-background px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <IoMenuOutline className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-semibold">Duas Page</h1>
        </div>
        
        <div className="flex items-center gap-2 md:gap-6">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search by Dua Name"
              className="w-48 md:w-80 pl-4 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <IoSearchOutline className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <button 
            onClick={onCategoryClick}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <IoGridOutline className="h-6 w-6" />
          </button>
          
          <div className="flex items-center gap-2 md:gap-4">
            <button className="w-8 md:w-10 h-8 md:h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <IoPersonOutline className="h-5 w-5 text-gray-600" />
            </button>
            <button className="w-8 md:w-10 h-8 md:h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <IoSettings className="h-5 w-5 text-green-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}