import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar.tsx";
import Header from "./components/Header.tsx";

export default function EduQuestLayout() {
  return (
    <div className="flex h-screen bg-[#F5F6F8] font-sans overflow-hidden">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
