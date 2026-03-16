
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10 space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-bold border border-green-100">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            나무 소독 전문가
          </div>
          <h1 className="text-4xl md:text-[56px] font-black md:leading-[59px] leading-tight text-gray-900">
            소중한 우리 학교<br />
            우리 집 정원을 위한<br />
            <span className="text-green-600 underline decoration-green-200 underline-offset-8">전문 수목 진단 솔루션</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-xl">
            치료보다 앞선 예방으로 당신의 소중한 나무를 지킵니다.<br />
            국민대 산림환경시스템학과 출신 수목전문가들이 <br className="hidden md:block" />
            과학적이고 체계적인 소독 및 진단 컨설팅을 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#consult" 
              className="px-8 py-4 bg-green-600 text-white rounded-xl text-lg font-bold hover:bg-green-700 transition-all text-center shadow-xl shadow-green-100 transform hover:-translate-y-1"
            >
              지금 바로 무료 견적 상담하기
            </a>
            <div className="flex items-center gap-4 px-6 py-4 bg-gray-50 rounded-xl">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <img 
                    key={i} 
                    src={`https://picsum.photos/seed/${i + 10}/40/40`} 
                    className="w-8 h-8 rounded-full border-2 border-white" 
                    alt="user" 
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-500">5,000+ 누적 상담 완료</span>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
           <iframe 
            src='https://my.spline.design/culturetree-kupIF8uoxQjDiVxbM4jikFo9/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            title="Kookmin Tree Hospital 3D Model"
            className="scale-110 pointer-events-none md:pointer-events-auto"
          ></iframe>
          <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold text-gray-400">
             © Kookmin Tree Hospital 3D Concept
          </div>
        </div>
      </div>
      
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-green-100/50 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
