import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { 
  Heart, 
  MapPin, 
  Eye, 
  Sparkles, 
  Users, 
  Camera,
  MessageCircle,
  Zap,
  Star,
  Gift
} from 'lucide-react';

const mockFigurines = [
  {
    id: 1,
    name: 'Couple Étoilé',
    type: 'Romantique',
    rarity: 'Legendary',
    price: '0.5 ETH',
    imageEmoji: '💑',
    description: 'Figurine couple sous les étoiles',
    tradeable: true
  },
  {
    id: 2,
    name: 'Premier Rendez-vous',
    type: 'Mignon',
    rarity: 'Rare',
    price: '0.2 ETH',
    imageEmoji: '☕',
    description: 'Moment café romantique',
    tradeable: false
  },
  {
    id: 3,
    name: 'Aventuriers',
    type: 'Aventure',
    rarity: 'Epic',
    price: '0.3 ETH',
    imageEmoji: '🏔️',
    description: 'Duo d\'explorateurs',
    tradeable: true
  }
];

const mockConnections = [
  {
    id: 1,
    name: 'Luna Martinez',
    age: 26,
    distance: '150m',
    eyeContact: true,
    lastSeen: '2 min',
    mutual: true,
    avatar: '/placeholder.svg',
    interests: ['Art', 'Musique', 'Voyage']
  },
  {
    id: 2,
    name: 'Thomas Petit',
    age: 29,
    distance: '320m',
    eyeContact: false,
    lastSeen: '5 min',
    mutual: false,
    avatar: '/placeholder.svg',
    interests: ['Cinema', 'Cuisine', 'Sport']
  }
];

