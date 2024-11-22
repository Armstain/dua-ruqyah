import { IoSearchOutline, IoPersonOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Duas Page</h1>
        
        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by Dua Name"
              className="w-80 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <IoSearchOutline className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-green-50 text-primary hover:bg-green-100 rounded-lg">
              English
            </button>
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <IoPersonOutline className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}