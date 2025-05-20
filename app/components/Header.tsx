"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
  collapsed: boolean;
}) {
    const [switchOn, setSwitchOn] = useState(false);
    // font name 
    const fontName = switchOn ?  "Sarabun,Roboto ขนาด 15pt":  "Prompt ขนาด 15pt";
    const handleSwitchChange = () => {
        // Toggle font class on body
         document.body.classList.toggle("sarabun");
        setSwitchOn((v) => !v);
    };
  return (
    <header className="h-16 bg-white shadow flex items-center px-6 justify-between">
      {/* ซ้าย: Hamburger + Logo */}
      <div className="flex items-center gap-4">
        <button
          className="text-primary focus:outline-none cursor-pointer"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          {/* Hamburger icon */}
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect x="4" y="6" width="16" height="2" rx="1" fill="#1976d2" />
            <rect x="4" y="11" width="16" height="2" rx="1" fill="#1976d2" />
            <rect x="4" y="16" width="16" height="2" rx="1" fill="#1976d2" />
          </svg>
        </button>
        <Image
          src="/logo-cpextra-sm.png"
          alt="CPAXTRA"
          width={120}
          height={32}
        />
      </div>
      {/* ขวา: DC, User, Email */}
      <div className="flex items-center gap-6">
        {/* Language Switch */}
        <div>
          ฟอนต์: {fontName}
        </div>
        {/* Font Switch */}
        <label className="switch">
          <input
            type="checkbox"
            checked={switchOn}
            onChange={() => handleSwitchChange()}
          />
          <span className="slider"></span>
        </label>

        {/* DC Profile */}
        <div className="text-right mr-2">
          <div className="font-bold text-primary leading-tight">WNDC</div>
          <div className="text-xs text-blue-500 leading-tight">902</div>
        </div>
        {/* User Avatar */}
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-200 flex items-center justify-center bg-gray-100">
          {/* ใช้ SVG avatar ตัวอย่าง */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#e0e7ef" />
            <circle cx="20" cy="16" r="7" fill="#b3c6e0" />
            <ellipse cx="20" cy="30" rx="10" ry="6" fill="#b3c6e0" />
          </svg>
        </div>
        {/* User Info */}
        <div className="text-right ml-2">
          <div className="font-bold text-primary text-sm leading-tight">
            user@lotus.com
          </div>
          <div className="text-xs text-gray-400 leading-tight">
            Administrator
          </div>
        </div>
      </div>
    </header>
  );
}