const AffectivePillar = () => {
  const [activeTab, setActiveTab] = useState('live');
  const [isEyeContactActive, setIsEyeContactActive] = useState(false);

  const renderLive = () => (
    <div className="space-y-6">
      {/* Eye Contact System */}
      <Card className="bg-gradient-to-r from-pink-500 to-red-500 text-white">
        <CardContent className="p-8 text-center">
          <Eye className="h-16 w-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Système "Eye Contact"</h3>
          <p className="mb-6 opacity-90">
            Activez la détection pour trouver des connexions en temps réel autour de vous
          </p>
          <Button 
            size="lg"
            onClick={() => setIsEyeContactActive(!isEyeContactActive)}
            className={`${isEyeContactActive ? 'bg-white text-pink-600' : 'bg-pink-600 text-white'} hover:scale-105 transition-transform`}
          >
            {isEyeContactActive ? (
              <>
                <Zap className="h-4 w-4 mr-2" />
                Désactiver la détection
              </>
            ) : (
              <>
                <Eye className="h-4 w-4 mr-2" />
                Activer la détection
              </>
            )}
          </Button>
          {isEyeContactActive && (
            <div className="mt-4 flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Détection active dans un rayon de 50m</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Live Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="gradient-nft text-white">
          <CardContent className="p-6 text-center">
            <Heart className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">23</div>
            <div className="text-sm opacity-90">Connexions</div>
          </CardContent>
        </Card>
        <Card className="bg-pink-500 text-white">
          <CardContent className="p-6 text-center">
            <Eye className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">7</div>
            <div className="text-sm opacity-90">Eye Contacts</div>
          </CardContent>
        </Card>
        <Card className="bg-purple-500 text-white">
          <CardContent className="p-6 text-center">
            <Sparkles className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">15</div>
            <div className="text-sm opacity-90">Figurines</div>
          </CardContent>
        </Card>
        <Card className="bg-orange-500 text-white">
          <CardContent className="p-6 text-center">
            <MessageCircle className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">9</div>
            <div className="text-sm opacity-90">Conversations</div>
          </CardContent>
        </Card>
      </div>

      {/* Nearby Connections */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Connexions à proximité</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockConnections.map((connection) => (
              <div key={connection.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={connection.avatar} />
                      <AvatarFallback>{connection.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    {connection.eyeContact && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                        <Eye className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold">{connection.name}, {connection.age}</h4>
                      {connection.mutual && <Heart className="h-4 w-4 text-pink-500" />}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {connection.distance}
                      </span>
                      <span>Vue il y a {connection.lastSeen}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {connection.interests.slice(0, 3).map((interest, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Camera className="h-4 w-4" />
                  </Button>
                  <Button size="sm" className="gradient-nft text-white border-0">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderFigurines = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Ma Collection de Figurines</h3>
        <Button className="gradient-nft text-white border-0">
          <Sparkles className="h-4 w-4 mr-2" />
          Créer une figurine
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockFigurines.map((figurine) => (
          <Card key={figurine.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pink-400 to-red-400 p-8">
                <div className="w-full h-full bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 flex flex-col items-center justify-center text-white">
                  <div className="text-6xl mb-4">{figurine.imageEmoji}</div>
                  <h4 className="font-bold text-center">{figurine.name}</h4>
                  <p className="text-sm opacity-90 text-center">{figurine.type}</p>
                </div>
              </div>
              
              <Badge 
                className={`absolute top-3 right-3 ${
                  figurine.rarity === 'Legendary' ? 'gradient-nft' : 
                  figurine.rarity === 'Epic' ? 'bg-purple-500' : 'bg-pink-500'
                } text-white border-0`}
              >
                {figurine.rarity}
              </Badge>

              {figurine.tradeable && (
                <Badge className="absolute top-3 left-3 bg-green-500 text-white border-0">
                  <Gift className="h-3 w-3 mr-1" />
                  Échangeable
                </Badge>
              )}
            </div>

            <CardContent className="p-4 space-y-3">
              <p className="text-sm text-muted-foreground">{figurine.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Prix</span>
                <span className="font-semibold text-green-600">{figurine.price}</span>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1">
                  Voir détails
                </Button>
                {figurine.tradeable && (
                  <Button size="sm" className="gradient-nft text-white border-0">
                    <Gift className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Marketplace Section */}
      <Card className="gradient-primary text-white">
        <CardContent className="p-8 text-center">
          <Sparkles className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-4">Marketplace Figurines</h3>
          <p className="mb-6 opacity-90">
            Explorez et échangez des figurines uniques avec d'autres utilisateurs
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Explorer le marketplace
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderMatches = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Vos Matchs Affectifs</h3>
      
      {/* Compatibility Algorithm */}
      <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <CardContent className="p-6">
          <h4 className="text-xl font-bold mb-4 flex items-center">
            <Heart className="h-6 w-6 mr-2" />
            Algorithme de Compatibilité
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">85%</div>
              <div className="text-sm opacity-90">Intérêts communs</div>
            </div>
            <div>
              <div className="text-2xl font-bold">92%</div>
              <div className="text-sm opacity-90">Proximité géographique</div>
            </div>
            <div>
              <div className="text-2xl font-bold">78%</div>
              <div className="text-sm opacity-90">Personnalité</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Matches */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockConnections.map((match) => (
          <Card key={match.id} className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={match.avatar} />
                  <AvatarFallback>{match.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">{match.name}, {match.age}</h4>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{match.distance}</span>
                  </div>
                </div>
                {match.mutual && (
                  <Heart className="h-6 w-6 text-pink-500" />
                )}
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium">Intérêts</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {match.interests.map((interest, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1">
                    Voir profil
                  </Button>
                  <Button className="flex-1 gradient-nft text-white border-0">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-red-600 text-white py-12">
        <div className="container">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 gradient-nft rounded-xl flex items-center justify-center">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Pilier Affectif</h1>
              <p className="text-pink-100">Trouvez des connexions authentiques et partagez des moments uniques</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b bg-white sticky top-0 z-40">
        <div className="container">
          <nav className="flex space-x-8">
            {[
              { id: 'live', label: 'En Direct', icon: <Eye className="h-4 w-4" /> },
              { id: 'figurines', label: 'Figurines NFT', icon: <Sparkles className="h-4 w-4" /> },
              { id: 'matches', label: 'Mes Matchs', icon: <Heart className="h-4 w-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-pink-600 text-pink-600'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="container py-8">
        {activeTab === 'live' && renderLive()}
        {activeTab === 'figurines' && renderFigurines()}
        {activeTab === 'matches' && renderMatches()}
      </div>
    </div>
  );
};

export default AffectivePillar;