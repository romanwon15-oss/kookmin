
import React from 'react';

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3">
      {/* Phone Call Button */}
      <a 
        href="tel:01097060432"
        className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-700 transition-all hover:scale-110 active:scale-95 group"
      >
        <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      </a>

      {/* Kakao Button (Simulated) */}
      <a 
        href="https://open.kakao.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center shadow-2xl hover:bg-yellow-500 transition-all hover:scale-110 active:scale-95 group"
      >
        <span className="font-black text-xs leading-none">카톡<br/>상담</span>
      </a>

      {/* Floating Info */}
      <div className="hidden md:block absolute right-20 bottom-2 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 whitespace-nowrap animate-bounce">
         <p className="text-xs font-black text-gray-800">실시간 상담 가능합니다! ✨</p>
      </div>
    </div>
  );
};

export default FloatingButtons;
