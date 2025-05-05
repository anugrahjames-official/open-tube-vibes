
import { Home, Play, Bell, User } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border py-2 px-4 z-40">
      <div className="flex justify-between items-center">
        <a href="/" className="flex flex-col items-center gap-1 text-xs text-foreground">
          <Home className="h-6 w-6" />
          <span>Home</span>
        </a>
        <a href="/shorts" className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
          <div className="relative">
            <Play className="h-6 w-6" />
          </div>
          <span>Shorts</span>
        </a>
        <div className="relative">
          <a href="/subscriptions" className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
            <div className="relative">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 16.5V7.5L16 12L10 16.5Z" fill="currentColor"/>
                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z" fill="currentColor"/>
              </svg>
              <div className="absolute -top-1 -right-1 flex items-center justify-center bg-red-600 text-white text-[10px] w-4 h-4 rounded-full">
                1
              </div>
            </div>
            <span>Subscriptions</span>
          </a>
        </div>
        <a href="/notifications" className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
          <div className="relative">
            <Bell className="h-6 w-6" />
            <Badge className="absolute -top-1 -right-1 flex items-center justify-center bg-red-600 text-white text-[10px] w-4 h-4 rounded-full p-0 min-w-0">
              7+
            </Badge>
          </div>
          <span>Notifications</span>
        </a>
        <a href="/profile" className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
          <div className="h-6 w-6 rounded-full bg-teal-500 flex items-center justify-center text-white font-medium">
            A
          </div>
          <span>You</span>
        </a>
      </div>
    </nav>
  );
};

export default BottomNav;
