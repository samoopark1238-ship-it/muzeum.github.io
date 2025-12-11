import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Shared';

const CheckoutScreen: React.FC = () => {
  const navigate = useNavigate();
  const [shippingMethod, setShippingMethod] = useState('delivery');
  const [paymentMethod, setPaymentMethod] = useState('toss');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title="거래 및 결제" leftIcon="arrow_back_ios_new" />

      <main className="flex-grow p-4 space-y-6 overflow-y-auto">
        {/* Shipping Info */}
        <section>
            <h2 className="text-base font-bold mb-3 text-text">배송지 정보</h2>
            <div className="space-y-3">
                <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">받는 분</label>
                    <input type="text" placeholder="이름" className="w-full rounded-lg border border-border bg-surface px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder:text-text-secondary/50" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">연락처</label>
                    <input type="tel" placeholder="연락처" className="w-full rounded-lg border border-border bg-surface px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder:text-text-secondary/50" />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">배송지</label>
                    <div className="flex space-x-2 mb-2">
                         <input type="text" placeholder="우편번호" className="flex-grow rounded-lg border border-border bg-surface px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder:text-text-secondary/50" />
                         <button className="px-4 py-2 border border-border bg-surface rounded-lg text-sm text-text font-medium whitespace-nowrap">주소검색</button>
                    </div>
                    <input type="text" placeholder="기본주소" className="w-full rounded-lg border border-border bg-surface px-4 py-3 mb-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder:text-text-secondary/50" />
                    <input type="text" placeholder="상세주소" className="w-full rounded-lg border border-border bg-surface px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none placeholder:text-text-secondary/50" />
                </div>
            </div>
        </section>

        <div className="h-2 bg-surface -mx-4"></div>

        {/* Shipping Method */}
        <section>
            <h2 className="text-base font-bold mb-3 text-text">배송 방법</h2>
            <div className="space-y-3">
                <label className={`flex items-center p-4 rounded-lg border bg-surface cursor-pointer transition-all ${shippingMethod === 'delivery' ? 'border-primary ring-1 ring-primary' : 'border-border'}`}>
                    <input 
                        type="radio" 
                        name="shipping" 
                        checked={shippingMethod === 'delivery'} 
                        onChange={() => setShippingMethod('delivery')}
                        className="w-5 h-5 text-primary bg-transparent border-text-secondary focus:ring-primary focus:ring-offset-background" 
                    />
                    <span className="ml-3 text-sm font-medium">택배, 소포, 등기</span>
                </label>
                <label className={`flex items-center p-4 rounded-lg border bg-surface cursor-pointer transition-all ${shippingMethod === 'pickup' ? 'border-primary ring-1 ring-primary' : 'border-border'}`}>
                    <input 
                        type="radio" 
                        name="shipping" 
                        checked={shippingMethod === 'pickup'} 
                        onChange={() => setShippingMethod('pickup')}
                        className="w-5 h-5 text-primary bg-transparent border-text-secondary focus:ring-primary focus:ring-offset-background" 
                    />
                    <span className="ml-3 text-sm font-medium">직거래</span>
                </label>
            </div>
        </section>

        <div className="h-2 bg-surface -mx-4"></div>

        {/* Payment Method */}
        <section className="pb-8">
            <h2 className="text-base font-bold mb-3 text-text">결제 수단</h2>
            <div className="grid grid-cols-2 gap-3">
                 <PaymentOption 
                    selected={paymentMethod === 'toss'} 
                    onClick={() => setPaymentMethod('toss')}
                    label="Toss"
                    img="https://lh3.googleusercontent.com/aida-public/AB6AXuAhCLuxujFVUlcQIPsSLypo3kPpanhE-bk3t8VjTDk3s9XAfgw8yMMNbyu95I2lCkixS1J4-XhHA-sNe0--I0y3pqB7sjUTaqdznzbNaLOJ4thmVQO4FLZl-M-GZQV8wWe5Efr5zh3aav8qyKyGPGIxQeHNq4j_aecq8HRoZsO5cEAxQ_0AeuQTpKjcqXvo4DScZCfc5nZWhKsGBXQT1iWaLpTiemTlEPiIbuA_9EJAj8ZzJBNZIsbXyKyBmrdV_9aX52_KJaboCHVJ"
                 />
                 <PaymentOption 
                    selected={paymentMethod === 'kakao'} 
                    onClick={() => setPaymentMethod('kakao')}
                    label="카카오페이"
                    img="https://lh3.googleusercontent.com/aida-public/AB6AXuAvpRK5M0qFRQ_lK_iiphkmcf2SyR10saThbAaSkqCfAhFFXVuVfm0_A4pETg7bmJAO2qwliCPT9vtCvZ8HY58aC80Z68Kv9p0SPp4XOYJ1j_Y8jigQygGU2rzbdz6NuM2G6EqqPdP_Al6ncdDEkRKrsGOVWmT_eSJrCZqDns-RQ_-FNNt33PjQVPy78sAgw-CURKfO2GBCFBtQJJefdWfHpDKpHtNnaFVwzZhTzATMK12rpPrrbVrydWGCxYDKLkEeF5uv-NHOj6zl"
                 />
                 <PaymentOption 
                    selected={paymentMethod === 'naver'} 
                    onClick={() => setPaymentMethod('naver')}
                    label="네이버페이"
                    img="https://lh3.googleusercontent.com/aida-public/AB6AXuDNUPX9XlSK5zx_W0tiAW2q64LNsVShxEmJGOtdAdWNmX3q_tla8zEMUbhS6e5jehFCr6BGeiazLbi5th3lf9pD1RG3NR2aIJCpNwP8EGaw257mWXWTrcnXSVmzqMvG4zEP2hv3XBo2bUyHjXQXTfzKCFSKsuB5A4v4ykFNfUHhAYBoVGldIpGUh0QBBSJy-6XRDgFex_JDIG5pPK8rsJJFZwKBIqJnzlCo3O3RV4cQc-tGJxpg7j5gtltlA6ECCYhBbQQFoNZd5ErQ"
                 />
                 <PaymentOption 
                    selected={paymentMethod === 'card'} 
                    onClick={() => setPaymentMethod('card')}
                    label="신용/체크카드"
                    icon="credit_card"
                 />
            </div>
        </section>
      </main>

      <div className="p-4 bg-background border-t border-border mt-auto">
         <div className="space-y-2 mb-4">
             <div className="flex justify-between text-sm text-text-secondary">
                 <span>상품 가격</span>
                 <span>55,000원</span>
             </div>
             <div className="flex justify-between text-sm text-text-secondary">
                 <span>배송비</span>
                 <span>3,000원</span>
             </div>
             <div className="border-t border-border my-2"></div>
             <div className="flex justify-between text-lg font-bold text-white">
                 <span>총 결제금액</span>
                 <span>58,000원</span>
             </div>
         </div>
         <button 
            className="w-full bg-primary text-background font-bold py-4 rounded-lg text-lg hover:brightness-110"
         >
             58,000원 결제하기
         </button>
      </div>
    </div>
  );
};

const PaymentOption: React.FC<{ selected: boolean; onClick: () => void; label: string; img?: string; icon?: string }> = ({ selected, onClick, label, img, icon }) => (
    <div 
        onClick={onClick}
        className={`flex items-center p-3 rounded-lg border bg-surface cursor-pointer transition-all ${selected ? 'border-primary ring-1 ring-primary' : 'border-border'}`}
    >
        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selected ? 'border-primary' : 'border-text-secondary'}`}>
            {selected && <div className="w-2 h-2 rounded-full bg-primary"></div>}
        </div>
        {img && <img src={img} alt={label} className="h-6 w-6 ml-3 mr-2 object-contain" />}
        {icon && <span className="material-symbols-outlined ml-3 mr-2 text-text-secondary">{icon}</span>}
        <span className="text-sm font-medium">{label}</span>
    </div>
);

export default CheckoutScreen;