
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Globe, 
  Twitter, 
  Github, 
  Linkedin, 
  Mail,
  Shield,
  Zap,
  Users
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Globe className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-xl font-bold">Global Matching</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Le réseau social Web3 qui révolutionne les connexions humaines 
              grâce à la blockchain et aux NFTs.
            </p>
            <div className="flex space-x-2">
              <Badge className="gradient-nft border-0 text-white">
                Web3
              </Badge>
              <Badge className="gradient-primary border-0 text-white">
                NFT
              </Badge>
            </div>
          </div>

          {/* Piliers */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Piliers</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Button variant="ghost" className="h-auto p-0 text-gray-400 hover:text-white">
                  💼 Professionnel
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="h-auto p-0 text-gray-400 hover:text-white">
                  💘 Affectif
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="h-auto p-0 text-gray-400 hover:text-white">
                  🎮 Socio-culturel
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="h-auto p-0 text-gray-400 hover:text-white">
                  🏠 Immobilier
                </Button>
              </li>
            </ul>
          </div>

          {/* NFT & Blockchain */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">NFT & Blockchain</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Button variant="ghost" className="h-auto p-0 text-gray-400 hover:text-white">
                  Marketplace NFT
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="h-auto p-0 text-gray-400 hover:text-white">
                  Certifications
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="h-auto p-0 text-gray-400 hover:text-white">
                  Figurines
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="h-auto p-0 text-gray-400 hover:text-white">
                  Smart Contracts
                </Button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Button variant="ghost" className="h-auto p-0 text-gray-400 hover:text-white">
                  Centre d'aide
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="h-auto p-0 text-gray-400 hover:text-white">
                  Documentation
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="h-auto p-0 text-gray-400 hover:text-white">
                  Contact
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="h-auto p-0 text-gray-400 hover:text-white">
                  Communauté
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 py-8 border-t border-gray-800">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Users className="h-5 w-5 text-blue-400" />
              <span className="text-2xl font-bold text-blue-400">10K+</span>
            </div>
            <div className="text-sm text-gray-400">Utilisateurs actifs</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Shield className="h-5 w-5 text-green-400" />
              <span className="text-2xl font-bold text-green-400">2.5K</span>
            </div>
            <div className="text-sm text-gray-400">NFT créés</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span className="text-2xl font-bold text-yellow-400">850</span>
            </div>
            <div className="text-sm text-gray-400">Matchs réussis</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Globe className="h-5 w-5 text-purple-400" />
              <span className="text-2xl font-bold text-purple-400">95%</span>
            </div>
            <div className="text-sm text-gray-400">Satisfaction</div>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2024 The Global Matching. Tous droits réservés.
          </div>

          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Mail className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Sécurisé par</span>
            <Badge variant="outline" className="border-gray-700 text-gray-300">
              Ethereum
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
