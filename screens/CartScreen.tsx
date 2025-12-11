import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Shared';

interface CartItem {
    id: number;
    title: string;
    price: number;
    image: string;
    qty: number;
}

const CartScreen: React.FC = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<CartItem[]>([
      {
          id: 1,
          title: "나전칠기 자개소반",
          price: 25000,
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmjUow1YtB68FYMsT7emqKnL1_y2wbW4zHAbCzyYKHppktlqwcOsLaf2uBc02_5xYwSVCkFrk9zu6ZHuuiYTm1UigRVDWdaTnJODCeyDLtPBUW7gOEV-LPcrV_gjNfwHHTi1HskoeK8T-7uf6AdFKFhpQnfMzcxfjc0z04ZqHfZlsfezY-LkMvdoN21dinCN5dIZhCbS9nGU-jw1js0-sGg2oW_3PD5iG_KeeKL5gAyXuwGr2_CyoJ9gPEwGrtmTKvp_Q9E33hXC6l",
          qty: 1
      },
      {
          id: 2,
          title: "청자 상감운학문 매병 키링",
          price: 30000,
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAV5oPKxXm6XUa1vDbr210us0aVUhFtzpAyxk3r2gXt3u533vYXb5C_GlCTIArnBtDnuZzrHay4vytUL3awfDJtuntjUJk2zA1-qn9FtQzdBFsvvsU7-c_CmTJjAUg7P-cM4EIJyhr6VO2FIc76uo5IXKe34p0-HZrPQmv7onSwKEoQxCduoawxoXCMYxx1MIJqNtU7ErkCUtVSD1_HzLU5n7CtVqryxcFRapR5Nq04-CeuEWckCa92jLamN5XxZaAcop4b7It5JUYC",
          qty: 1
      }
  ]);

  const total = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = 3000;
  const grandTotal = total + shipping;

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="장바구니" leftIcon="arrow_back_ios_new" />
      
      <main className="flex-grow p-4 space-y-4">
        {items.map((item) => (
            <div key={item.id} className="relative flex items-start p-3 rounded-xl border border-primary bg-surface ring-1 ring-primary/50">
                <input type="checkbox" defaultChecked className="mt-1 w-5 h-5 rounded border-text-secondary bg-transparent text-primary focus:ring-primary focus:ring-offset-background" />
                
                <div className="ml-3 flex flex-grow gap-3">
                    <img src={item.image} alt={item.title} className="w-20 h-20 rounded-lg object-cover bg-background" />
                    <div className="flex flex-col justify-between flex-grow">
                        <div>
                            <h3 className="text-sm font-medium text-text">{item.title}</h3>
                            <p className="text-base font-bold text-text mt-1">{item.price.toLocaleString()}원</p>
                        </div>
                        <div className="flex items-center mt-2">
                             <div className="flex items-center border border-border rounded-md bg-background">
                                <button className="px-2 py-0.5 text-text-secondary hover:text-white"><span className="material-symbols-outlined text-sm">remove</span></button>
                                <span className="px-2 text-sm font-medium">{item.qty}</span>
                                <button className="px-2 py-0.5 text-text hover:text-white"><span className="material-symbols-outlined text-sm">add</span></button>
                             </div>
                        </div>
                    </div>
                </div>
                
                <button className="absolute top-3 right-3 text-text-secondary">
                    <span className="material-symbols-outlined text-lg">close</span>
                </button>
            </div>
        ))}
      </main>

      <div className="p-4 bg-background border-t border-border mt-auto">
         <div className="space-y-2 mb-4">
             <div className="flex justify-between text-sm text-text-secondary">
                 <span>총 상품 금액</span>
                 <span>{total.toLocaleString()}원</span>
             </div>
             <div className="flex justify-between text-sm text-text-secondary">
                 <span>배송비</span>
                 <span>{shipping.toLocaleString()}원</span>
             </div>
             <div className="border-t border-border my-2"></div>
             <div className="flex justify-between text-lg font-bold text-white">
                 <span>결제 예정 금액</span>
                 <span>{grandTotal.toLocaleString()}원</span>
             </div>
         </div>
         <button 
            onClick={() => navigate('/checkout')}
            className="w-full bg-primary text-background font-bold py-4 rounded-lg text-lg hover:brightness-110"
         >
             총 {grandTotal.toLocaleString()}원 구매하기
         </button>
      </div>
    </div>
  );
};

export default CartScreen;