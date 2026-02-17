
import React from 'react';

const Strengths: React.FC = () => {
  const strengths = [
    {
      title: "독보적인 전문성",
      desc: "국민대 산림환경시스템학과 졸업 전문가들이 직접 진단하고 처방하는 체계적인 시스템을 갖추고 있습니다.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "맞춤형 진단 및 소독",
      desc: "학교(대규모/안전 우선)와 개인 주택(디테일/프라이빗)에 최적화된 맞춤형 약제 및 전문 장비를 운용합니다.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.722 2.166a2 2 0 00.165 1.637l1.614 3.134a2 2 0 002.346.915l2.131-.426a2 2 0 001.334-1.232l.965-2.895a2 2 0 00-.464-1.99l-2.001-2.001z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "철저한 사후관리",
      desc: "소독 후 상태 모니터링 및 주기적인 관리 리포트를 제공하여 지속적인 수목 건강을 책임집니다.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 0-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    }
  ];

  return (
    <div className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">왜 '국민나무병원'이어야 할까요?</h2>
          <p className="text-gray-500 font-medium">검증된 실력과 정성으로 수목의 가치를 높입니다.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((item, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Strengths;
