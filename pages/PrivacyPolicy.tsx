
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
        <div className="flex justify-between items-center mb-10 border-b pb-6">
          <h1 className="text-3xl font-black text-gray-900">개인정보 처리방침</h1>
          <Link to="/" className="text-green-600 font-bold hover:text-green-700 transition-colors">
            홈으로 돌아가기
          </Link>
        </div>
        
        <div className="prose prose-green max-w-none text-gray-700 leading-relaxed space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">국민나무병원 개인정보 처리방침</h2>
            <p>국민나무병원은(는) 이용자의 개인정보를 중요시하며, 「개인정보 보호법」 등 관련 법령을 준수하고 있습니다.</p>
          </section>

          <section>
            <p className="font-bold">제1조 (개인정보의 처리 목적 및 항목)</p>
            <p>회사는 학교 수목 소독 견적 상담 및 서비스 제공을 위해 최소한의 개인정보를 수집합니다.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>수집 목적:</strong> 서비스 상담, 견적서 발송, 소독 일정 조율, 서비스 결과 보고.</li>
              <li><strong>수집 항목:</strong> 성명(담당자), 소속 학교명, 연락처(휴대폰/전화번호), 이메일, 학교 주소.</li>
              <li><strong>수집 방법:</strong> 홈페이지 문의 폼, 전화, 이메일.</li>
            </ul>
          </section>

          <section>
            <p className="font-bold">제2조 (개인정보의 보유 및 이용기간)</p>
            <p>원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관련 법령에 의해 보존할 필요가 있는 경우 다음 기간 동안 보관합니다.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>상담 및 견적 문의: 상담 종료 후 1년 (단, 계약 체결 시 서비스 종료 시까지)</li>
              <li>계약, 대금결제 및 서비스 이행 기록: 5년 (전자상거래법 등 기준)</li>
            </ul>
          </section>

          <section>
            <p className="font-bold">제3조 (개인정보의 제3자 제공 및 위탁)</p>
            <p>회사는 이용자의 동의 없이 개인정보를 외부에 제공하지 않습니다.</p>
            <p>위탁 사항: 효율적인 서비스 운영을 위해 다음과 같이 업무를 위탁하고 있습니다.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>약제 및 물품 배송: CJ대한통운 등 국내 주요 택배사 (계약 체결 후 업체명 명시)</li>
            </ul>
          </section>

          <section>
            <p className="font-bold">제4조 (정보주체의 권리 및 행사방법)</p>
            <p>이용자는 언제든지 자신의 개인정보를 열람, 정정, 삭제, 처리 정지를 요구할 수 있습니다. 개인정보 보호책임자에게 서면 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.</p>
          </section>

          <section>
            <p className="font-bold">제5조 (쿠키의 운영 및 거부)</p>
            <p>회사는 이용자에게 맞춤화된 서비스를 제공하기 위해 '쿠키(cookie)'를 사용합니다. 이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으나, 이 경우 서비스 이용에 불편이 있을 수 있습니다.</p>
          </section>

          <section>
            <p className="font-bold">제6조 (개인정보의 파기)</p>
            <p>개인정보의 보유 기간이 경과하거나 처리 목적이 달성되면, 전자적 파일은 복구가 불가능한 방법으로 삭제하며 종이 문서는 파쇄 또는 소각합니다.</p>
          </section>

          <section>
            <p className="font-bold">제7조 (안전성 확보 조치)</p>
            <p>회사는 개인정보 보호를 위해 다음의 대책을 강구합니다.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>관리적 조치: 내부관리계획 수립 및 시행, 정기적 직원 교육.</li>
              <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접속기록 보관, 데이터 암호화.</li>
            </ul>
          </section>

          <section className="pt-10 border-t">
            <p className="font-bold text-gray-900">제8조 (개인정보 보호책임자)</p>
            <p>개인정보와 관련한 문의 및 불만 처리를 위해 아래와 같이 책임자를 지정하고 있습니다.</p>
            <div className="bg-gray-50 p-6 rounded-xl mt-4 space-y-2">
              <p><strong>성명:</strong> 전승민</p>
              <p><strong>연락처:</strong> 010-9706-0432</p>
              <p><strong>이메일:</strong> kmtreehospotal@daum.net</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
