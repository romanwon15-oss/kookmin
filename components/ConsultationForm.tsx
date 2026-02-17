
import React, { useState } from 'react';

const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'school',
    content: ''
  });
  const [photo, setPhoto] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    data.append('성함', formData.name);
    data.append('연락처', formData.phone);
    data.append('장소유형', formData.type);
    data.append('상담내용', formData.content);
    if (photo) {
      data.append('나무상태사진', photo);
    }

    try {
      const response = await fetch('https://formspree.io/f/mwvnbayk', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({ name: '', phone: '', type: 'school', content: '' });
        setPhoto(null);
        setTimeout(() => setIsSubmitted(false), 8000);
      } else {
        alert('상담 신청 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('서버와의 연결이 원활하지 않습니다. 네트워크 상태를 확인해 주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              나무 상태가 걱정되시나요? <br />
              <span className="text-green-600">지금 바로 상담받으세요.</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-green-100">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Support</p>
                  <p className="text-xl font-black text-gray-900 tracking-tight">010-9706-0432</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-green-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-16 -mt-16 -z-10"></div>
                <p className="text-lg font-bold text-gray-800 mb-2">📸 사진 한 장으로 받는 간편 진단</p>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  "아픈 나무 사진을 찍어 바로 올려주세요. 
                  전문가가 상태를 파악하여 24시간 이내에 진단 및 처방 견적을 전달해 드립니다."
                </p>
              </div>
              <p className="text-sm text-green-700 font-bold italic animate-pulse">
                * 현재 예약 상담이 많습니다. 신청을 남겨주시면 순차적으로 빠르게 연락드립니다.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-green-100 border border-white">
            {isSubmitted ? (
              <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900">상담 신청이 완료되었습니다!</h3>
                <p className="text-gray-500 font-medium">담당 전문가가 확인 후 신속하게 연락드리겠습니다.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-green-600 font-bold hover:underline"
                >
                  새로 신청하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">성함</label>
                    <input 
                      required 
                      type="text" 
                      name="name"
                      placeholder="예: 홍길동" 
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">연락처</label>
                    <input 
                      required 
                      type="tel" 
                      name="phone"
                      placeholder="예: 010-1234-5678" 
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">소독 대상 장소</label>
                  <select 
                    name="locationType"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none appearance-none transition-all"
                    value={formData.type}
                    onChange={e => setFormData({...formData, type: e.target.value})}
                  >
                    <option value="school">학교 / 공공기관</option>
                    <option value="home">개인 주택 / 정원</option>
                    <option value="etc">기타 단지</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">간단한 상담 내용</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    placeholder="나무의 종류나 증상 등 궁금한 내용을 적어주세요." 
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
                    value={formData.content}
                    onChange={e => setFormData({...formData, content: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">나무 상태 사진 첨부 (선택)</label>
                  <div className="relative">
                    <input 
                      type="file" 
                      name="upload"
                      accept="image/*" 
                      className="hidden" 
                      id="photo-upload" 
                      onChange={e => setPhoto(e.target.files?.[0] || null)}
                    />
                    <label 
                      htmlFor="photo-upload" 
                      className="flex items-center justify-center gap-3 w-full px-5 py-6 bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl cursor-pointer hover:bg-gray-100 transition-all text-gray-400"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-bold text-sm truncate max-w-[200px]">
                        {photo ? photo.name : '사진 업로드하여 간편 진단받기'}
                      </span>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-5 bg-green-600 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-green-100 transform active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-green-700'}`}
                >
                  {isSubmitting ? '신청 데이터를 전송 중입니다...' : '지금 무료 상담 신청하기'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
