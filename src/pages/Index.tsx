
import { useState } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import VideoGrid from '@/components/VideoGrid';
import FeaturedVideos from '@/components/FeaturedVideos';
import { dummyVideos, featuredVideos, recentVideos } from '@/data/dummyData';

const Index = () => {
  const [searchResults, setSearchResults] = useState<typeof dummyVideos | null>(null);

  const handleSearch = (query: string) => {
    const results = dummyVideos.filter(
      video => 
        video.title.toLowerCase().includes(query.toLowerCase()) || 
        video.description.toLowerCase().includes(query.toLowerCase()) ||
        video.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    setSearchResults(results);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6 space-y-8">
        <div className="flex justify-center">
          <SearchBar onSearch={handleSearch} className="w-full max-w-3xl" />
        </div>
        
        {searchResults ? (
          <VideoGrid 
            videos={searchResults} 
            title={`Search Results (${searchResults.length})`} 
            emptyMessage="No videos found matching your search"
          />
        ) : (
          <>
            {featuredVideos.length > 0 && (
              <section aria-label="Featured Videos">
                <FeaturedVideos videos={featuredVideos} />
              </section>
            )}
            
            <section aria-label="Recent Videos">
              <VideoGrid videos={recentVideos} title="Recent Videos" />
            </section>
          </>
        )}
      </main>
      
      <footer className="mt-auto py-6 border-t border-border">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 OpenTube - A Progressive Web App for Video Sharing</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
