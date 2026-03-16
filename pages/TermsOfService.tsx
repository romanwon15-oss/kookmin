
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
        <div className="flex justify-between items-center mb-10 border-b pb-6">
          <h1 className="text-3xl font-black text-gray-900">이용약관</h1>
          <Link to="/" className="text-green-600 font-bold hover:text-green-700 transition-colors">
            홈으로 돌아가기
          </Link>
        </div>
        
        <div className="prose prose-green max-w-none text-gray-700 leading-relaxed space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">국민나무병원 이용약관</h2>
            <p className="font-bold">제1조 (목적)</p>
            <p>본 약관은 국민나무병원(이하 "회사")이 운영하는 사이트에서 제공하는 수목 진단, 소독 및 관리 서비스(이하 "서비스")를 이용함에 있어 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.</p>
          </section>

          <section>
            <p className="font-bold">제2조 (정의)</p>
            <p>"서비스"란 회사가 이용자에게 제공하는 수목 상태 진단, 병해충 방제(소독), 수목 유지관리 및 이와 관련된 상담 업무 일체를 말합니다.</p>
            <p>"이용자"란 사이트에 접속하여 본 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</p>
          </section>

          <section>
            <p className="font-bold">제3조 (약관의 명시와 개정)</p>
            <p>회사는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률 등 관련 법을 준수하며, 이용자가 알기 쉽도록 사이트 초기 화면에 상호, 대표자 성명, 사업자번호 등을 게시합니다.</p>
          </section>

          <section>
            <p className="font-bold">제4조 (서비스의 제공 및 변경)</p>
            <p>회사는 다음과 같은 업무를 수행합니다.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>수목 방제 및 관리 서비스에 대한 정보 제공 및 견적 상담</li>
              <li>서비스 이용 계약의 체결 및 용역 수행</li>
              <li>기타 회사가 정하는 업무</li>
            </ul>
            <p>서비스 특약: 수목 소독 서비스는 약제의 효능 및 안전을 위해 우천, 강풍 등 기상 상황에 따라 일정이 변경될 수 있습니다. 이 경우 회사는 지체 없이 이용자에게 통지하고 일정을 재협의합니다.</p>
          </section>

          <section>
            <p className="font-bold">제5조 (서비스 신청 및 계약의 성립)</p>
            <p>이용자는 사이트 내 상담 신청 폼 또는 연락처를 통해 구매를 신청하며, 회사는 신청 내용에 허위가 없는 한 승낙합니다.</p>
            <p>계약은 회사의 견적서가 이용자에게 도달하거나, 이용자가 서비스 대금을 결제(또는 예약금 입금)한 시점에 성립된 것으로 봅니다.</p>
          </section>

          <section>
            <p className="font-bold">제6조 (지급방법)</p>
            <p>대금지급은 계좌이체, 신용카드 결제, 온라인 무통장 입금 등 가용한 방법으로 할 수 있습니다.</p>
          </section>

          <section>
            <p className="font-bold">제7조 (서비스의 이행 및 취소)</p>
            <p>회사는 이용자와 약정한 시점에 서비스를 제공합니다. 단, 학교 측의 출입 통제나 행정 절차 지연 등 이용자의 책임 있는 사유로 서비스가 지연된 경우 회사는 책임을 지지 않습니다.</p>
            <p>청약철회(취소) 규정: 용역 서비스 특성상 인력 배치 및 약제 준비가 완료된 이후의 취소는 다음과 같이 제한됩니다.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>작업 7일 전 취소: 전액 환불</li>
              <li>작업 6~3일 전 취소: 총 금액의 20% 위약금 공제 후 환불</li>
              <li>작업 1~2일 전 취소: 총 금액의 50% 위약금 공제 후 환불</li>
              <li>당일 취소 또는 현장 진입 불가 시: 환불 불가 (단, 상호 합의 시 일정 변경 가능)</li>
            </ul>
          </section>

          <section>
            <p className="font-bold">제8조 (개인정보보호)</p>
            <p>회사는 이용자의 개인정보 수집 시 구매계약 이행에 필요한 최소한의 정보를 수집하며, 상세한 사항은 별도의 '개인정보 처리방침'에 따릅니다.</p>
          </section>

          <section>
            <p className="font-bold">제9조 (회사의 의무)</p>
            <p>회사는 법령과 본 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며, 지속적이고 안정적으로 서비스를 제공하는 데 최선을 다합니다.</p>
            <p>회사는 작업 중 학교 시설물이나 인명에 피해가 가지 않도록 관련 안전 수칙을 준수하며, 작업 전후 안내를 철저히 합니다.</p>
          </section>

          <section>
            <p className="font-bold">제10조 (이용자의 의무)</p>
            <p>이용자는 다음 행위를 하여서는 안 됩니다.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>신청 또는 변경 시 허위 내용의 등록</li>
              <li>타인의 정보 도용 및 사이트 정보 무단 변경</li>
              <li>작업 현장에서의 안전 관리 방해 또는 무단 침입</li>
            </ul>
          </section>

          <section>
            <p className="font-bold">제11조 (저작권의 귀속 및 이용제한)</p>
            <p>회사가 작성한 수목 진단 보고서, 소독 결과 리포트 등 저작물에 대한 저작권은 회사에 귀속됩니다. 이용자는 이를 영리 목적으로 제3자에게 배포할 수 없습니다.</p>
          </section>

          <section>
            <p className="font-bold">제12조 (분쟁해결 및 재판권)</p>
            <p>회사는 이용자가 제기하는 정당한 의견이나 불만을 우선적으로 처리합니다.</p>
            <p>회사와 이용자 간에 발생한 분쟁에 관한 소송은 회사의 소재지를 관할하는 법원을 관할법원으로 합니다.</p>
          </section>

          <section className="pt-10 border-t">
            <p className="font-bold text-gray-900">부칙</p>
            <p>본 약관은 2026 3월 15일부터 시행합니다.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
