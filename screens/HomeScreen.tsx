import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNav } from '../components/Shared';
import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    title: '빈티지 꽃 도자기',
    price: 34000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSV1yN9ChguxXJGQf-oq6ZfUOBL9hwjibv12dL-Chb-Ck1JUTCTJGm56Ij75orIqTlKDsWInrrMsu4DuFCudcheuYcv96BOH4BDDZ9A52jVwGnutG0qiQfFIPRc68AR-ptJIfNdQXXMR8B4-YMNY5YLatXYZIFtVXdp1IX5DzhNINSuLKp9VLKzVhB7ssMyXXua58kzSjPq1REW1gVj2gPzZjCxsEXqzcvcO3mWHWTaOTosaw440NfS6tVQZ0KYP9LzOhSTEIhOwkb',
    category: '도자기',
    isLiked: false
  },
  {
    id: '2',
    title: '고대 그리스 조각상',
    price: 120000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_yB_n_ParP5_S8o3_Yqt12chfXdAoV-4iNiucqZKCncbe_aaaeEXnkgzveKSiWXm64y2W6Js5g6Rf0OTNKfk3b-18NSh2NSlFwbVmPx7w8asxR3Tc_uDheTSKyQigwCWlAby_z1PoIkmx2TQ8Ag8RBM5_WwMgSewpbLAFY8-zhT3vY24Fozm4Bn0TuoHdm2sT6EgUWdyWCmNRTbgU8tp3DfhnEoo9uEaxaiwMZoQ-mHZe3joGF6TKH1K2CJk99aSQcAguI4axb0S-',
    category: '조각',
    isLiked: true
  },
  {
    id: '3',
    title: '모던 추상화 캔버스',
    price: 85000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7VCV4avmj1suVGVTLL8qjRY591c2lCNL6h7kvgp7X_5Qy2hsd7qSlilmxqhKV-UYp_2sxqI8XGHvAyclS8XK583BFNO3F0BfZPzBT3Ne8vSzNOLEPucA5LWF_oFnhb7zbtvPEekiRjQF9ptylziC4jcbw6ont0a5JMehmHMbDt4GEUpVVv_61XF_VlzbXITZjWkXfKwCpe5_eb0R-fbyxTXGBPfNP2ZK5s2UAW2FFHGeH1uAnkP5klln_KOjUF9bFx3tZi8Om70-V',
    category: '회화',
    isLiked: false
  },
  {
    id: '4',
    title: '이집트 유물 미니어처',
    price: 49000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg70n5iSBHocH4FPWFtk-5NmH9pS-SaNPpLEDeSowR-OfjxWJZ4uYqujj4P2ERSxG-yyYY9kxSitICLJCdYhUMNJHG5luAUCX9bh3fBIYBEbfkFwtEONuMnxn7F9OlKzblnAjiHD5op66MNdn4mGr45YvmaCvDVTIhOziF0mKMbMcXDmnPGg-0XtvTEi56RwbR5MrwQpCuNvRtBcdTbkIIGWNea5NW_lFcQ6xNJ5evSWYrWJ78J4XLAnvjgMSKKzqYuk4_qX1R-p9r',
    category: '미니어처',
    isLiked: false
  }
];

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-24">
      {/* Header */}
      <header className="sticky top-0 bg-background/90 backdrop-blur-sm z-10 px-4 py-3 flex justify-between items-center border-b border-border">
        <div className="flex items-center space-x-1 cursor-pointer">
            <div className="border border-white px-2 py-0.5">
              <h1 className="text-xl font-serif font-bold text-text tracking-wider">MU:</h1>
            </div>
            <span className="material-symbols-outlined text-text">expand_more</span>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate('/filter')}><span className="material-symbols-outlined">search</span></button>
          <button><span className="material-symbols-outlined">menu</span></button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4">
        {/* Banner */}
        <section className="mt-4 mb-8">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer">
            <img 
              alt="Promotion" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpi4hXs4TQcCn0yMfJ-waIQUYXoQ2qljRIWjeVyliGl7H_lQepacCmq4r6falk8kLpFcZhlyqH_ccvuiw6EFRKWy_ArDu3GFb-Gk29QT4ivtYkrn05kK53s_RBgoFczRrlq0ZTUmDP4nsRHbYEEr6F1Jkdszky-MELVMhIp7s6oKMxC4kR32LBc7Ipt7V0neNRrzzFMQBlmsdudbSHuP7Uir7MgCbWhC5pUVDM43UNrC_Ohzr1NZ3VrJ7N1B2c87tITMSg8iaYFyPd" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
              <h2 className="text-white text-2xl font-bold mb-2">국립중앙박물관 특별전</h2>
              <p className="text-white/90 text-sm">신라의 황금 유물, 지금 만나보세요.</p>
            </div>
          </div>
          <div className="flex justify-center space-x-2 mt-4">
            <span className="block w-2 h-2 bg-primary-muted rounded-full"></span>
            <span className="block w-2 h-2 bg-surface rounded-full"></span>
            <span className="block w-2 h-2 bg-surface rounded-full"></span>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-6 overflow-x-auto no-scrollbar">
          <div className="flex space-x-3 pb-2">
            <CategoryChip label="전체" active />
            <CategoryChip label="도자기" />
            <CategoryChip label="회화" />
            <CategoryChip label="조각" />
            <CategoryChip label="기타" />
          </div>
        </section>

        {/* Grid */}
        <section className="grid grid-cols-2 gap-x-4 gap-y-8">
          {mockProducts.map((product) => (
            <div key={product.id} className="space-y-3 cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-surface">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                <button className="absolute top-2 right-2 p-1.5 rounded-full bg-black/20 backdrop-blur-sm">
                  <span className={`material-symbols-outlined text-xl ${product.isLiked ? 'text-primary-muted material-symbols-filled' : 'text-white'}`}>favorite</span>
                </button>
              </div>
              <div className="px-1">
                <h3 className="text-sm font-medium text-text truncate">{product.title}</h3>
                <p className="text-base font-bold text-text mt-1">{product.price.toLocaleString()}원</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

const CategoryChip: React.FC<{ label: string; active?: boolean }> = ({ label, active }) => (
  <button className={`whitespace-nowrap px-5 py-2 text-sm font-medium rounded-full transition-colors ${
    active 
      ? 'bg-primary-muted text-background' 
      : 'bg-surface text-text-secondary hover:bg-border'
  }`}>
    {label}
  </button>
);

export default HomeScreen;