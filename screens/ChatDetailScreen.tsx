import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useNaturalBack } from '../components/Shared';

const ChatDetailScreen: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const goBack = useNaturalBack();

  // Mock conversation data matching the screenshot
  const messages = [
    { 
        id: 1, 
        sender: 'partner', 
        type: 'text', 
        content: '안녕하세요, 청자 아직 구매 가능한가요?', 
        time: '오전 10:00' 
    },
    { 
        id: 2, 
        sender: 'me', 
        type: 'text', 
        content: '네, 가능합니다!', 
        time: '오전 10:05' 
    },
    { 
        id: 3, 
        sender: 'partner', 
        type: 'text', 
        content: '상세 사진 볼 수 있을까요?', 
        time: '오전 10:06' 
    },
    {
        id: 4,
        sender: 'me',
        type: 'image',
        content: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV5oPKxXm6XUa1vDbr210us0aVUhFtzpAyxk3r2gXt3u533vYXb5C_GlCTIArnBtDnuZzrHay4vytUL3awfDJtuntjUJk2zA1-qn9FtQzdBFsvvsU7-c_CmTJjAUg7P-cM4EIJyhr6VO2FIc76uo5IXKe34p0-HZrPQmv7onSwKEoQxCduoawxoXCMYxx1MIJqNtU7ErkCUtVSD1_HzLU5n7CtVqryxcFRapR5Nq04-CeuEWckCa92jLamN5XxZaAcop4b7It5JUYC',
        time: '오전 10:07'
    },
    { 
        id: 5, 
        sender: 'partner', 
        type: 'text', 
        content: '좋네요! 구매하겠습니다.', 
        time: '오전 10:08' 
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between p-4 bg-black border-b border-white/10">
        <button onClick={goBack} className="p-1 -ml-1 text-white">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold text-white absolute left-1/2 -translate-x-1/2">고려청자 사랑</h1>
        <div className="w-6"></div>
      </header>

      {/* Chat Area */}
      <div className="flex-grow overflow-y-auto p-4 space-y-6">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex w-full ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            
            {/* Partner Avatar */}
            {msg.sender === 'partner' && (
                <div className="mr-3 flex-shrink-0 mt-6">
                    <img
                        src="https://api.dicebear.com/9.x/avataaars/svg?seed=Christopher&backgroundColor=c0aede"
                        alt="Profile"
                        className="w-10 h-10 rounded-full bg-gray-700 object-cover"
                    />
                </div>
            )}

            <div className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'} max-w-[75%]`}>
                {/* Name Labels */}
                {msg.sender === 'partner' && <span className="text-sm text-gray-400 mb-1 ml-1">고려청자 사랑</span>}
                {msg.sender === 'me' && <span className="text-sm text-gray-400 mb-1 mr-1">나</span>}

                {/* Bubbles */}
                {msg.type === 'text' && (
                    <div className={`px-4 py-3 text-white text-[15px] leading-relaxed ${
                        msg.sender === 'me' 
                            ? 'bg-[#3A3A3A] rounded-2xl rounded-tr-none' 
                            : 'bg-[#3A3A3A] rounded-2xl rounded-tl-none'
                    }`}>
                        {msg.content}
                    </div>
                )}
                
                {/* Image Message */}
                {msg.type === 'image' && (
                    <div className="rounded-2xl overflow-hidden bg-[#3A3A3A] p-1">
                        <img src={msg.content} alt="Sent" className="w-full h-auto rounded-xl" />
                    </div>
                )}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-black flex items-center space-x-3 pb-safe">
        <button className="text-white p-2">
            <span className="material-symbols-outlined text-2xl">photo_camera</span>
        </button>
        <div className="flex-grow bg-[#2C2C2C] rounded-full flex items-center pl-5 pr-2 py-2">
            <input
                type="text"
                placeholder="메시지 입력"
                className="bg-transparent text-white text-base w-full focus:outline-none placeholder-gray-500"
            />
            <button className="ml-2 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-black flex-shrink-0 hover:bg-gray-500 transition-colors">
                <span className="material-symbols-outlined text-lg">arrow_upward</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ChatDetailScreen;