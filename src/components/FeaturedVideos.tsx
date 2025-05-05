
import { useState, useEffect } from 'react';
import { Video } from '@/data/dummyData';
import VideoCard from './VideoCard';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FeaturedVideosProps {
  videos: Video[];
}

const FeaturedVideos = ({ videos }: FeaturedVideosProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [interval, setIntervalValue] = useState<number | null>(null);

  // Auto-rotate featured videos
  useEffect(() => {
    if (videos.length <= 1) return;
    
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
    }, 8000);
    
    setIntervalValue(id);
    
    return () => {
      if (interval) window.clearInterval(interval);
    };
  }, [videos.length]);

  // Reset interval on manual navigation
  const navigateTo = (index: number) => {
    if (interval) window.clearInterval(interval);
    setActiveIndex(index);
    
    // Restart auto-rotation
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
    }, 8000);
    
    setIntervalValue(id);
  };

  // Navigate to previous/next video
  const handlePrev = () => {
    navigateTo((activeIndex - 1 + videos.length) % videos.length);
  };

  const handleNext = () => {
    navigateTo((activeIndex + 1) % videos.length);
  };

  if (!videos.length) return null;

  return (
    <div className="relative bg-card rounded-xl overflow-hidden">
      {/* Featured video */}
      <div className="flex flex-col md:flex-row md:h-[350px]">
        <div className="flex-1 md:w-2/3 relative">
          <div className="aspect-video md:h-full w-full relative">
            <img 
              src={videos[activeIndex].thumbnailUrl} 
              alt={videos[activeIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold line-clamp-2">{videos[activeIndex].title}</h3>
              <p className="text-sm text-gray-200 mt-2 line-clamp-2">{videos[activeIndex].description}</p>
              <div className="flex items-center mt-4">
                <img 
                  src={videos[activeIndex].uploader.avatarUrl} 
                  alt={videos[activeIndex].uploader.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <p className="text-sm font-medium">{videos[activeIndex].uploader.name}</p>
                  <p className="text-xs text-gray-300">
                    {new Intl.NumberFormat('en-US', {
                      notation: 'compact',
                      maximumFractionDigits: 1,
                    }).format(videos[activeIndex].views)} views
                  </p>
                </div>
                <Button className="ml-auto" size="sm">Watch Now</Button>
              </div>
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between pointer-events-none">
            <Button 
              variant="secondary" 
              size="icon" 
              className="opacity-70 hover:opacity-100 pointer-events-auto" 
              onClick={handlePrev}
            >
              <ChevronDown className="h-4 w-4 -rotate-90" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button 
              variant="secondary" 
              size="icon" 
              className="opacity-70 hover:opacity-100 pointer-events-auto" 
              onClick={handleNext}
            >
              <ChevronUp className="h-4 w-4 -rotate-90" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/3 flex-col p-2 bg-accent/50 overflow-y-auto">
          <h3 className="font-medium px-2 py-3">Featured Videos</h3>
          <div className="space-y-2">
            {videos.map((video, idx) => (
              <div 
                key={video.id} 
                className={`flex gap-2 p-2 rounded-md cursor-pointer ${
                  activeIndex === idx ? 'bg-primary/20' : 'hover:bg-accent'
                }`}
                onClick={() => navigateTo(idx)}
              >
                <div className="w-24 h-16 flex-shrink-0 relative">
                  <img 
                    src={video.thumbnailUrl} 
                    alt={video.title} 
                    className="w-full h-full object-cover rounded"
                  />
                  <div className="absolute bottom-1 right-1 text-xs bg-black/70 px-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium line-clamp-2">{video.title}</p>
                  <p className="text-xs text-muted-foreground">{video.uploader.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Indicator dots for mobile */}
      <div className="flex justify-center gap-1 py-2 md:hidden">
        {videos.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-colors ${
              activeIndex === idx ? 'bg-primary' : 'bg-muted'
            }`}
            onClick={() => navigateTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedVideos;
