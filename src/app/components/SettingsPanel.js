import { IoLanguageOutline, IoMoonOutline, IoSettingsOutline, IoTextOutline,    } from "react-icons/io5";

export default function Settings() {
  return (
    <div className="w-full bg-white border-l border-gray-200 p-6 m-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-6">Settings</h2>
      
      <div className="space-y-6">
        <div className=" pb-4 border border-gray-200 rounded-lg">
          <h3 className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3 bg-[#f7f8fa] rounded-lg  p-6">
            <IoLanguageOutline className="h-4 w-4" />
            Language Settings
          </h3>
          <div className="grid grid-cols-2 gap-2 p-6">
            <button className="px-4 py-2 bg-primary text-white rounded-lg">English</button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">বাংলা</button>
          </div>
        </div>

        <div className="p-2 bg-[#f7f8fa] rounded-lg">
          <h3 className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
            <IoSettingsOutline className="h-4 w-4" />
            General Settings
          </h3>
          
        </div>

        <div className="p-2 bg-[#f7f8fa] rounded-lg">
          <h3 className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
            <IoTextOutline className="h-4 w-4" />
            Font Settings
          </h3>
          {/* <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            Arabic Font Size
          </button> */}
        </div>

        <div className="p-2 bg-[#f7f8fa] rounded-lg">
          <h3 className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
            <IoMoonOutline className="h-4 w-4" />
            Appearance Settings
          </h3>
          {/* <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            Night Mode
          </button> */}
        </div>
      </div>
    </div>
  );
}