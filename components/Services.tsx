
import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">주요 서비스</h2>
          <p className="text-gray-500 font-medium">고객님의 상황에 딱 맞는 솔루션을 선택하세요.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Service 1: Schools */}
          <div className="group bg-green-600 rounded-[2.5rem] p-12 text-white overflow-hidden relative shadow-2xl shadow-green-200">
            <div className="relative z-10 space-y-6">
              <span className="inline-block px-4 py-1.5 bg-green-500 rounded-full text-xs font-black uppercase tracking-widest">Institution</span>
              <h3 className="text-3xl font-black">[학교 / 공공기관 수목 소독]</h3>
              <ul className="space-y-4 text-green-50 font-medium">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 shrink-0 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>아이들의 건강을 생각한 최상급 친환경 인증 약제 사용</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 shrink-0 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>행정 서류(견적서, 이행 확인서, 보험 등) 완벽 지원</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 shrink-0 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>정기 소족 및 대규모 방제 장비 완비</span>
                </li>
              </ul>
              <a href="#consult" className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-white text-green-700 rounded-full font-bold hover:bg-green-50 transition-colors">
                상담 신청하기
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            {/* Visual background deco */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 h-64 bg-green-500 rounded-full opacity-30 blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
          </div>

          {/* Service 2: Private Homes */}
          <div className="group bg-gray-900 rounded-[2.5rem] p-12 text-white overflow-hidden relative shadow-2xl shadow-gray-200">
            <div className="relative z-10 space-y-6">
              <span className="inline-block px-4 py-1.5 bg-gray-800 rounded-full text-xs font-black uppercase tracking-widest">Residential</span>
              <h3 className="text-3xl font-black">[개인 주택 / 정원 관리]</h3>
              <ul className="space-y-4 text-gray-300 font-medium">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>소중한 조경수의 병충해 예방 및 영양 공급 솔루션</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>정원 상태에 따른 전문가의 1:1 정밀 맞춤 처방</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>지속적인 수목 생육 상태 추적 관리 서비스</span>
                </li>
              </ul>
              <a href="#consult" className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-colors">
                맞춤 견적 받기
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 h-64 bg-gray-800 rounded-full opacity-30 blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
