import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNav, useNaturalBack } from '../components/Shared';

const wishlistItems = [
  {
    id: 'w1',
    title: '나전칠기 자개 보석함',
    price: 45000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmjUow1YtB68FYMsT7emqKnL1_y2wbW4zHAbCzyYKHppktlqwcOsLaf2uBc02_5xYwSVCkFrk9zu6ZHuuiYTm1UigRVDWdaTnJODCeyDLtPBUW7gOEV-LPcrV_gjNfwHHTi1HskoeK8T-7uf6AdFKFhpQnfMzcxfjc0z04ZqHfZlsfezY-LkMvdoN21dinCN5dIZhCbS9nGU-jw1js0-sGg2oW_3PD5iG_KeeKL5gAyXuwGr2_CyoJ9gPEwGrtmTKvp_Q9E33hXC6l'
  },
  {
    id: 'w2',
    title: '청자 상감운학문 매병',
    price: 120000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV5oPKxXm6XUa1vDbr210us0aVUhFtzpAyxk3r2gXt3u533vYXb5C_GlCTIArnBtDnuZzrHay4vytUL3awfDJtuntjUJk2zA1-qn9FtQzdBFsvvsU7-c_CmTJjAUg7P-cM4EIJyhr6VO2FIc76uo5IXKe34p0-HZrPQmv7onSwKEoQxCduoawxoXCMYxx1MIJqNtU7ErkCUtVSD1_HzLU5n7CtVqryxcFRapR5Nq04-CeuEWckCa92jLamN5XxZaAcop4b7It5JUYC'
  },
  {
    id: 'w3',
    title: '반가사유상 미니어처',
    price: 89000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_yB_n_ParP5_S8o3_Yqt12chfXdAoV-4iNiucqZKCncbe_aaaeEXnkgzveKSiWXm64y2W6Js5g6Rf0OTNKfk3b-18NSh2NSlFwbVmPx7w8asxR3Tc_uDheTSKyQigwCWlAby_z1PoIkmx2TQ8Ag8RBM5_WwMgSewpbLAFY8-zhT3vY24Fozm4Bn0TuoHdm2sT6EgUWdyWCmNRTbgU8tp3DfhnEoo9uEaxaiwMZoQ-mHZe3joGF6TKH1K2CJk99aSQcAguI4axb0S-'
  },
  {
    id: 'w4',
    title: '경천사지 십층석탑 홀더',
    price: 35000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg70n5iSBHocH4FPWFtk-5NmH9pS-SaNPpLEDeSowR-OfjxWJZ4uYqujj4P2ERSxG-yyYY9kxSitICLJCdYhUMNJHG5luAUCX9bh3fBIYBEbfkFwtEONuMnxn7F9OlKzblnAjiHD5op66MNdn4mGr45YvmaCvDVTIhOziF0mKMbMcXDmnPGg-0XtvTEi56RwbR5MrwQpCuNvRtBcdTbkIIGWNea5NW_lFcQ6xNJ5evSWYrWJ78J4XLAnvjgMSKKzqYuk4_qX1R-p9r'
  },
  {
    id: 'w5',
    title: '전통 산수화 부채',
    price: 28000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7VCV4avmj1suVGVTLL8qjRY591c2lCNL6h7kvgp7X_5Qy2hsd7qSlilmxqhKV-UYp_2sxqI8XGHvAyclS8XK583BFNO3F0BfZPzBT3Ne8vSzNOLEPucA5LWF_oFnhb7zbtvPEekiRjQF9ptylziC4jcbw6ont0a5JMehmHMbDt4GEUpVVv_61XF_VlzbXITZjWkXfKwCpe5_eb0R-fbyxTXGBPfNP2ZK5s2UAW2FFHGeH1uAnkP5klln_KOjUF9bFx3tZi8Om70-V'
  },
  {
    id: 'w6',
    title: '전통 문양 컵받침 세트',
    price: 22000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSV1yN9ChguxXJGQf-oq6ZfUOBL9hwjibv12dL-Chb-Ck1JUTCTJGm56Ij75orIqTlKDsWInrrMsu4DuFCudcheuYcv96BOH4BDDZ9A52jVwGnutG0qiQfFIPRc68AR-ptJIfNdQXXMR8B4-YMNY5YLatXYZIFtVXdp1IX5DzhNINSuLKp9VLKzVhB7ssMyXXua58kzSjPq1REW1gVj2gPzZjCxsEXqzcvcO3mWHWTaOTosaw440NfS6tVQZ0KYP9LzOhSTEIhOwkb'
  }
];

const WishlistScreen: React.FC = () => {
  const navigate = useNavigate();
  const goBack = useNaturalBack();

  return (
    <div className="flex flex-col min-h-screen bg-background pb-24">
      {/* Custom Header matching the design */}
      <div className="sticky top-0 z-20 flex items-center justify-between p-4 bg-background/95 backdrop-blur-sm">
        <button onClick={goBack} className="p-1 -ml-1 text-text">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <div className="flex items-center space-x-1 cursor-pointer absolute left-1/2 -translate-x-1/2">
             <h1 className="text-lg font-bold text-text">찜</h1>
             <span className="material-symbols-outlined text-sm pt-1 bg-surface rounded-full">expand_more</span>
        </div>
        <div className="w-6" /> {/* Placeholder for balance */}
      </div>

      <main className="px-4">
        {/* Filters */}
        <div className="flex space-x-3 mb-6 mt-2">
            <FilterDropdown label="담은순" />
            <FilterDropdown label="상태" />
        </div>

        {/* Count and Edit */}
        <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-text-secondary">상품 15개</span>
            <button className="text-sm text-text-secondary">편집</button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
            {wishlistItems.map((item) => (
                <div key={item.id} className="cursor-pointer" onClick={() => navigate(`/product/${item.id}`)}>
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-surface mb-3">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        <button className="absolute top-2 right-2">
                             <span className="text-xl">❤️</span>
                        </button>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-text leading-tight mb-1">{item.title}</h3>
                        <p className="text-base font-bold text-text">{item.price.toLocaleString()}원</p>
                    </div>
                </div>
            ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

const FilterDropdown: React.FC<{ label: string }> = ({ label }) => (
    <button className="flex items-center space-x-1 px-3 py-1.5 bg-surface rounded-md border border-transparent hover:border-border">
        <span className="text-sm text-text">{label}</span>
        <span className="material-symbols-outlined text-base">expand_more</span>
    </button>
);

export default WishlistScreen;