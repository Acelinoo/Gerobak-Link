'use client';

import React from 'react';

interface Category {
  id: string;
  label: string;
}

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="bg-[#FFF8F0]/92 backdrop-blur-[10px] sticky top-[69px] z-30 py-3 border-b border-orange-200/60 shadow-sm">
      <div className="max-w-[1000px] mx-auto px-4 overflow-x-auto no-scrollbar flex items-center gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all ${
                isActive
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/20 scale-[1.02]'
                  : 'bg-white/80 text-amber-950 border border-orange-200/80 hover:bg-orange-100/60'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
