
import React, { useState } from 'react';
import { PortfolioItem } from '../types';

interface AdminPortalProps {
  onClose: () => void;
  items: PortfolioItem[];
  onUpdate: (items: PortfolioItem[]) => void;
}

const AdminPortal: React.FC<AdminPortalProps> = ({ onClose, items, onUpdate }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editingItem, setEditingItem] = useState<Partial<PortfolioItem> | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1111') {
      setIsAuthenticated(true);
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  const handleSave = () => {
    if (!editingItem) return;
    
    let newItems;
    if (editingItem.id) {
      newItems = items.map(item => item.id === editingItem.id ? { ...item, ...editingItem } as PortfolioItem : item);
    } else {
      const newItem = { ...editingItem, id: Date.now().toString(), date: new Date().toISOString().split('T')[0] } as PortfolioItem;
      newItems = [...items, newItem];
    }
    onUpdate(newItems);
    setEditingItem(null);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      onUpdate(items.filter(item => item.id !== id));
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur flex items-center justify-center p-4">
        <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-sm w-full text-center">
          <h3 className="text-2xl font-black text-gray-900 mb-6">관리자 로그인</h3>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              autoFocus
              type="password" 
              placeholder="비밀번호 입력 (1111)" 
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none text-center text-lg tracking-widest"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button className="w-full py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all">
              입장하기
            </button>
            <button type="button" onClick={onClose} className="text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors">닫기</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto">
      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-black text-gray-900">포트폴리오 관리자</h2>
          <div className="flex gap-4">
            <button 
              onClick={() => setEditingItem({ category: 'school', imageUrl: 'https://picsum.photos/800/600', title: '', description: '', location: '' })}
              className="px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-100"
            >
              새 사례 등록
            </button>
            <button onClick={onClose} className="px-6 py-3 bg-gray-100 text-gray-600 rounded-xl font-bold hover:bg-gray-200 transition-all">나가기</button>
          </div>
        </div>

        <div className="grid gap-6">
          {items.map(item => (
            <div key={item.id} className="bg-white border border-gray-200 p-6 rounded-2xl flex gap-6 items-center group">
              <img src={item.imageUrl} className="w-24 h-24 rounded-xl object-cover" alt="" />
              <div className="flex-1">
                <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">{item.category}</span>
                <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-400 font-medium">{item.location} | {item.date}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setEditingItem(item)} className="p-3 bg-gray-50 text-gray-600 rounded-xl hover:bg-green-50 hover:text-green-600 transition-all">수정</button>
                <button onClick={() => handleDelete(item.id)} className="p-3 bg-gray-50 text-gray-600 rounded-xl hover:bg-red-50 hover:text-red-600 transition-all">삭제</button>
              </div>
            </div>
          ))}
        </div>

        {editingItem && (
          <div className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
              <h3 className="text-2xl font-black text-gray-900 mb-6">{editingItem.id ? '사례 수정' : '새 사례 등록'}</h3>
              <div className="space-y-4">
                <input 
                  placeholder="제목" 
                  className="w-full px-5 py-3 bg-gray-50 border rounded-xl"
                  value={editingItem.title}
                  onChange={e => setEditingItem({...editingItem, title: e.target.value})}
                />
                <input 
                  placeholder="위치" 
                  className="w-full px-5 py-3 bg-gray-50 border rounded-xl"
                  value={editingItem.location}
                  onChange={e => setEditingItem({...editingItem, location: e.target.value})}
                />
                <textarea 
                  placeholder="상세 설명" 
                  className="w-full px-5 py-3 bg-gray-50 border rounded-xl"
                  rows={4}
                  value={editingItem.description}
                  onChange={e => setEditingItem({...editingItem, description: e.target.value})}
                />
                <select 
                  className="w-full px-5 py-3 bg-gray-50 border rounded-xl"
                  value={editingItem.category}
                  onChange={e => setEditingItem({...editingItem, category: e.target.value as any})}
                >
                  <option value="school">학교/기관</option>
                  <option value="home">개인주택</option>
                </select>
                <input 
                  placeholder="이미지 URL" 
                  className="w-full px-5 py-3 bg-gray-50 border rounded-xl"
                  value={editingItem.imageUrl}
                  onChange={e => setEditingItem({...editingItem, imageUrl: e.target.value})}
                />
                <div className="flex gap-4 pt-4">
                  <button onClick={handleSave} className="flex-1 py-4 bg-green-600 text-white rounded-xl font-bold">저장하기</button>
                  <button onClick={() => setEditingItem(null)} className="flex-1 py-4 bg-gray-100 text-gray-600 rounded-xl font-bold">취소</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPortal;
