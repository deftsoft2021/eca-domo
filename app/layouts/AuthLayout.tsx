import Image from 'next/image';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50">
      {/* SVG Background */}
      <Image
        src="/blurry-gradient.svg"
        alt=""
        fill
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        aria-hidden="true"
        priority
      />
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-lg p-8 z-10">
        {children}
      </div>
    </div>
  );
}