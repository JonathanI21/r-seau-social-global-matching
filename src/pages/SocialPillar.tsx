import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  Calendar, 
  Trophy, 
  MapPin, 
  Star, 
  Clock,
  Plus,
  MessageCircle,
  Share2,
  Crown,
  Gamepad2,
  Music,
  Palette
} from 'lucide-react';

const mockGroups = [
  {
    id: 1,
    name: 'Gamers Paris',
    category: 'Gaming',
    members: 1247,
    description: 'Communauté de gamers passionnés sur Paris',
    nextEvent: '2024-02-15',
    avatar: '/placeholder.svg',
    joined: true,
    badges: ['Active', 'Événements']
  },
  {
    id: 2,
    name: 'Artistes Numériques',
    category: 'Art',
    members: 892,
    description: 'Créateurs d\'art numérique et NFT',
    nextEvent: '2024-02-20',
    avatar: '/placeholder.svg',
    joined: false,
    badges: ['Créatif', 'NFT']
  },
  {
    id: 3,
    name: 'Mélomanes Lyon',
    category: 'Musique',
    members: 2156,
    description: 'Passionnés de musique et concerts live',
    nextEvent: '2024-02-18',
    avatar: '/placeholder.svg',
    joined: true,
    badges: ['Concerts', 'Vinyles']
  }
];

const mockEvents = [
  {
    id: 1,
    title: 'Tournoi Gaming NFT',
    date: '2024-02-15',
    time: '19:00',
    location: 'Gaming Center Paris',
    participants: 45,
    maxParticipants: 64,
    type: 'Gaming',
    rewards: ['Figurine Legendary', '0.1 ETH', 'Badge Champion'],
    registered: false
  },
  {
    id: 2,
    title: 'Exposition Art Digital',
    date: '2024-02-20',
    time: '18:30',
    location: 'Galerie Moderne',
    participants: 127,
    maxParticipants: 200,
    type: 'Art',
    rewards: ['NFT Collector', 'Badge Artiste'],
    registered: true
  },
  {
    id: 3,
    title: 'Concert Découverte',
    date: '2024-02-18',
    time: '20:00',
    location: 'Le Bataclan',
    participants: 234,
    maxParticipants: 300,
    type: 'Musique',
    rewards: ['Badge Mélomane', 'Figurine Musicien'],
    registered: false
  }
];

const mockCollectibles = [
  {
    id: 1,
    name: 'Champion Gaming',
    type: 'Badge',
    rarity: 'Legendary',
    dateEarned: '2024-01-15',
    event: 'Tournoi Hiver 2024',
    category: 'Gaming'
  },
  {
    id: 2,
    name: 'Artiste Créatif',
    type: 'Figurine',
    rarity: 'Epic',
    dateEarned: '2024-01-20',
    event: 'Expo Art Numérique',
    category: 'Art'
  },
  {
    id: 3,
    name: 'Mélomane Passionné',
    type: 'Badge',
    rarity: 'Rare',
    dateEarned: '2024-01-10',
    event: 'Festival Musique',
    category: 'Musique'
  }
];

