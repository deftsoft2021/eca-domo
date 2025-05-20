export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="max-w-lg w-full p-8 bg-white rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-primary mb-4 font-prompt">ECA Web System</h1>
        <p className="text-muted mb-6 font-prompt">
          ระบบบริหารจัดการอุปกรณ์ ECA
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/login" className="btn btn-primary w-full sm:w-auto">
            เข้าสู่ระบบ
          </a>
          <a href="/info" className="btn btn-outline w-full sm:w-auto">
            ดูตัวอย่าง Components
          </a>
        </div>
      </div>
    </div>
  );
}