import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNav, useNaturalBack } from '../components/Shared';

const ProfileScreen: React.FC = () => {
  const navigate = useNavigate();
  const goBack = useNaturalBack();

  return (
    <div className="flex flex-col min-h-screen bg-background pb-24 text-text">
      {/* Custom Header to match design with Settings icon */}
      <div className="sticky top-0 z-20 flex items-center justify-between p-4 bg-background/95 backdrop-blur-sm">
        <button onClick={goBack} className="p-1 -ml-1 text-text">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <button className="p-1 -mr-1 text-text">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </div>

      <main className="px-4">
        {/* Profile Info */}
        <div className="flex items-center mb-8 mt-2">
          <div className="w-16 h-16 rounded-full bg-[#E0C183] flex items-center justify-center overflow-hidden mr-4">
             <img 
               src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix" 
               alt="Profile" 
               className="w-full h-full object-cover"
             />
          </div>
          <div>
            <h1 className="text-xl font-bold">OOO님 어서오세요.</h1>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-surface rounded-lg p-5 flex flex-col items-center justify-center text-center">
            <span className="text-xl font-bold mb-1">1,500P</span>
            <span className="text-xs text-text-secondary">적립금</span>
          </div>
          <div className="bg-surface rounded-lg p-5 flex flex-col items-center justify-center text-center">
            <span className="text-xl font-bold mb-1">12회</span>
            <span className="text-xs text-text-secondary">구매 횟수</span>
          </div>
        </div>

        {/* Quick Actions Title */}
        <div className="flex justify-between items-center mb-4 cursor-pointer">
          <h2 className="text-lg font-bold">맞춤 정보 관리</h2>
          <span className="material-symbols-outlined text-text-secondary text-sm">arrow_forward_ios</span>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <QuickActionBtn icon="mail" label="메시지" onClick={() => navigate('/messages')} />
          <QuickActionBtn icon="history" label="최근 본 상품" />
          <QuickActionBtn icon="favorite_border" label="찜한 상품" onClick={() => navigate('/wishlist')} />
          <QuickActionBtn icon="rate_review" label="후기 작성" />
        </div>

        <div className="h-[1px] bg-border mb-4"></div>

        {/* Menu List */}
        <div className="space-y-1">
          <MenuItem icon="person" label="개인정보" />
          <MenuItem icon="stars" label="멤버십" />
          <MenuItem icon="campaign" label="공지사항" />
          <MenuItem icon="headset_mic" label="고객센터" />
          <MenuItem icon="description" label="서비스 이용 약관" />
          <MenuItem icon="info" label="버전 정보" />
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

const QuickActionBtn: React.FC<{ icon: string; label: string; onClick?: () => void }> = ({ icon, label, onClick }) => (
  <button onClick={onClick} className="flex flex-col items-center space-y-2 group">
    <div className="w-14 h-14 bg-surface rounded-xl flex items-center justify-center group-active:bg-border transition-colors border border-border/30">
      <span className="material-symbols-outlined text-2xl text-text-secondary group-hover:text-text">{icon}</span>
    </div>
    <span className="text-xs text-text-secondary">{label}</span>
  </button>
);

const MenuItem: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <button className="w-full flex items-center justify-between p-4 hover:bg-surface/30 rounded-lg transition-colors group">
    <div className="flex items-center space-x-4">
      <span className="material-symbols-outlined text-text group-hover:text-primary-muted transition-colors">{icon}</span>
      <span className="text-base text-text/90 font-medium">{label}</span>
    </div>
    <span className="material-symbols-outlined text-text-secondary text-sm">arrow_forward_ios</span>
  </button>
);

export default ProfileScreen;