
import { useState } from 'react';
import { Search, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';
import CapacitorService from '@/services/CapacitorService';

const Header = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isNative = CapacitorService.isNative();

  return (
    <header className={`sticky top-0 z-50 w-full bg-background px-4 py-2 ${isNative ? 'pt-4' : ''}`}>
      <div className="flex items-center justify-between">
        {/* Logo and branding */}
        <div className="flex items-center gap-1">
          <Video className="h-7 w-7 text-red-600" />
          <span className="text-lg font-bold">YouTube</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-foreground"
            onClick={() => {
              // Example of using native sharing when available
              if (isNative) {
                CapacitorService.shareContent(
                  'Check out OpenTube!', 
                  'A great video streaming app', 
                  'https://opentube-vibes.lovable.app'
                );
              }
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 16.5V7.5L16 12L10 16.5Z" fill="white"/>
              <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z" fill="white"/>
            </svg>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-foreground"
            onClick={() => {
              // Handle search
            }}
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="border-b border-border py-2 bg-background animate-fade-in">
          {/* Mobile menu content */}
        </nav>
      )}
    </header>
  );
};

export default Header;
