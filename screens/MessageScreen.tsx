import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNav, useNaturalBack } from '../components/Shared';

interface Message {
  id: number;
  name: string;
  content: string;
  time: string;
  avatar: string;
  unreadCount?: number;
  online?: boolean;
}

const messages: Message[] = [
  {
    id: 1,
    name: '빈티지 جامع',
    content: '안녕하세요! 문의하신 백자 달항아리 재고 있습...',
    time: '오후 2:30',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4',
    online: true,
  },
  {
    id: 2,
    name: '고려청자 사랑',
    content: '네고 가능한가요? 제가 학생이라서요...',
    time: '오전 11:54',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Christopher&backgroundColor=c0aede',
    unreadCount: 1,
  },
  {
    id: 3,
    name: '박물관굿즈콜렉터',
    content: '배송은 언제쯤 시작될까요?',
    time: '어제',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Jessica&backgroundColor=ffdfbf',
  },
  {
    id: 4,
    name: '사라진보물을찾아서',
    content: '확인했습니다. 감사합니다!',
    time: '2일 전',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah&backgroundColor=ffdfbf',
    online: true,
  },
  {
    id: 5,
    name: '왕관앵무',
    content: '사진을 보내주셨습니다.',
    time: '4월 18일',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Amaya&backgroundColor=ffdfbf',
  },
];

const MessageScreen: React.FC = () => {
  const navigate = useNavigate();
  const goBack = useNaturalBack();

  return (
    <div className="flex flex-col min-h-screen bg-background pb-24 relative">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between p-4 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <button onClick={goBack} className="p-1 -ml-1 text-text">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <div className="flex items-center space-x-1 cursor-pointer absolute left-1/2 -translate-x-1/2 group">
             <h1 className="text-lg font-bold text-text">메시지</h1>
             <span className="material-symbols-outlined text-xl text-text-secondary group-hover:text-text transition-colors">expand_more</span>
        </div>
        <div className="w-6" /> 
      </header>

      {/* Message List */}
      <main className="flex-col divide-y divide-border/30">
        {messages.map((msg) => (
            <div 
                key={msg.id} 
                className="flex items-center p-4 hover:bg-surface/50 transition-colors cursor-pointer"
                onClick={() => navigate(`/chat/${msg.id}`)}
            >
                {/* Avatar Area */}
                <div className="relative mr-4">
                    <img src={msg.avatar} alt={msg.name} className="w-14 h-14 rounded-full bg-surface object-cover" />
                    {msg.online && (
                        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#00C853] border-2 border-background rounded-full"></div>
                    )}
                </div>

                {/* Text Area */}
                <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-base font-bold text-text truncate pr-2">{msg.name}</h3>
                        <span className="text-xs text-text-secondary whitespace-nowrap">{msg.time}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className={`text-sm truncate pr-4 ${msg.unreadCount ? 'text-text font-medium' : 'text-text-secondary'}`}>
                            {msg.content}
                        </p>
                        {msg.unreadCount && (
                            <div className="min-w-[20px] h-5 px-1.5 flex items-center justify-center bg-[#FF3B30] rounded-full">
                                <span className="text-[10px] font-bold text-white">{msg.unreadCount}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        ))}
      </main>

      {/* FAB */}
      <button className="fixed bottom-24 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 transition-colors z-30">
        <span className="material-symbols-outlined text-black text-3xl font-medium">add</span>
      </button>

      <BottomNav />
    </div>
  );
};

export default MessageScreen;