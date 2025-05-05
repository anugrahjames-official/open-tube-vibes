
import { Home, Play, Video, Bell, User } from 'lucide-react';

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border py-2 px-4 z-40">
      <div className="flex justify-between items-center">
        <a href="/" className="flex flex-col items-center gap-1 text-xs text-foreground">
          <Home className="h-6 w-6" />
          <span>Home</span>
        </a>
        <a href="/shorts" className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
          <Play className="h-6 w-6" />
          <span>Shorts</span>
        </a>
        <div className="relative">
          <a href="/upload" className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
            <div className="rounded-full border-4 border-background p-1 -mt-6 bg-background">
              <Video className="h-6 w-6" />
            </div>
          </a>
        </div>
        <a href="/subscriptions" className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
          <Bell className="h-6 w-6" />
          <span>Subscriptions</span>
        </a>
        <a href="/profile" className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
          <User className="h-6 w-6" />
          <span>You</span>
        </a>
      </div>
    </nav>
  );
};

export default BottomNav;
