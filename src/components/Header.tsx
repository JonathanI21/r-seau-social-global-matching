
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Bell, Wallet, Globe, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <Globe className="h-4 w-4 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              The Global Matching
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="text-sm font-medium" onClick={() => navigate('/professional')}>
            💼 Professionnel
          </Button>
          <Button variant="ghost" className="text-sm font-medium" onClick={() => navigate('/affective')}>
            💘 Affectif
          </Button>
          <Button variant="ghost" className="text-sm font-medium" onClick={() => navigate('/social')}>
            🎮 Socio-culturel
          </Button>
          <Button variant="ghost" className="text-sm font-medium" onClick={() => navigate('/real-estate')}>
            🏠 Immobilier
          </Button>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs gradient-nft border-0">
              3
            </Badge>
          </Button>
          
          <Button variant="outline" size="sm" className="hidden sm:flex items-center space-x-2">
            <Wallet className="h-4 w-4" />
            <span>0.245 ETH</span>
          </Button>

          <Avatar className="h-8 w-8 cursor-pointer hover:ring-2 hover:ring-blue-300 transition-all" onClick={() => navigate('/profile')}>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="gradient-primary text-white text-xs">
              GM
            </AvatarFallback>
          </Avatar>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container py-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start" onClick={() => {navigate('/professional'); setIsMenuOpen(false);}}>
              💼 Professionnel
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => {navigate('/affective'); setIsMenuOpen(false);}}>
              💘 Affectif
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => {navigate('/social'); setIsMenuOpen(false);}}>
              🎮 Socio-culturel
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => {navigate('/real-estate'); setIsMenuOpen(false);}}>
              🏠 Immobilier
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
