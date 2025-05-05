
import { formatDistanceToNow } from 'date-fns';
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

  return (
    <div 
      className={`video-card group cursor-pointer rounded-lg overflow-hidden bg-card ${
        isFeatured ? 'col-span-full md:col-span-2 md:row-span-2' : ''
      } ${isList ? 'flex flex-row gap-3' : ''}`}
    >
      <div className={`relative ${isList ? 'w-40 flex-shrink-0' : 'w-full'} aspect-video overflow-hidden`}>
        <img 
          src={video.thumbnailUrl} 
          alt={video.title} 
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
          {video.duration}
        </div>
      </div>
      
      <div className={`p-3 ${isList ? 'flex-1' : ''}`}>
        <div className={`flex ${isList ? 'flex-col' : 'gap-3'}`}>
          {!isList && (
            <div className="flex-shrink-0">
              <img 
                src={video.uploader.avatarUrl} 
                alt={video.uploader.name} 
                className="w-8 h-8 rounded-full"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-sm md:text-base line-clamp-2 group-hover:text-primary transition-colors">
              {video.title}
            </h3>
            <p className="text-muted-foreground text-xs mt-1">
              {video.uploader.name}
            </p>
            <div className="flex items-center text-muted-foreground text-xs mt-0.5">
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
