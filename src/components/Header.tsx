
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search, Video, Home, User, Menu, X } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo and branding */}
        <div className="flex items-center gap-2">
          <Video className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">OpenTube</span>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              <span>Search</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <Video className="h-5 w-5" />
              <span>Upload</span>
            </Button>
          </nav>
        )}

        {/* Auth buttons or user profile */}
        <div className="flex items-center gap-2">
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          )}
          <Button variant="outline" size={isMobile ? "icon" : "default"}>
            {isMobile ? <User className="h-5 w-5" /> : "Sign In"}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <nav className="border-b border-border py-2 px-4 bg-background animate-fade-in">
          <ul className="space-y-2">
            <li>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="/" className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </a>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="/search" className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  <span>Search</span>
                </a>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="/upload" className="flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  <span>Upload</span>
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
