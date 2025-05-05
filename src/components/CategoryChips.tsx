
import { useState } from 'react';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'news', name: 'News' },
  { id: 'dramedy', name: 'Dramedy' },
  { id: 'podcasts', name: 'Podcasts' },
  { id: 'music', name: 'Music' },
  { id: 'gaming', name: 'Gaming' },
  { id: 'ai', name: 'AI' },
  { id: 'laptops', name: 'Laptops' }
];

interface CategoryChipsProps {
  onCategorySelect?: (category: string) => void;
}

const CategoryChips = ({ onCategorySelect }: CategoryChipsProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (onCategorySelect) {
      onCategorySelect(categoryId);
    }
  };

  return (
    <div className="flex overflow-x-auto py-2 px-1 hide-scrollbar gap-2">
      <div className="flex-shrink-0 rounded-full bg-secondary p-2 flex items-center justify-center">
        <span className="sr-only">Explore</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      </div>

      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
            selectedCategory === category.id
              ? 'bg-white text-black'
              : 'bg-secondary text-foreground'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryChips;
