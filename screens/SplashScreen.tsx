import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.clientWidth);
      setActiveIndex(index);
    }
  };

  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const slides = [
    {
      title: 'MU:',
      headline: '특별한 것들만 모이는\n손안의 작은 박물관',
      subhead: '더 이상 구하기 어려운 한정판 굿즈를\nMU:에서 찾아보세요.'
    },
    {
      title: 'ZEUM',
      headline: '당신의 후원으로\n희소가치를 소유하세요',
      subhead: '특별한 이야기와 가치가 담긴 굿즈를\n펀딩하세요.'
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden font-sans touch-pan-x">
      {/* Background Image - Fixed */}
      <img
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-80"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGAsoJ1jbNarMf8vC58zh6VwpBQuKJgKW9igIuR4zAKJM9MeI8ATJk3OKHdghkPK-RtUVqwi6w3mS2l7NY_p1OdrX1TcqbZdbJFBwyFE3Q9V66bHegCLaChKIYSEDCpwBVGWtYbDTNCa4zWt8MdFi9HcQr_LkiWuSlaTsCTDzKSr_UVlBQJ7gmbehWw7OyD5xW6lDn2hkQjuLndZtc-ce75Se-HHLj5A1kDh3Em9ZZM8E7MwiFE1k-Wwtrv-TzCz66lqTBkuV-FZCW"
      />
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* Sliding Container */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar w-full h-screen scroll-smooth"
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full w-full h-full flex flex-col items-center justify-center snap-center flex-shrink-0 p-8 pb-32">
             {/* Logo Box */}
             <div className="w-24 h-24 mb-6 border-[6px] border-white/90 flex items-center justify-center">
                <span className="text-5xl font-serif font-bold italic pt-2 pr-1">Z</span>
             </div>
             
             {/* Title */}
             <h1 className="text-5xl font-bold tracking-widest text-white mb-8 font-display">{slide.title}</h1>
             
             {/* Headline */}
             <p className="text-2xl font-bold text-center whitespace-pre-wrap leading-tight mb-4 drop-shadow-lg">
               {slide.headline}
             </p>
             
             {/* Subhead */}
             <p className="text-white/80 text-sm text-center whitespace-pre-wrap leading-relaxed drop-shadow-md">
               {slide.subhead}
             </p>
          </div>
        ))}
      </div>

      {/* Fixed Bottom UI */}
      <div className="absolute bottom-10 left-0 right-0 px-6 flex flex-col items-center z-20 pointer-events-none">
        {/* Pagination Dots */}
        <div className="flex space-x-3 mb-8 pointer-events-auto">
           {slides.map((_, i) => (
             <button 
               key={i} 
               onClick={() => scrollToSlide(i)}
               className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-[#E0C183] scale-125' : 'bg-white/40 hover:bg-white/60'}`}
               aria-label={`Go to slide ${i + 1}`}
             />
           ))}
        </div>

        {/* Start Button */}
        <button 
          onClick={() => navigate('/login')}
          className="w-full bg-[#E0C183] text-[#3E2B1D] font-bold py-4 rounded-lg text-lg hover:brightness-110 transition-all shadow-lg pointer-events-auto"
        >
          시작하기
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;