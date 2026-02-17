
import React from 'react';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  items: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ items }) => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">실제 작업 사례</h2>
            <p className="text-gray-500 font-medium">수많은 학교와 주택의 수목을 건강하게 관리해 왔습니다.</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-bold hover:bg-green-50 hover:text-green-600 transition-colors">전체보기</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-bold hover:bg-green-50 hover:text-green-600 transition-colors">학교/기관</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-bold hover:bg-green-50 hover:text-green-600 transition-colors">개인주택</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white ${item.category === 'school' ? 'bg-green-500' : 'bg-gray-800'}`}>
                    {item.category === 'school' ? 'SCHOOL' : 'HOME'}
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                  {item.location}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                <div className="pt-4 border-t border-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Completed on {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
