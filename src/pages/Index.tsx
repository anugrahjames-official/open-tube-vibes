
import { useState } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import VideoGrid from '@/components/VideoGrid';
import FeaturedVideos from '@/components/FeaturedVideos';
import CategoryChips from '@/components/CategoryChips';
import ShortsSection from '@/components/ShortsSection';
import BottomNav from '@/components/BottomNav';
import { dummyVideos, featuredVideos, recentVideos } from '@/data/dummyData';

const Index = () => {
  const [searchResults, setSearchResults] = useState<typeof dummyVideos | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Create a dummy shorts array from the existing videos
  const shortsVideos = dummyVideos.slice(0, 4).map(video => ({
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
    <div className="min-h-screen flex flex-col bg-background text-foreground pb-20">
      <Header />
      
      <main className="flex-1 px-4 py-3 space-y-6">
        <div className="sticky top-14 z-30 -mx-4 px-4 py-2 bg-background">
          <CategoryChips onCategorySelect={handleCategorySelect} />
        </div>
        
        <div className="flex justify-center sm:px-4">
          <SearchBar onSearch={handleSearch} className="w-full max-w-3xl" />
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
            {featuredVideos.length > 0 && (
              <section aria-label="Featured Videos">
                <FeaturedVideos videos={featuredVideos} />
              </section>
            )}
            
            <ShortsSection shorts={shortsVideos} />
            
            <section aria-label="Recent Videos">
              <VideoGrid videos={recentVideos} layout="list" />
            </section>
          </>
        )}
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Index;
