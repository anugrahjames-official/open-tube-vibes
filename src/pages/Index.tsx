
import { useState } from 'react';
import Header from '@/components/Header';
import VideoGrid from '@/components/VideoGrid';
import CategoryChips from '@/components/CategoryChips';
import ShortsSection from '@/components/ShortsSection';
import BottomNav from '@/components/BottomNav';
import { dummyVideos, featuredVideos, recentVideos } from '@/data/dummyData';
import { MoreVertical } from 'lucide-react';
import VideoCard from '@/components/VideoCard';

const Index = () => {
  const [searchResults, setSearchResults] = useState<typeof dummyVideos | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Create dummy shorts arrays from the existing videos
  const shortsVideos1 = dummyVideos.slice(0, 2).map(video => ({
    ...video,
    isShort: true,
    duration: '0:30'
  }));

  const shortsVideos2 = dummyVideos.slice(2, 4).map(video => ({
    ...video,
    isShort: true,
    duration: '0:30'
  }));

  const handleSearch = (query: string) => {
    const results = dummyVideos.filter(
      video => 
        video.title.toLowerCase().includes(query.toLowerCase()) || 
        video.description.toLowerCase().includes(query.toLowerCase()) ||
        video.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    setSearchResults(results);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setSearchResults(null);
      return;
    }
    
    const results = dummyVideos.filter(
      video => video.tags.some(tag => tag.toLowerCase() === category.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white pb-20">
      <Header />
      
      <main className="flex-1 px-2 space-y-4">
        <div className="sticky top-14 z-30 -mx-2 px-2 bg-background">
          <CategoryChips onCategorySelect={handleCategorySelect} />
        </div>
        
        {searchResults ? (
          <VideoGrid 
            videos={searchResults} 
            title={`${selectedCategory !== 'all' ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) + ' - ' : ''}Search Results (${searchResults.length})`} 
            emptyMessage={`No videos found ${selectedCategory !== 'all' ? 'in ' + selectedCategory : ''}`}
            layout="list"
          />
        ) : (
          <>
            {/* First Shorts Section */}
            <ShortsSection shorts={shortsVideos1} />
            
            {/* Featured Video Section - Just one video */}
            <div className="mb-6">
              <div className="aspect-video relative w-full overflow-hidden rounded-none">
                <img 
                  src={featuredVideos[0].thumbnailUrl} 
                  alt={featuredVideos[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                  26:59
                </div>
              </div>
              <div className="flex mt-2 px-1">
                <div className="flex-shrink-0 mr-3">
                  <img 
                    src={featuredVideos[0].uploader.avatarUrl} 
                    alt={featuredVideos[0].uploader.name}
                    className="w-9 h-9 rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm line-clamp-2 leading-snug">
                    I show my engineer friend how to build a website in framer faster than ai vibe coding ever can!
                  </h3>
                  <p className="text-muted-foreground text-xs mt-1">
                    BrandingBum · 321 views · 3 days ago
                  </p>
                </div>
                <button className="flex-shrink-0 ml-2">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Second Shorts Section */}
            <ShortsSection shorts={shortsVideos2} />
          </>
        )}
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Index;
