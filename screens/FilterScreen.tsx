import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, PrimaryButton } from '../components/Shared';

const FilterScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        title="Filter" 
        leftIcon="arrow_back_ios_new"
        rightElements={
            <>
                <span className="material-symbols-outlined">search</span>
                <span className="material-symbols-outlined ml-4" onClick={() => navigate('/cart')}>shopping_bag</span>
            </>
        }
      />
      
      <main className="flex-grow p-4 space-y-8 pb-24">
        <FilterSection title="카테고리">
           <FilterChip label="국립박물관" />
           <FilterChip label="국립현대" />
           <FilterChip label="리움" />
           <FilterChip label="호암" />
        </FilterSection>

        <FilterSection title="종류">
           <FilterChip label="도서" />
           <FilterChip label="폰케이스" />
           <FilterChip label="장패드" />
           <FilterChip label="그립톡" />
           <FilterChip label="미니어처" />
           <FilterChip label="무드등" />
           <FilterChip label="기타" />
        </FilterSection>

        <FilterSection title="가격">
           <div className="grid grid-cols-3 gap-2 w-full">
             <FilterChip label="1만원대" block />
             <FilterChip label="1-5만원" block />
             <FilterChip label="10만원 이상" block />
           </div>
        </FilterSection>

        <FilterSection title="상태">
           <div className="grid grid-cols-3 gap-2 w-full">
             <FilterChip label="전체" block />
             <FilterChip label="미개봉" block />
             <FilterChip label="S급" block />
           </div>
        </FilterSection>

        <FilterSection title="연도">
           <div className="grid grid-cols-2 gap-2 w-full">
             <FilterChip label="21년 정규" block />
             <FilterChip label="20년 인스탁스" block />
           </div>
        </FilterSection>
      </main>

      <div className="p-4 sticky bottom-0 bg-background border-t border-border">
        <PrimaryButton onClick={() => navigate('/home')} className="!bg-primary-muted text-background">
            결과 보기
        </PrimaryButton>
      </div>
    </div>
  );
};

const FilterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h2 className="text-lg font-bold mb-3 text-text">{title}</h2>
    <div className="flex flex-wrap gap-2">
      {children}
    </div>
  </div>
);

const FilterChip: React.FC<{ label: string; active?: boolean; block?: boolean }> = ({ label, active, block }) => (
  <button className={`
    px-4 py-2.5 text-sm font-medium rounded-lg border transition-colors
    ${block ? 'w-full text-center' : ''}
    ${active 
        ? 'bg-primary-muted text-background border-primary-muted' 
        : 'bg-surface text-text-secondary border-border hover:border-text-secondary'}
  `}>
    {label}
  </button>
);

export default FilterScreen;