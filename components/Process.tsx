
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { number: '01', title: '문의 접수', desc: '온라인 폼 또는 전화 상담을 통해 방문 일정을 조율합니다.' },
    { number: '02', title: '현장 진단', desc: '전문가가 직접 방문하여 수목의 건강 상태 및 병충해를 점검합니다.' },
    { number: '03', title: '맞춤 처방', desc: '진단 결과를 토대로 최적의 소독 범위와 전용 약제를 결정합니다.' },
    { number: '04', title: '정밀 소독', desc: '고성능 전문 장비를 사용하여 구석구석 정밀 방역을 실시합니다.' },
    { number: '05', title: '관리 리포트', desc: '작업 내용 정리와 함께 향후 관리법에 대한 안내서를 제공합니다.' },
  ];

  return (
    <div className="py-24 bg-gray-50/80">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">작업 프로세스</h2>
          <p className="text-gray-500 font-medium">체계적이고 투명한 과정으로 믿음을 드립니다.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 relative">
          {/* Connector Line (visible on large screens) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-green-200 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white border-2 border-green-500 rounded-3xl flex items-center justify-center text-2xl font-black text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-all shadow-xl shadow-green-100">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed px-2">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
