
import { MoreVertical } from 'lucide-react';
import { Video } from '@/data/dummyData';

interface ShortsSectionProps {
  shorts: Video[];
}

const ShortsSection = ({ shorts }: ShortsSectionProps) => {
  if (!shorts.length) return null;
  
  return (
    <section className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <div className="bg-red-600 p-1.5 rounded-lg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 3L22 12L17 21V3Z" fill="white"/>
              <path d="M2 3H17V21H2V3Z" fill="white"/>
            </svg>
          </div>
          <h2 className="text-lg font-bold">Shorts</h2>
        </div>
        <button aria-label="More options" className="p-1 rounded-full">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-2 overflow-x-auto hide-scrollbar">
        {shorts.map((short) => (
          <div key={short.id} className="relative w-full rounded-xl overflow-hidden">
            <div className="aspect-[9/16] relative">
              <img 
                src={short.thumbnailUrl} 
                alt={short.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                <h3 className="text-white text-sm font-medium line-clamp-2">{short.title}</h3>
                <p className="text-white/80 text-xs mt-1">{short.views.toLocaleString()} views</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShortsSection;
