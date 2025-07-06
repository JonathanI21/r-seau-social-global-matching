
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Crown, 
  Gem, 
  Shield, 
  Zap, 
  TrendingUp,
  Eye,
  Heart,
  Share2
} from 'lucide-react';

const nftCollections = [
  {
    id: 1,
    name: 'Certification Pro',
    type: 'Compétence',
    image: '/placeholder.svg',
    rarity: 'Legendary',
    price: '0.5 ETH',
    owner: 'Alex.eth',
    verified: true
  },
  {
    id: 2,
    name: 'Figurine Couple',
    type: 'Affectif',
    image: '/placeholder.svg',
    rarity: 'Rare',
    price: '0.2 ETH',
    owner: 'Marie.eth',
    verified: true
  },
  {
    id: 3,
    name: 'Badge Gaming',
    type: 'Social',
    image: '/placeholder.svg',
    rarity: 'Common',
    price: '0.1 ETH',
    owner: 'Dev.eth',
    verified: false
  }
];

const NFTSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge className="gradient-nft border-0 text-white px-4 py-2 pulse-glow">
            💎 NFT Marketplace
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Votre identité numérique
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              certifiée blockchain
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Créez, collectionnez et échangez des NFTs uniques qui représentent 
            vos compétences, passions et accomplissements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* NFT Showcase */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Collection Tendance</h3>
              <Button variant="outline">
                Voir tout
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nftCollections.map((nft) => (
                <Card key={nft.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 p-8">
                      <div className="w-full h-full bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 flex items-center justify-center">
                        <div className="text-4xl">{nft.type === 'Compétence' ? '🎓' : nft.type === 'Affectif' ? '💖' : '🎮'}</div>
                      </div>
                    </div>
                    
                    <Badge 
                      className={`absolute top-3 right-3 ${
                        nft.rarity === 'Legendary' ? 'gradient-nft' : 
                        nft.rarity === 'Rare' ? 'bg-purple-500' : 'bg-gray-500'
                      } text-white border-0`}
                    >
                      {nft.rarity}
                    </Badge>
                  </div>

                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{nft.name}</h4>
                        <p className="text-sm text-muted-foreground">{nft.type}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">127</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">{nft.owner[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">{nft.owner}</span>
                        {nft.verified && (
                          <Shield className="h-3 w-3 text-blue-500" />
                        )}
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-green-600">{nft.price}</div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1 gradient-primary text-white border-0">
                        Acheter
                      </Button>
                      <Button size="sm" variant="outline">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* NFT Stats & Info */}
          <div className="space-y-6">
            <Card className="gradient-primary text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Crown className="h-5 w-5" />
                  <span>Votre Coffre NFT</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Certifications</span>
                    <span className="font-semibold">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Figurines</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Badges</span>
                    <span className="font-semibold">8</span>
                  </div>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Valeur totale</span>
                    <span>2.8 ETH</span>
                  </div>
                </div>
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  Gérer ma collection
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span>Tendances</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">🎓 Certifications Dev</span>
                    <span className="text-green-500 text-sm font-semibold">+25%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">💖 Figurines Couple</span>
                    <span className="text-green-500 text-sm font-semibold">+18%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">🎮 Badges Gaming</span>
                    <span className="text-red-500 text-sm font-semibold">-5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-nft text-white">
              <CardContent className="p-6 text-center space-y-4">
                <Gem className="h-8 w-8 mx-auto" />
                <h4 className="font-bold">Créer votre NFT</h4>
                <p className="text-sm opacity-90">
                  Transformez vos compétences en actifs numériques uniques
                </p>
                <Button className="w-full bg-white text-orange-600 hover:bg-gray-100">
                  Commencer
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTSection;
