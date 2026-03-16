
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const EmailRejection: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
        <div className="flex justify-between items-center mb-10 border-b pb-6">
          <h1 className="text-3xl font-black text-gray-900">이메일 무단수집거부</h1>
          <Link to="/" className="text-green-600 font-bold hover:text-green-700 transition-colors">
            홈으로 돌아가기
          </Link>
        </div>
        
        <div className="prose prose-green max-w-none text-gray-700 leading-relaxed space-y-8">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <p className="text-lg md:text-xl font-medium text-gray-800 text-center md:text-left">
              "본 사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를 위반 시 정보통신망법 제50조의 2, 제50조의 7 등에 의거하여 형사 처벌됨을 유념하시기 바랍니다."
            </p>
            <p className="mt-6 text-sm text-gray-500 text-right">
              (게시일 2026년 03월 15일)
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">관련 법령 안내</h2>
            
            <div className="space-y-4">
              <div>
                <p className="font-bold text-gray-900">정보통신망 이용촉진 및 정보보호 등에 관한 법률 제50조의 2 (전자우편주소의 무단 수집행위 등 금지)</p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-sm">
                  <li>누구든지 전자우편주소의 수집을 거부하는 의사가 명시된 인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램 그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니된다.</li>
                  <li>누구든지 제1항의 규정을 위반하여 수집된 전자우편주소를 판매·유통하여서는 아니된다.</li>
                  <li>누구든지 제1항 및 제2항의 규정에 의하여 수집·판매 및 유통이 금지된 전자우편주소임을 알고 이를 정보전송에 이용하여서는 아니된다.</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-gray-900">정보통신망 이용촉진 및 정보보호 등에 관한 법률 제50조의 7 (영리목적의 광고성 정보 게시의 제한 등)</p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-sm">
                  <li>누구든지 인터넷 홈페이지 운영자 또는 관리자의 명시적인 거부 의사에 반하여 영리목적의 광고성 정보를 인터넷 홈페이지에 게시하여서는 아니 된다.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailRejection;
