
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Strengths from './components/Strengths';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import ConsultationForm from './components/ConsultationForm';
import AdminPortal from './components/AdminPortal';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import { PortfolioItem } from './types';

const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'OO초등학교 수목 소독 완료',
    location: '서울시 송파구',
    description: '아이들의 건강을 위해 친환경 인증 약제를 사용하여 전체 소독을 실시하였습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800',
    category: 'school',
    date: '2024-03-15'
  },
  {
    id: '2',
    title: '강남구 전원주택 소나무 방제',
    location: '서울시 강남구',
    description: '명품 소나무의 병충해 예방을 위한 1:1 맞춤 처방 및 영양 공급을 진행했습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=800',
    category: 'home',
    date: '2024-03-10'
  }
];

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    const savedPortfolio = localStorage.getItem('kookmin_portfolio');
    if (savedPortfolio) {
      setPortfolioItems(JSON.parse(savedPortfolio));
    } else {
      setPortfolioItems(INITIAL_PORTFOLIO);
      localStorage.setItem('kookmin_portfolio', JSON.stringify(INITIAL_PORTFOLIO));
    }
  }, []);

  const handleUpdatePortfolio = (newItems: PortfolioItem[]) => {
    setPortfolioItems(newItems);
    localStorage.setItem('kookmin_portfolio', JSON.stringify(newItems));
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Header onAdminClick={() => setIsAdmin(true)} />
      
      <main>
        <Hero />
        <section id="strengths">
          <Strengths />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="process">
          <Process />
        </section>
        <section id="portfolio">
          <Portfolio items={portfolioItems} />
        </section>
        <section id="consult">
          <ConsultationForm />
        </section>
      </main>

      <Footer />
      <FloatingButtons />

      {isAdmin && (
        <AdminPortal 
          onClose={() => setIsAdmin(false)} 
          items={portfolioItems}
          onUpdate={handleUpdatePortfolio}
        />
      )}
    </div>
  );
};

export default App;
