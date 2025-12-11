import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/splash');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center text-white p-6">
      {/* Background Image - Same as Splash for continuity */}
      <img 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover -z-10" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGAsoJ1jbNarMf8vC58zh6VwpBQuKJgKW9igIuR4zAKJM9MeI8ATJk3OKHdghkPK-RtUVqwi6w3mS2l7NY_p1OdrX1TcqbZdbJFBwyFE3Q9V66bHegCLaChKIYSEDCpwBVGWtYbDTNCa4zWt8MdFi9HcQr_LkiWuSlaTsCTDzKSr_UVlBQJ7gmbehWw7OyD5xW6lDn2hkQjuLndZtc-ce75Se-HHLj5A1kDh3Em9ZZM8E7MwiFE1k-Wwtrv-TzCz66lqTBkuV-FZCW" 
      />
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* Centered Logo Content */}
      <div className="flex flex-col items-center justify-center animate-pulse">
        <div className="w-24 h-24 mb-6 border-4 border-white flex items-center justify-center p-2">
          <span className="text-5xl font-serif font-bold">Z</span>
        </div>
        <h1 className="text-5xl font-bold tracking-widest text-white mb-2">MU:ZEUM</h1>
        <p className="text-white/80 text-sm tracking-wider font-sans">
          손안의 작은 박물관
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;