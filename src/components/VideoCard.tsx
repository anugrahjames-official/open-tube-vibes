
import { formatDistanceToNow } from 'date-fns';
import { MoreVertical } from 'lucide-react';
import { Video } from '@/data/dummyData';

interface VideoCardProps {
  video: Video;
  variant?: 'default' | 'featured' | 'list';
}

const VideoCard = ({ video, variant = 'default' }: VideoCardProps) => {
  const isFeatured = variant === 'featured';
  const isList = variant === 'list';
  const formattedViews = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(video.views);
  
  const uploadedDate = new Date(video.uploadDate);
  const timeAgo = formatDistanceToNow(uploadedDate, { addSuffix: true });

  // Format for the YouTube-like timestamp display
  const formatDuration = (duration: string) => {
    return duration.length < 5 ? duration : duration;
  };

  return (
    <div 
      className={`video-card group cursor-pointer rounded-lg overflow-hidden ${
        isFeatured ? 'col-span-full md:col-span-2 md:row-span-2' : ''
      } ${isList ? 'flex flex-row gap-3' : ''}`}
    >
      <div className={`relative ${isList ? 'w-40 flex-shrink-0' : 'w-full'} aspect-video overflow-hidden`}>
        <img 
          src={video.thumbnailUrl} 
          alt={video.title} 
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
          {formatDuration(video.duration)}
        </div>
      </div>
      
      <div className={`py-2 px-0 ${isList ? 'flex-1' : ''}`}>
        <div className={`flex ${isList ? 'gap-2' : 'gap-2'}`}>
          {!isList && (
            <div className="flex-shrink-0">
              <img 
                src={video.uploader.avatarUrl} 
                alt={video.uploader.name} 
                className="w-9 h-9 rounded-full"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between">
              <h3 className="font-medium text-sm line-clamp-2 mb-1 leading-tight">
                {video.title}
              </h3>
              {isList && (
                <button className="flex-shrink-0 ml-2">
                  <MoreVertical className="h-4 w-4" />
                </button>
              )}
            </div>
            <p className="text-muted-foreground text-xs">
              {video.uploader.name}
            </p>
            <div className="flex items-center text-muted-foreground text-xs">
              <span>{formattedViews} views</span>
              <span className="mx-1">•</span>
              <span>{timeAgo}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
