import { IoBookmarkOutline, IoBookOutline, IoFlashlight, IoGridOutline, IoHomeOutline, IoLockClosedOutline, IoPeopleOutline } from "react-icons/io5";

export default function Sidebar() {
  return (
    <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6 space-y-8">
      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
        <span className="text-white text-2xl">🤲</span>
      </div>
      
      <nav className="flex flex-col space-y-6">
        <a href="#" className="sidebar-icon active-link p-3">
          <IoHomeOutline className="h-6 w-6" />
        </a>
        <a href="#" className="sidebar-icon p-3">
          <IoGridOutline className="h-6 w-6" />
        </a>
        <a href="#" className="sidebar-icon p-3">
          <IoFlashlight className="h-6 w-6" />
        </a>
        <a href="#" className="sidebar-icon p-3">
          <IoBookmarkOutline className="h-6 w-6" />
        </a>
        <a href="#" className="sidebar-icon p-3">
          <IoLockClosedOutline className="h-6 w-6" />
        </a>
        <a href="#" className="sidebar-icon p-3">
          <IoPeopleOutline className="h-6 w-6" />
        </a>
        <a href="#" className="sidebar-icon p-3">
          <IoBookOutline className="h-6 w-6" />
        </a>
      </nav>
    </div>
  );
}