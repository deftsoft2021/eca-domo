# Project Stucture

app/
  layout.tsx           // Global layout (เช่น ใส่ฟอนต์, theme)
  page.tsx             // หน้าแรก (/)
  login/
    page.tsx           // หน้า Login (/login)
  dashboard/
    page.tsx           // หน้า Dashboard (/dashboard)
  info/
    page.tsx           // หน้าแสดงตัวอย่าง Components (/info)
  auth/
    register/
      page.tsx         // หน้า Register (/auth/register)
    forgot/
      page.tsx         // หน้า Forgot Password (/auth/forgot)
  layouts/
    AuthLayout.tsx     // Layout สำหรับหน้า Auth (Login/Register)
    MainLayout.tsx     // Layout สำหรับระบบหลัก
  components/
    Header.tsx
    Sidebar.tsx
    ...                // Components อื่น ๆ
  styles/
    globals.css        // CSS หลัก
public/
  ...                  // รูปภาพ โลโก้ ฯลฯ
tailwind.config.js
package.json
...
