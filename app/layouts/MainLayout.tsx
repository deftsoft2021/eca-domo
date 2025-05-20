import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="flex-1 flex flex-col h-screen min-h-0">
      <Header
        onToggleSidebar={() => setCollapsed((v) => !v)}
        collapsed={collapsed}
      />
      <main className="flex-1 p-6 min-h-0 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}