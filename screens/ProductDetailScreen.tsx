import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Shared';
import { mockProducts } from './HomeScreen';

const ProductDetailScreen: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Scroll to top when the product ID changes (e.g. from Recommendations)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  // In a real app, fetch data based on ID. 
  // For this mock, we'll hardcode the "Museum Goods Poster" if ID isn't found in mockProducts
  const product = mockProducts.find(p => p.id === id) || {
    id: '0',
    title: '뮤지엄 굿즈 포스터',
    price: 25000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbe90lJE_jWFdOP73qpqtYWjH31yiAnVF6u6tVuDxsI0_tpRKnz-W_af0E6dIJadImJNG6wmm8c6QqEE23EoUS6cLbTrImdIZeME7AsCKvz9U39VN6K1RkYDuIN5Y_njFHTZblJA_fxUU0rYEBXg3C1HQ0rQsEPruwQzFOAlPEoTmPK9KjX0C4iBf1zSci7Y2kKaF5FE_DvEhu3VkpjPmR1VLYX61Dr8fbJMiQfgmckgu4odgqLx78nEJTN6yDlkR-I-kpl8SFDwIu',
    category: '지정물건',
    description: `2021년 국립중앙박물관 특별 전시 '어느 수집가의 초대' 공식 포스터입니다.\n\n구입 후 암실에서 보관하여 변색이나 손상 없이 상태가 매우 좋습니다. 지관통에 넣어 안전하게 배송해 드립니다.\n\n사이즈: 50 x 70cm`
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pb-24">
      <Header 
        leftIcon="arrow_back_ios_new"
        rightElements={
            <button onClick={() => navigate('/cart')}><span className="material-symbols-outlined">shopping_bag</span></button>
        }
      />

      <main>
        {/* Image Carousel Area */}
        <div className="relative w-full aspect-square bg-surface">
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
        </div>

        {/* Info */}
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm text-text-secondary mb-1">{product.category}</p>
                    <h1 className="text-2xl font-bold text-text mb-2">{product.title}</h1>
                    <p className="text-3xl font-bold text-primary">{product.price.toLocaleString()}원</p>
                </div>
                <button className="p-2">
                    <span className="material-symbols-outlined text-3xl text-text-secondary">favorite</span>
                </button>
            </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-border mb-6">
            <div className="flex px-6 space-x-8">
                <button className="pb-3 border-b-2 border-primary text-primary font-bold text-sm">상세 정보</button>
                <button className="pb-3 border-b-2 border-transparent text-text-secondary font-medium text-sm">판매자 정보/후기</button>
            </div>
        </div>

        {/* Description */}
        <div className="px-6 text-text-secondary whitespace-pre-wrap leading-relaxed mb-8">
            {product.description || "상세 설명이 없습니다."}
        </div>

        <div className="h-2 bg-surface w-full mb-8"></div>

        {/* Recommendations */}
        <div className="px-6">
            <h2 className="text-xl font-bold mb-4">이런 상품은 어때요?</h2>
            <div className="grid grid-cols-3 gap-3">
                {mockProducts.slice(0, 3).map(rec => (
                    <div key={rec.id} className="cursor-pointer" onClick={() => navigate(`/product/${rec.id}`)}>
                        <div className="relative aspect-square rounded-lg overflow-hidden mb-2">
                             <img src={rec.image} alt={rec.title} className="w-full h-full object-cover" />
                             <button className="absolute top-1 right-1 p-1 bg-black/30 rounded-full">
                                <span className="material-symbols-outlined text-sm text-white">favorite</span>
                             </button>
                        </div>
                        <p className="text-xs font-medium text-text truncate">기획 재포장</p>
                        <p className="text-xs font-bold text-text-secondary mt-0.5">{rec.price.toLocaleString()}원</p>
                    </div>
                ))}
            </div>
        </div>
      </main>

      {/* Footer Actions */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-background/95 backdrop-blur-md border-t border-border flex space-x-3 z-30">
        <button className="w-14 h-14 rounded-xl bg-surface border border-border text-text-secondary flex items-center justify-center hover:bg-border transition-colors">
            <span className="material-symbols-outlined text-2xl">add_shopping_cart</span>
        </button>
        <button 
            onClick={() => navigate(`/chat/${id || '0'}`)}
            className="flex-1 bg-surface border border-border text-white font-bold rounded-xl text-lg hover:bg-border transition-colors"
        >
            채팅하기
        </button>
        <button 
            onClick={() => navigate('/checkout')}
            className="flex-1 bg-primary text-background font-bold rounded-xl text-lg hover:brightness-110 transition-all"
        >
            구매하기
        </button>
      </div>
    </div>
  );
};

export default ProductDetailScreen;