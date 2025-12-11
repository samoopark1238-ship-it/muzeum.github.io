import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Custom hook for natural back navigation.
 * - If on a main tab (Wishlist, Messages, Profile, Zeum), go to Home.
 * - Otherwise, go back in history.
 * - Fallback to Home if history is effectively empty.
 */
export const useNaturalBack = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return () => {
    // List of "Hub" pages where back should lead to Home
    const hubs = ['/wishlist', '/messages', '/profile', '/zeum'];
    
    // If currently on a hub page, go Home
    if (hubs.includes(location.pathname)) {
      navigate('/home');
      return;
    }

    // Use React Router's location.key to detect if there is history
    // 'default' is the key for the initial entry.
    if (location.key !== 'default') {
        navigate(-1);
    } else {
        // Fallback for direct entry or empty history
        navigate('/home', { replace: true });
    }
  };
};

export const Header: React.FC<{ 
  title?: string; 
  leftIcon?: string; 
  onLeftClick?: () => void;
  rightElements?: React.ReactNode 
}> = ({ title, leftIcon = 'arrow_back_ios_new', onLeftClick, rightElements }) => {
  const naturalBack = useNaturalBack();

  const handleBack = () => {
    if (onLeftClick) {
      onLeftClick();
    } else {
      naturalBack();
    }
  };

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between p-4 bg-background/95 backdrop-blur-sm border-b border-border">
      <button onClick={handleBack} className="p-1 -ml-1 text-text">
        <span className="material-symbols-outlined">{leftIcon}</span>
      </button>
      {title && <h1 className="text-lg font-bold text-text absolute left-1/2 -translate-x-1/2">{title}</h1>}
      <div className="flex items-center space-x-2">
        {rightElements || <div className="w-6" />}
      </div>
    </header>
  );
};

export const BottomNav: React.FC<{ theme?: 'dark' | 'light' }> = ({ theme = 'dark' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
      if (path === '/home') return location.pathname === '/home' || location.pathname === '/zeum';
      return location.pathname === path;
  };

  const navBg = theme === 'light' ? 'bg-white border-gray-200' : 'bg-surface border-border';
  const itemColor = theme === 'light' ? 'text-gray-400' : 'text-text-secondary';
  const activeItemColor = theme === 'light' ? 'text-[#1A1E27]' : 'text-primary-muted';

  return (
    <nav className={`fixed bottom-0 left-0 right-0 max-w-md mx-auto border-t z-30 pb-safe ${navBg}`}>
      <div className="flex justify-around py-3">
        <NavItem 
          icon="search" 
          label="검색" 
          active={isActive('/filter')} 
          onClick={() => navigate('/filter')} 
          color={itemColor}
          activeColor={activeItemColor}
        />
        <NavItem 
          icon="favorite" 
          label="찜" 
          active={isActive('/wishlist')} 
          onClick={() => navigate('/wishlist')} 
          color={itemColor}
          activeColor={activeItemColor}
        />
        <NavItem 
          icon="home" 
          label="홈" 
          active={isActive('/home')} 
          onClick={() => navigate('/home')} 
          color={itemColor}
          activeColor={activeItemColor}
        />
        <NavItem 
          icon="chat_bubble" 
          label="메시지" 
          active={isActive('/messages')} 
          onClick={() => navigate('/messages')} 
          color={itemColor}
          activeColor={activeItemColor}
        />
        <NavItem 
          icon="person" 
          label="마이 메뉴" 
          active={isActive('/profile')} 
          onClick={() => navigate('/profile')} 
          color={itemColor}
          activeColor={activeItemColor}
        />
      </div>
    </nav>
  );
};

const NavItem: React.FC<{ 
    icon: string; 
    label: string; 
    active?: boolean; 
    onClick: () => void;
    color: string;
    activeColor: string;
}> = ({ icon, label, active, onClick, color, activeColor }) => (
  <button onClick={onClick} className={`flex flex-col items-center space-y-1 ${active ? activeColor : color}`}>
    <span className={`material-symbols-outlined ${active ? 'material-symbols-filled' : ''}`}>{icon}</span>
    <span className="text-[10px]">{label}</span>
  </button>
);

export const PrimaryButton: React.FC<{ 
  children: React.ReactNode; 
  onClick?: () => void; 
  className?: string 
}> = ({ children, onClick, className = '' }) => (
  <button 
    onClick={onClick}
    className={`w-full bg-primary text-background font-bold py-4 rounded-lg text-lg hover:brightness-110 transition-all ${className}`}
  >
    {children}
  </button>
);