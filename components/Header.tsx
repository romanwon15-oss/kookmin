
import React from 'react';

interface HeaderProps {
  onAdminClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAdminClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <span className="text-xl font-black text-gray-800 tracking-tight">국민나무병원</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
          <a href="#strengths" className="hover:text-green-600 transition-colors">강점</a>
          <a href="#services" className="hover:text-green-600 transition-colors">서비스</a>
          <a href="#process" className="hover:text-green-600 transition-colors">프로세스</a>
          <a href="#portfolio" className="hover:text-green-600 transition-colors">포트폴리오</a>
          <button 
            onClick={onAdminClick}
            className="px-4 py-2 bg-gray-100 text-gray-500 rounded-full hover:bg-gray-200 transition-colors"
          >
            관리자
          </button>
        </nav>

        <a 
          href="#consult" 
          className="bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-200"
        >
          무료 견적 상담
        </a>
      </div>
    </header>
  );
};

export default Header;
