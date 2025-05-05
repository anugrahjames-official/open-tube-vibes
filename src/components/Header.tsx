import { useState } from 'react';
import { Search, Video, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="container mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo and branding */}
        <div className="flex items-center gap-2">
          <Video className="h-6 w-6 text-red-600" />
          <span className="text-xl font-bold">OpenTube</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {!isMobile && (
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          )}
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="border-b border-border py-2 px-4 bg-background animate-fade-in">
          {/* Mobile menu content */}
        </nav>
      )}
    </header>
  );
};

export default Header;
