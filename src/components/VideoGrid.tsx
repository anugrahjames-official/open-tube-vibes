
import { Video } from '@/data/dummyData';
import VideoCard from './VideoCard';

interface VideoGridProps {
  videos: Video[];
  title?: string;
  emptyMessage?: string;
  className?: string;
  layout?: 'grid' | 'list';
}

const VideoGrid = ({ 
  videos, 
  title, 
  emptyMessage = "No videos found", 
  className = "",
  layout = 'grid'
}: VideoGridProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {title && <h2 className="text-xl font-semibold">{title}</h2>}
      
      {videos.length === 0 ? (
        <div className="flex justify-center items-center py-10 text-muted-foreground">
          {emptyMessage}
        </div>
      ) : (
        <div className={layout === 'grid' 
          ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" 
          : "flex flex-col gap-4"
        }>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} variant={layout === 'list' ? 'list' : 'default'} />
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoGrid;
