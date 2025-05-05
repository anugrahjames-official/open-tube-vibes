
export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  uploadDate: string;
  views: number;
  duration: string;
  uploader: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  likes: number;
  dislikes: number;
  tags: string[];
  isFeatured: boolean;
}

export const dummyVideos: Video[] = [
  {
    id: "1",
    title: "How to Build a PWA with React",
    description: "Learn how to create a Progressive Web App using React and modern web technologies.",
    thumbnailUrl: "https://picsum.photos/seed/react-pwa/640/360",
    videoUrl: "#",
    uploadDate: "2025-04-28",
    views: 1205,
    duration: "10:28",
    uploader: {
      id: "u1",
      name: "TechExplorer",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
    },
    likes: 230,
    dislikes: 5,
    tags: ["React", "PWA", "Tutorial"],
    isFeatured: true,
  },
  {
    id: "2",
    title: "Web Development Roadmap 2025",
    description: "A complete roadmap for becoming a web developer in 2025.",
    thumbnailUrl: "https://picsum.photos/seed/webdev-25/640/360",
    videoUrl: "#",
    uploadDate: "2025-05-01",
    views: 4389,
    duration: "25:16",
    uploader: {
      id: "u2",
      name: "CodeMaster",
      avatarUrl: "https://i.pravatar.cc/150?img=2",
    },
    likes: 521,
    dislikes: 12,
    tags: ["Web Development", "Career", "Programming"],
    isFeatured: true,
  },
  {
    id: "3",
    title: "Mastering CSS Grid and Flexbox",
    description: "Learn modern CSS layout techniques with Grid and Flexbox.",
    thumbnailUrl: "https://picsum.photos/seed/css-layouts/640/360",
    videoUrl: "#",
    uploadDate: "2025-04-15",
    views: 2156,
    duration: "18:42",
    uploader: {
      id: "u3",
      name: "CSSNinja",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
    },
    likes: 312,
    dislikes: 8,
    tags: ["CSS", "Web Design", "Tutorial"],
    isFeatured: false,
  },
  {
    id: "4",
    title: "Introduction to TypeScript",
    description: "Get started with TypeScript for better JavaScript development.",
    thumbnailUrl: "https://picsum.photos/seed/typescript-intro/640/360",
    videoUrl: "#",
    uploadDate: "2025-04-22",
    views: 1892,
    duration: "15:30",
    uploader: {
      id: "u1",
      name: "TechExplorer",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
    },
    likes: 265,
    dislikes: 7,
    tags: ["TypeScript", "JavaScript", "Programming"],
    isFeatured: false,
  },
  {
    id: "5",
    title: "Building a Video Streaming App",
    description: "Learn how to create a video streaming application from scratch.",
    thumbnailUrl: "https://picsum.photos/seed/video-app/640/360",
    videoUrl: "#",
    uploadDate: "2025-05-03",
    views: 3487,
    duration: "32:15",
    uploader: {
      id: "u4",
      name: "AppCreator",
      avatarUrl: "https://i.pravatar.cc/150?img=4",
    },
    likes: 487,
    dislikes: 14,
    tags: ["App Development", "Video", "Streaming"],
    isFeatured: true,
  },
  {
    id: "6",
    title: "Modern JavaScript Features",
    description: "Explore the latest features in JavaScript ES2025.",
    thumbnailUrl: "https://picsum.photos/seed/js-modern/640/360",
    videoUrl: "#",
    uploadDate: "2025-04-18",
    views: 2789,
    duration: "14:23",
    uploader: {
      id: "u2",
      name: "CodeMaster",
      avatarUrl: "https://i.pravatar.cc/150?img=2",
    },
    likes: 387,
    dislikes: 9,
    tags: ["JavaScript", "ES2025", "Programming"],
    isFeatured: false,
  },
  {
    id: "7",
    title: "Responsive Design Best Practices",
    description: "Learn the best practices for creating responsive websites.",
    thumbnailUrl: "https://picsum.photos/seed/responsive/640/360",
    videoUrl: "#",
    uploadDate: "2025-04-25",
    views: 1765,
    duration: "20:18",
    uploader: {
      id: "u3",
      name: "CSSNinja",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
    },
    likes: 298,
    dislikes: 6,
    tags: ["CSS", "Responsive Design", "Web Design"],
    isFeatured: false,
  },
  {
    id: "8",
    title: "Full Stack Development with React and Node",
    description: "Build a complete application using React frontend and Node.js backend.",
    thumbnailUrl: "https://picsum.photos/seed/fullstack/640/360",
    videoUrl: "#",
    uploadDate: "2025-05-02",
    views: 4021,
    duration: "45:37",
    uploader: {
      id: "u4",
      name: "AppCreator",
      avatarUrl: "https://i.pravatar.cc/150?img=4",
    },
    likes: 543,
    dislikes: 11,
    tags: ["React", "Node.js", "Full Stack"],
    isFeatured: true,
  },
];

export const featuredVideos = dummyVideos.filter(video => video.isFeatured);
export const recentVideos = [...dummyVideos].sort((a, b) => 
  new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
);
