import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between text-white p-6">
      <img 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover -z-10" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGAsoJ1jbNarMf8vC58zh6VwpBQuKJgKW9igIuR4zAKJM9MeI8ATJk3OKHdghkPK-RtUVqwi6w3mS2l7NY_p1OdrX1TcqbZdbJFBwyFE3Q9V66bHegCLaChKIYSEDCpwBVGWtYbDTNCa4zWt8MdFi9HcQr_LkiWuSlaTsCTDzKSr_UVlBQJ7gmbehWw7OyD5xW6lDn2hkQjuLndZtc-ce75Se-HHLj5A1kDh3Em9ZZM8E7MwiFE1k-Wwtrv-TzCz66lqTBkuV-FZCW" 
      />
      <div className="absolute inset-0 bg-black/60 -z-10 backdrop-blur-[2px]"></div>

      <div className="flex-grow flex flex-col items-center justify-center text-center w-full max-w-xs">
        <div className="w-16 h-16 mb-6 border-2 border-white flex items-center justify-center">
            <span className="text-3xl font-serif">Z</span>
        </div>
        <h1 className="text-4xl font-bold tracking-[0.2em] text-white mb-2">MU:ZEUM</h1>
        <p className="text-white/80 text-xs mb-12">특별한 것들만 모이는 손안의 작은 박물관</p>

        <div className="w-full space-y-4">
          <input 
            type="text" 
            placeholder="사용자 이름 또는 이메일" 
            className="w-full bg-white/10 text-white placeholder-white/50 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white/50 backdrop-blur-sm"
          />
          <input 
            type="password" 
            placeholder="비밀번호" 
            className="w-full bg-white/10 text-white placeholder-white/50 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white/50 backdrop-blur-sm"
          />
        </div>

        <button 
          onClick={() => navigate('/home')}
          className="w-full bg-white text-black font-bold py-3.5 rounded-lg mt-8 hover:bg-gray-100 transition-colors"
        >
          로그인
        </button>

        <div className="flex justify-center space-x-6 text-sm text-white/70 mt-6">
          <button className="hover:text-white">회원가입</button>
          <span className="h-4 border-l border-white/30"></span>
          <button className="hover:text-white">비밀번호 찾기</button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;