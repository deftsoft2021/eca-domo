'use client';
import { useRouter } from 'next/navigation';
import AuthLayout from '../layouts/AuthLayout';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // function showAlert() {
  //   Swal.fire({
  //     title: 'สำเร็จ!',
  //     text: 'เข้าสู่ระบบเรียบร้อย',
  //     icon: 'success',
  //     confirmButtonText: 'ไปที่แดชบอร์ด'
  //   }).then(() => {
  //     router.push('/dashboard');
  //   });
  // }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (username && password) {
      // showAlert();
       router.push('/dashboard');
    }
    // else: แสดง error ได้ตามต้องการ
  }

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">เข้าสู่ระบบ</h2>
      <form className="space-y-4" onSubmit={handleLogin}>
        <div>
          <label className="form-label required">Username</label>
          <input
            className="input w-full"
            type="text"
            placeholder="กรอกชื่อผู้ใช้"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label required">Password</label>
          <input
            className="input w-full"
            type="password"
            placeholder="กรอกรหัสผ่าน"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-full mt-2" type="submit">
          เข้าสู่ระบบ
        </button>
      </form>
      <div className="text-center mt-4">
        <a href="#" className="text-primary hover:underline text-sm">ลืมรหัสผ่าน?</a>
      </div>
      <div className="mt-6">
        <button
          className="btn btn-info w-full flex items-center justify-center gap-2"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" className="inline-block h-5 w-5" aria-hidden="true">
            <rect fill="#F35325" x="1" y="1" width="10" height="10" />
            <rect fill="#81BC06" x="13" y="1" width="10" height="10" />
            <rect fill="#05A6F0" x="1" y="13" width="10" height="10" />
            <rect fill="#FFBA08" x="13" y="13" width="10" height="10" />
          </svg>
          Login with Microsoft Entra
        </button>
      </div>
    </AuthLayout>
  );
}