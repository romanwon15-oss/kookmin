
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-gray-800">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <span className="text-xl font-black tracking-tight">국민나무병원</span>
            </div>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              "국민대학교 산림환경시스템학과를 졸업한 전문가들이 만드는 건강한 초록 세상"
            </p>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-green-500 mb-6">Navigation</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><a href="#strengths" className="hover:text-white transition-colors">전문 강점</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">주요 서비스</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">작업 프로세스</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">포트폴리오</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-green-500 mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li>대표번호: 010-9706-0432</li>
              <li>운영시간: 평일 09:00 - 18:00</li>
              <li>긴급상담: 주말/공휴일 가능</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-green-500 mb-6">Location</h4>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              서울시 송파구 문정로 13길 17<br />
              (국민나무병원 서울 센터)
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-gray-500">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="space-x-6">
              <span>상호명: 국민나무병원</span>
              <span>대표자명: 전승민</span>
              <span>사업자등록번호: 475-81-03724</span>
            </div>
            <div className="flex gap-4 underline underline-offset-4">
              <Link to="/terms" className="hover:text-white transition-colors">이용약관</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
              <Link to="/email-rejection" className="hover:text-white transition-colors">이메일 무단수집거부</Link>
            </div>
          </div>
          <p>© 2024 Kookmin Tree Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