const SocialPillar = () => {
  const [activeTab, setActiveTab] = useState('groups');

  const renderGroups = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Groupes d'Intérêts</h3>
        <Button className="gradient-success text-white border-0">
          <Plus className="h-4 w-4 mr-2" />
          Créer un groupe
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="gradient-primary text-white">
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm opacity-90">Groupes Rejoints</div>
          </CardContent>
        </Card>
        <Card className="gradient-success text-white">
          <CardContent className="p-6 text-center">
            <Calendar className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">8</div>
            <div className="text-sm opacity-90">Événements</div>
          </CardContent>
        </Card>
        <Card className="gradient-nft text-white">
          <CardContent className="p-6 text-center">
            <Trophy className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">25</div>
            <div className="text-sm opacity-90">Badges Gagnés</div>
          </CardContent>
        </Card>
        <Card className="bg-yellow-500 text-white">
          <CardContent className="p-6 text-center">
            <Crown className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm opacity-90">Collectibles</div>
          </CardContent>
        </Card>
      </div>

      {/* Groups List */}
      <div className="space-y-4">
        {mockGroups.map((group) => (
          <Card key={group.id} className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={group.avatar} />
                    <AvatarFallback>
                      {group.category === 'Gaming' ? <Gamepad2 className="h-8 w-8" /> :
                       group.category === 'Art' ? <Palette className="h-8 w-8" /> :
                       <Music className="h-8 w-8" />}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h4 className="text-xl font-semibold">{group.name}</h4>
                      {group.joined && (
                        <Badge className="bg-green-500 text-white border-0">Membre</Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mt-1">{group.description}</p>
                    
                    <div className="flex items-center space-x-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {group.members.toLocaleString()} membres
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Prochain événement: {new Date(group.nextEvent).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {group.badges.map((badge, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    className={group.joined ? "bg-gray-500 text-white" : "gradient-primary text-white border-0"}
                  >
                    {group.joined ? 'Membre' : 'Rejoindre'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Événements à Venir</h3>
        <Button className="gradient-nft text-white border-0">
          <Plus className="h-4 w-4 mr-2" />
          Proposer un événement
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockEvents.map((event) => (
          <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative">
              <div className={`h-32 bg-gradient-to-r ${
                event.type === 'Gaming' ? 'from-purple-500 to-blue-500' :
                event.type === 'Art' ? 'from-pink-500 to-orange-500' :
                'from-green-500 to-blue-500'
              } flex items-center justify-center text-white`}>
                <div className="text-center">
                  <div className="text-4xl mb-2">
                    {event.type === 'Gaming' ? '🎮' :
                     event.type === 'Art' ? '🎨' : '🎵'}
                  </div>
                  <h4 className="text-xl font-bold">{event.title}</h4>
                </div>
              </div>
              
              {event.registered && (
                <Badge className="absolute top-3 right-3 bg-green-500 text-white border-0">
                  Inscrit
                </Badge>
              )}
            </div>

            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(event.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {event.time}
                  </span>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {event.location}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>Participants</span>
                    <span>{event.participants}/{event.maxParticipants}</span>
                  </div>
                  <Progress value={(event.participants / event.maxParticipants) * 100} className="h-2" />
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-sm font-medium">Récompenses</span>
                <div className="flex flex-wrap gap-2">
                  {event.rewards.map((reward, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      <Trophy className="h-3 w-3 mr-1" />
                      {reward}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1">
                  Voir détails
                </Button>
                <Button 
                  className={`flex-1 ${
                    event.registered 
                      ? 'bg-gray-500 text-white' 
                      : 'gradient-primary text-white border-0'
                  }`}
                >
                  {event.registered ? 'Inscrit' : 'S\'inscrire'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quarterly Events Notice */}
      <Card className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <CardContent className="p-8 text-center">
          <Calendar className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-4">Événements Trimestriels</h3>
          <p className="mb-6 opacity-90">
            Participez aux événements trimestriels obligatoires pour débloquer des collectibles exclusifs
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Voir le calendrier complet
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderCollectibles = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Ma Collection</h3>
        <Button className="gradient-nft text-white border-0">
          <Trophy className="h-4 w-4 mr-2" />
          Marketplace
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCollectibles.map((item) => (
          <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative">
              <div className={`aspect-square bg-gradient-to-br ${
                item.category === 'Gaming' ? 'from-purple-400 to-blue-400' :
                item.category === 'Art' ? 'from-pink-400 to-orange-400' :
                'from-green-400 to-blue-400'
              } p-8`}>
                <div className="w-full h-full bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 flex flex-col items-center justify-center text-white">
                  <div className="text-4xl mb-4">
                    {item.type === 'Badge' ? '🏆' : '🎭'}
                  </div>
                  <h4 className="font-bold text-center">{item.name}</h4>
                  <p className="text-sm opacity-90 text-center">{item.type}</p>
                </div>
              </div>
              
              <Badge 
                className={`absolute top-3 right-3 ${
                  item.rarity === 'Legendary' ? 'gradient-nft' : 
                  item.rarity === 'Epic' ? 'bg-purple-500' : 'bg-blue-500'
                } text-white border-0`}
              >
                {item.rarity}
              </Badge>
            </div>

            <CardContent className="p-4 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Obtenu le</span>
                  <span className="text-sm">{new Date(item.dateEarned).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Événement</span>
                  <span className="text-sm text-muted-foreground">{item.event}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Catégorie</span>
                  <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Voir certificat NFT
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Achievement Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="h-5 w-5" />
            <span>Progression Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { name: 'Explorateur Social', current: 12, target: 20, reward: 'Badge Découvreur' },
            { name: 'Maître des Événements', current: 8, target: 15, reward: 'Figurine Organisateur' },
            { name: 'Collectionneur Avide', current: 25, target: 50, reward: 'Badge Collectionneur' }
          ].map((achievement, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{achievement.name}</span>
                <span className="text-sm text-muted-foreground">
                  {achievement.current}/{achievement.target}
                </span>
              </div>
              <Progress value={(achievement.current / achievement.target) * 100} className="h-2" />
              <div className="text-xs text-muted-foreground">
                Récompense: {achievement.reward}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12">
        <div className="container">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 gradient-success rounded-xl flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Pilier Socio-culturel</h1>
              <p className="text-purple-100">Rejoignez des communautés et participez à des événements uniques</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b bg-white sticky top-0 z-40">
        <div className="container">
          <nav className="flex space-x-8">
            {[
              { id: 'groups', label: 'Groupes', icon: <Users className="h-4 w-4" /> },
              { id: 'events', label: 'Événements', icon: <Calendar className="h-4 w-4" /> },
              { id: 'collectibles', label: 'Collection', icon: <Trophy className="h-4 w-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-purple-600 text-purple-600'
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
        {activeTab === 'groups' && renderGroups()}
        {activeTab === 'events' && renderEvents()}
        {activeTab === 'collectibles' && renderCollectibles()}
      </div>
    </div>
  );
};

export default SocialPillar;