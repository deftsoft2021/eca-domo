'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../styles/sidebar.css";

export default function Sidebar({
  collapsed,
//   setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [openAdmin, setOpenAdmin] = useState(false);
  const [openPartner, setOpenPartner] = useState(false);
  const [openReport, setOpenReport] = useState(false);
  const router = useRouter();

  return (
    <aside className={`sidebar${collapsed ? " collapsed" : ""}`}>
      {/* LOGO */}
      <div className="sidebar-logo">
        {/* <button
          className="sidebar-toggle"
          onClick={() => setCollapsed((v) => !v)}
          aria-label="Toggle sidebar"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect x="4" y="6" width="16" height="2" rx="1" fill="#fff" />
            <rect x="4" y="11" width="16" height="2" rx="1" fill="#fff" />
            <rect x="4" y="16" width="16" height="2" rx="1" fill="#fff" />
          </svg>
        </button> */}
        <span className="sidebar-logo-svg">
          <Image src="/logo-sm.png" alt="Logo" width={56} height={56} />
        </span>
        {!collapsed && <span className="text-sm">Equipment Control Application</span>}
      </div>

      {/* MENU */}
      <nav className="sidebar-menu">
        <Link href="/dashboard" className="sidebar-item">
          <span className="sidebar-icon">
            {/* Dashboard icon */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" fill="currentColor"/>
            </svg>
          </span>
          {!collapsed && <span className="sidebar-text">แดชบอร์ด</span>}
        </Link>
        <Link href="/equipment-transfer/send" className="sidebar-item">
          <span className="sidebar-icon">
            {/* Delivery icon ใหม่: ใช้ไอคอนรถบรรทุก */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <rect x="1" y="7" width="15" height="10" rx="2" fill="currentColor"/>
              <rect x="16" y="11" width="5" height="6" rx="1" fill="currentColor"/>
              <circle cx="6" cy="19" r="2" fill="#fff"/>
              <circle cx="18" cy="19" r="2" fill="#fff"/>
              <rect x="3" y="9" width="11" height="6" rx="1" fill="#fff" opacity="0.15"/>
            </svg>
          </span>
          {!collapsed && <span className="sidebar-text" >จัดส่งอุปกรณ์</span>}
        </Link>
        <Link href="/transfer" className="sidebar-item">
          <span className="sidebar-icon">
            {/* Transfer icon */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M16 17l5-5-5-5v3H4v4h12v3z" fill="currentColor"/>
            </svg>
          </span>
          {!collapsed && <span className="sidebar-text">รับส่งอุปกรณ์</span>}
        </Link>
        <Link href="/eca-doc" className="sidebar-item">
          <span className="sidebar-icon">
            {/* Edit Document icon */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 000-1.42l-2.34-2.34a1.003 1.003 0 00-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" fill="currentColor"/>
            </svg>
          </span>
          {!collapsed && <span className="sidebar-text">แก้ไขเอกสาร ECA</span>}
        </Link>
        <Link href="/stock" className="sidebar-item">
          <span className="sidebar-icon">
            {/* Stock icon */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M3 3v18h18V3H3zm16 16H5V5h14v14z" fill="currentColor"/>
            </svg>
          </span>
          {!collapsed && <span className="sidebar-text">สต๊อกคงเหลือ</span>}
        </Link>
        <Link href="/stock-diff" className="sidebar-item">
          <span className="sidebar-icon">
            {/* Diff icon */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor"/>
            </svg>
          </span>
          {!collapsed && <span className="sidebar-text">จัดการผลต่างการนับ</span>}
        </Link>
        <Link href="/stock-approve" className="sidebar-item">
          <span className="sidebar-icon">
            {/* Approve icon */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
            </svg>
          </span>
          {!collapsed && <span className="sidebar-text">อนุมัติการปรับปรุงสต๊อก</span>}
        </Link>
        <Link href="/stock-status" className="sidebar-item">
          <span className="sidebar-icon">
            {/* Status icon */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </span>
          {!collapsed && <span className="sidebar-text">เปลี่ยนสถานะสต๊อก</span>}
        </Link>
        <Link href="/stock-count" className="sidebar-item">
          <span className="sidebar-icon">
            {/* Count icon */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor"/>
              <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">#</text>
            </svg>
          </span>
          {!collapsed && <span className="sidebar-text">นับสต๊อก</span>}
        </Link>
        <Link href="/ecd-export" className="sidebar-item">
          <span className="sidebar-icon">
            {/* Export icon */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M5 20h14v-2H5v2zm7-18l-5.5 5.5h4v6h3v-6h4L12 2z" fill="currentColor"/>
            </svg>
          </span>
          {!collapsed && <span className="sidebar-text">ส่งออก ECD</span>}
        </Link>
         {/* คู่ค้า */}
        <div>
          <button
            className="sidebar-item sidebar-toggle-sub"
            type="button"
            onClick={() => setOpenPartner((v) => !v)}
            aria-expanded={openPartner}
          >
            <span className="sidebar-icon">
              {/* Partner icon */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.08 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
              </svg>
            </span>
            {!collapsed && (
              <>
                <span className="sidebar-text">คู่ค้า</span>
                <span className="sidebar-caret">
                  {openPartner ? (
                    <svg width="16" height="16" viewBox="0 0 24 24"><path d="M8 10l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24"><path d="M10 8l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                  )}
                </span>
              </>
            )}
          </button>
          {!collapsed && openPartner && (
            <div className="sidebar-group sidebar-submenu">
              <Link href="/partner/receive" className="sidebar-subitem">
                <span className="sidebar-icon">
                  {/* Receive icon */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path d="M19 13v-2H7V8l-5 4 5 4v-3h12z" fill="currentColor"/>
                  </svg>
                </span>
                <span className="sidebar-text">รับโอนอุปกรณ์</span>
              </Link>
              <Link href="/partner/return" className="sidebar-subitem">
                <span className="sidebar-icon">
                  {/* Return icon */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
                <span className="sidebar-text">โอนคืนอุปกรณ์</span>
              </Link>
            </div>
          )}
        </div>
        {/* ผู้ดูแลระบบ */}
        <div>
          <button
            className="sidebar-item sidebar-toggle-sub"
            type="button"
            onClick={() => setOpenAdmin((v) => !v)}
            aria-expanded={openAdmin}
          >
            <span className="sidebar-icon">
              {/* Admin icon */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 8 1.34 8 4v4H4v-4c0-2.66 5.3-4 8-4zm0-2a4 4 0 100-8 4 4 0 000 8z" fill="currentColor"/>
              </svg>
            </span>
            {!collapsed && (
              <>
                <span className="sidebar-text">ผู้ดูแลระบบ</span>
                <span className="sidebar-caret">
                  {openAdmin ? (
                    <svg width="16" height="16" viewBox="0 0 24 24"><path d="M8 10l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24"><path d="M10 8l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                  )}
                </span>
              </>
            )}
          </button>
          {!collapsed && openAdmin && (
            <div className="sidebar-group sidebar-submenu">
              <Link href="/admin/user" className="sidebar-subitem">
                <span className="sidebar-icon">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 8 1.34 8 4v4H4v-4c0-2.66 5.3-4 8-4zm0-2a4 4 0 100-8 4 4 0 000 8z" fill="currentColor"/>
                    </svg>
                </span>
                <span className="sidebar-text">ผู้ใช้</span>
              </Link>
              <Link href="/admin/role" className="sidebar-subitem">
                <span className="sidebar-icon">
                  {/* Role icon */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" fill="currentColor"/>
                    <path d="M4 20v-2c0-2.21 3.58-4 8-4s8 1.79 8 4v2H4z" fill="currentColor"/>
                  </svg>
                </span>
                <span className="sidebar-text">บทบาท</span>
              </Link>
              <Link href="/admin/permission" className="sidebar-subitem">
                <span className="sidebar-icon">
                  {/* Permission icon */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor"/>
                    <path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="sidebar-text">สิทธิ์</span>
              </Link>
              <Link href="/admin/menu" className="sidebar-subitem">
                <span className="sidebar-icon">
                  {/* เมนู: การจัดการเมนู */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <rect x="4" y="6" width="16" height="2" rx="1" fill="currentColor"/>
                    <rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor"/>
                    <rect x="4" y="16" width="16" height="2" rx="1" fill="currentColor"/>
                  </svg>
                </span>
                <span className="sidebar-text">การจัดการเมนู</span>
              </Link>
              <Link href="/admin/parameter" className="sidebar-subitem">
                <span className="sidebar-icon">
                  {/* เมนู: การจัดการพารามิเตอร์ */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="sidebar-text">การจัดการพารามิเตอร์</span>
              </Link>
              <Link href="/admin/setting" className="sidebar-subitem">
                <span className="sidebar-icon">
                  {/* เมนู: การกำหนดค่าระบบ */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" fill="currentColor"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0 .33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15 8.6a1.65 1.65 0 0 0 1.82.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </span>
                <span className="sidebar-text">การกำหนดค่าระบบ</span>
              </Link>
              <Link href="/admin/business-unit" className="sidebar-subitem">
                <span className="sidebar-icon">
                  {/* เมนู: การจัดการหน่วยธุรกิจ */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <rect x="3" y="7" width="18" height="13" rx="2" fill="currentColor"/>
                    <rect x="7" y="3" width="10" height="4" rx="1" fill="#fff"/>
                  </svg>
                </span>
                <span className="sidebar-text">การจัดการหน่วยธุรกิจ</span>
              </Link>
              <Link href="/admin/goodtype" className="sidebar-subitem">
                <span className="sidebar-icon">
                  {/* เมนู: การจัดการข้อมูลดีซี */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <rect x="8" y="8" width="8" height="8" fill="currentColor"/>
                  </svg>
                </span>
                <span className="sidebar-text">การจัดการข้อมูลดีซี</span>
              </Link>
              <Link href="/admin/branch" className="sidebar-subitem">
                <span className="sidebar-icon">
                  {/* เมนู: การจัดการข้อมูลสาขา */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <rect x="4" y="10" width="16" height="10" rx="2" fill="currentColor"/>
                    <rect x="9" y="4" width="6" height="6" rx="1" fill="#fff"/>
                  </svg>
                </span>
                <span className="sidebar-text">การจัดการข้อมูลสาขา</span>
              </Link>
              <Link href="/admin/partner" className="sidebar-subitem">
                <span className="sidebar-icon">
                  {/* เมนู: การจัดการข้อมูลคู่ค้า */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <circle cx="8" cy="8" r="4" fill="currentColor"/>
                    <circle cx="16" cy="8" r="4" fill="currentColor"/>
                    <path d="M2 20v-2c0-2.21 3.58-4 8-4s8 1.79 8 4v2H2z" fill="currentColor"/>
                  </svg>
                </span>
                <span className="sidebar-text">การจัดการข้อมูลคู่ค้า</span>
              </Link>
              <Link href="/admin/supplier" className="sidebar-subitem">
                <span className="sidebar-icon">
                  {/* เมนู: การจัดการข้อมูลผู้จำหน่าย */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor"/>
                    <path d="M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="sidebar-text">การจัดการข้อมูลผู้จำหน่าย</span>
              </Link>
              <Link href="/admin/customer" className="sidebar-subitem">
                <span className="sidebar-icon">
                  {/* เมนู: การจัดการข้อมูลลูกค้า */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" fill="currentColor"/>
                    <path d="M4 20v-2c0-2.21 3.58-4 8-4s8 1.79 8 4v2H4z" fill="currentColor"/>
                    <rect x="16" y="16" width="4" height="4" rx="1" fill="#fff"/>
                  </svg>
                </span>
                <span className="sidebar-text">การจัดการข้อมูลลูกค้า</span>
              </Link>
              <Link href="/admin/equipment" className="sidebar-subitem">
                <span className="sidebar-icon">
                  {/* เมนู: จัดการข้อมูลอุปกรณ์ */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor"/>
                    <rect x="10" y="10" width="4" height="4" rx="1" fill="#fff"/>
                  </svg>
                </span>
                <span className="sidebar-text">จัดการข้อมูลอุปกรณ์</span>
              </Link>
              <Link href="/admin/condition" className="sidebar-subitem">
                <span className="sidebar-icon">
                  {/* เมนู: การจัดการเงื่อนไขค่าปรับ */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor"/>
                    <path d="M8 16h8M8 12h8M8 8h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="sidebar-text">การจัดการเงื่อนไขค่าปรับ</span>
              </Link>
              <Link href="/admin/display" className="sidebar-subitem">
                <span className="sidebar-icon">
                  {/* เมนู: ลำดับการแสดงอุปกรณ์ */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor"/>
                    <path d="M8 8h8M8 12h8M8 16h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="sidebar-text">ลำดับการแสดงอุปกรณ์</span>
              </Link>
              <Link href="/admin/threshold" className="sidebar-subitem">
                <span className="sidebar-icon">
                  {/* เมนู: กำหนดโควต้าต่ออุปกรณ์ */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <rect x="8" y="8" width="8" height="8" fill="currentColor"/>
                    <rect x="10" y="10" width="4" height="4" fill="#fff"/>
                  </svg>
                </span>
                <span className="sidebar-text">กำหนดโควต้าต่ออุปกรณ์</span>
              </Link>
              <Link href="/admin/location" className="sidebar-subitem">
                <span className="sidebar-icon">
                  {/* เมนู: โลเคชันนับสต๊อก */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="sidebar-text">โลเคชันนับสต๊อก</span>
              </Link>
            </div>
          )}
        </div>
       
        {/* ...เมนูอื่นๆ... */}
        <div>
          <button
            className="sidebar-item sidebar-toggle-sub"
            type="button"
            onClick={() => setOpenReport((v) => !v)}
            aria-expanded={openReport}
          >
            <span className="sidebar-icon">
              {/* Report icon */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 8h14v-2H7v2zm0-4h14v-2H7v2zm0-6v2h14V7H7z" fill="currentColor"/>
              </svg>
            </span>
            {!collapsed && (
              <>
                <span className="sidebar-text">รายงาน</span>
                <span className="sidebar-caret">
                  {openReport ? (
                    <svg width="16" height="16" viewBox="0 0 24 24"><path d="M8 10l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24"><path d="M10 8l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                  )}
                </span>
              </>
            )}
          </button>
          {!collapsed && openReport && (
            <div className="sidebar-group sidebar-submenu">
              <Link href="/report/manage" className="sidebar-subitem">
                <span className="sidebar-icon">
                  {/* Manage Report icon */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor"/>
                    <path d="M8 8h8M8 12h8M8 16h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="sidebar-text">จัดการข้อมูลรายงาน</span>
              </Link>
              <Link href="/report/download" className="sidebar-subitem">
                <span className="sidebar-icon">
                  {/* Download icon */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path d="M5 20h14v-2H5v2zm7-18v12m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="sidebar-text">ดาวน์โหลดรายงาน</span>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* FOOTER */}
      <div className="sidebar-footer">
        <Link href="/settings" className="sidebar-item">
          <span className="sidebar-icon">
            {/* Settings icon */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M19.14 12.94a1.5 1.5 0 000-1.88l2.03-1.58a.5.5 0 00.11-.65l-1.92-3.32a.5.5 0 00-.61-.23l-2.39.96a6.97 6.97 0 00-1.6-.93l-.36-2.53A.5.5 0 0014 2h-4a.5.5 0 00-.5.42l-.36 2.53a6.97 6.97 0 00-1.6.93l-2.39-.96a.5.5 0 00-.61.23l-1.92 3.32a.5.5 0 00.11.65l2.03 1.58a1.5 1.5 0 000 1.88l-2.03 1.58a.5.5 0 00-.11.65l1.92 3.32a.5.5 0 00.61.23l2.39-.96c.5.36 1.04.68 1.6.93l.36 2.53A.5.5 0 0010 22h4a.5.5 0 00.5-.42l.36-2.53c.56-.25 1.1-.57 1.6-.93l2.39.96a.5.5 0 00.61-.23l1.92-3.32a.5.5 0 00-.11-.65l-2.03-1.58zM12 15a3 3 0 110-6 3 3 0 010 6z" fill="currentColor"/>
            </svg>
          </span>
          {!collapsed && <span className="sidebar-text">ตั้งค่า</span>}
        </Link>
        <Link href="/profile" className="sidebar-item">
          <span className="sidebar-icon">
            {/* Profile icon */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" fill="currentColor"/>
              <path d="M4 20v-2c0-2.21 3.58-4 8-4s8 1.79 8 4v2H4z" fill="currentColor"/>
            </svg>
          </span>
          {!collapsed && <span className="sidebar-text">โปรไฟล์</span>}
        </Link>
        <button
          className="sidebar-item sidebar-logout"
          type="button"
          onClick={() => router.push("/login")}
        >
          <span className="sidebar-icon">
            {/* Logout icon */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M16 13v-2H7V8l-5 4 5 4v-3h9zm3-10H5c-1.1 0-2 .9-2 2v6h2V5h14v14H5v-6H3v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="currentColor"/>
            </svg>
          </span>
          {!collapsed && <span className="sidebar-text">ออกจากระบบ</span>}
        </button>
      </div>
    </aside>
  );
}