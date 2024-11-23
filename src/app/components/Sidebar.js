import { FaDonate } from "react-icons/fa";
import { IoBookmarkOutline, IoBookOutline, IoFlashlight, IoGridOutline, IoHomeOutline, IoLockClosedOutline, IoPeopleOutline } from "react-icons/io5";
import { BiSolidDonateHeart } from "react-icons/bi";

export default function Sidebar() {
  return (
    <div className="w-20 h-screen z-10 bg-white border-r border-gray-200 flex flex-col items-center py-6 space-y-8 m-4 rounded-2xl mx-4">
      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
        <span className="text-white text-2xl">🤲</span>
      </div>
      
      <nav className="flex flex-col space-y-6 p-4 py-10">
        <a href="#" className="sidebar-icon active-link bg-accent rounded-full p-3">
          <IoHomeOutline className="h-6 w-6" />
        </a>
        <a href="#" className="sidebar-icon p-3 bg-accent rounded-full">
          <IoGridOutline className="h-6 w-6" />
        </a>
        <a href="#" className="sidebar-icon p-3 bg-accent rounded-full">
          <IoFlashlight className="h-6 w-6" />
        </a>
        <a href="#" className="sidebar-icon p-3 bg-accent rounded-full">
          <IoBookmarkOutline className="h-6 w-6" />
        </a>
        <a href="#" className="sidebar-icon p-3 bg-accent rounded-full">
          <IoLockClosedOutline className="h-6 w-6" />
        </a>
        <a href="#" className="sidebar-icon p-3 bg-accent rounded-full">
          <IoPeopleOutline className="h-6 w-6" />
        </a>
        <a href="#" className="sidebar-icon p-3 bg-accent rounded-full">
          <IoBookOutline className="h-6 w-6" />
        </a>
      </nav>
      <div className="w-full h-12 bg-primary rounded-xl flex items-center justify-center mx-4">
        <span className="text-white text-2xl"><BiSolidDonateHeart /></span>
      </div>
    </div>
  );
}