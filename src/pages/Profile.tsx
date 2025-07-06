import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  User, 
  MapPin, 
  Shield, 
  Star, 
  Award,
  Heart,
  Users,
  Home,
  Briefcase,
  Settings,
  Edit,
  Camera,
  Wallet,
  TrendingUp
} from 'lucide-react';
import Web3Wallet from '@/components/Web3Wallet';

interface UserProfile {
  name: string;
  age: number;
  location: string;
  bio: string;
  joinDate: string;
  verified: boolean;
  reputation: number;
  avatar: string;
}

interface PillarStats {
  professional: {
    certifications: number;
    matches: number;
    views: number;
  };
  affective: {
    connections: number;
    figurines: number;
    eyeContacts: number;
  };
  social: {
    groups: number;
    events: number;
    badges: number;
  };
  realEstate: {
    properties: number;
    contracts: number;
    revenue: string;
  };
}

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);

  const mockProfile: UserProfile = {
    name: 'Alexandra Martin',
    age: 28,
    location: 'Paris, France',
    bio: 'Développeuse passionnée, amatrice d\'art et investisseuse immobilière. Toujours à la recherche de nouvelles connexions et opportunités.',
    joinDate: '2024-01-15',
    verified: true,
    reputation: 96,
    avatar: '/placeholder.svg'
  };

  const mockStats: PillarStats = {
    professional: {
      certifications: 5,
      matches: 127,
      views: 1247
    },
    affective: {
      connections: 23,
      figurines: 15,
      eyeContacts: 7
    },
    social: {
      groups: 12,
      events: 8,
      badges: 25
    },
    realEstate: {
      properties: 2,
      contracts: 3,
      revenue: '4,200€'
    }
  };

  const achievements = [
    { name: 'Early Adopter', description: 'Parmi les premiers utilisateurs', icon: '🚀', rarity: 'Legendary' },
    { name: 'Super Connector', description: '100+ connexions réalisées', icon: '🤝', rarity: 'Epic' },
    { name: 'NFT Collector', description: '20+ NFTs collectés', icon: '💎', rarity: 'Rare' },
    { name: 'Mentor', description: 'A aidé 10+ personnes', icon: '🎓', rarity: 'Rare' }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <CardContent className="relative p-6">
          <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <Avatar className="w-24 h-24 border-4 border-white -mt-16">
                <AvatarImage src={mockProfile.avatar} />
                <AvatarFallback className="text-2xl bg-gray-200">{mockProfile.name[0]}</AvatarFallback>
              </Avatar>
              <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                <Camera className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-3">
                    <h1 className="text-2xl font-bold">{mockProfile.name}</h1>
                    {mockProfile.verified && (
                      <Badge className="bg-blue-500 text-white border-0">
                        <Shield className="h-3 w-3 mr-1" />
                        Vérifié
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-muted-foreground mt-1">
                    <span>{mockProfile.age} ans</span>
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {mockProfile.location}
                    </span>
                    <span>Membre depuis {new Date(mockProfile.joinDate).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <Button onClick={() => setIsEditing(!isEditing)} variant="outline">
                  <Edit className="h-4 w-4 mr-2" />
                  {isEditing ? 'Annuler' : 'Modifier'}
                </Button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Réputation</span>
                  <span className="text-sm font-bold text-green-600">{mockProfile.reputation}%</span>
                </div>
                <Progress value={mockProfile.reputation} className="h-2" />
              </div>

              {isEditing ? (
                <div className="space-y-4">
                  <Textarea 
                    value={mockProfile.bio}
                    placeholder="Parlez-nous de vous..."
                    className="min-h-[100px]"
                  />
                  <div className="flex space-x-2">
                    <Button className="gradient-primary text-white border-0">
                      Sauvegarder
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Annuler
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground">{mockProfile.bio}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pillar Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <Badge variant="secondary">{mockStats.professional.certifications}</Badge>
            </div>
            <div>
              <h3 className="font-semibold">Professionnel</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>{mockStats.professional.matches} matchs</div>
                <div>{mockStats.professional.views} vues profil</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 gradient-nft rounded-xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <Badge variant="secondary">{mockStats.affective.connections}</Badge>
            </div>
            <div>
              <h3 className="font-semibold">Affectif</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>{mockStats.affective.figurines} figurines</div>
                <div>{mockStats.affective.eyeContacts} eye contacts</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 gradient-success rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <Badge variant="secondary">{mockStats.social.groups}</Badge>
            </div>
            <div>
              <h3 className="font-semibold">Social</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>{mockStats.social.events} événements</div>
                <div>{mockStats.social.badges} badges</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <Home className="h-6 w-6 text-white" />
              </div>
              <Badge variant="secondary">{mockStats.realEstate.properties}</Badge>
            </div>
            <div>
              <h3 className="font-semibold">Immobilier</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>{mockStats.realEstate.contracts} contrats</div>
                <div>{mockStats.realEstate.revenue}/mois</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5" />
            <span>Achievements Débloques</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                <div className="text-3xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold">{achievement.name}</h4>
                    <Badge 
                      className={`text-xs ${
                        achievement.rarity === 'Legendary' ? 'gradient-nft text-white border-0' :
                        achievement.rarity === 'Epic' ? 'bg-purple-500 text-white border-0' :
                        'bg-blue-500 text-white border-0'
                      }`}
                    >
                      {achievement.rarity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderWallet = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Wallet & Blockchain</h3>
      <Web3Wallet />
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Paramètres</h3>
      
      <Card>
        <CardHeader>
          <CardTitle>Confidentialité</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Profil public</h4>
              <p className="text-sm text-muted-foreground">Votre profil est visible par tous</p>
            </div>
            <Button variant="outline" size="sm">Activé</Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Géolocalisation</h4>
              <p className="text-sm text-muted-foreground">Partager votre position pour les matchs</p>
            </div>
            <Button variant="outline" size="sm">Activé</Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Analytics</h4>
              <p className="text-sm text-muted-foreground">Permettre l'analyse de vos données</p>
            </div>
            <Button variant="outline" size="sm">Activé</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Nouveaux matchs</h4>
              <p className="text-sm text-muted-foreground">Notification pour les nouveaux matchs</p>
            </div>
            <Button variant="outline" size="sm">Activé</Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Messages</h4>
              <p className="text-sm text-muted-foreground">Notification pour les nouveaux messages</p>
            </div>
            <Button variant="outline" size="sm">Activé</Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Événements</h4>
              <p className="text-sm text-muted-foreground">Rappels d'événements à venir</p>
            </div>
            <Button variant="outline" size="sm">Activé</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-12">
        <div className="container">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Mon Profil</h1>
              <p className="text-gray-300">Gérez votre identité numérique et vos paramètres</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b bg-white sticky top-0 z-40">
        <div className="container">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Vue d\'ensemble', icon: <TrendingUp className="h-4 w-4" /> },
              { id: 'wallet', label: 'Wallet', icon: <Wallet className="h-4 w-4" /> },
              { id: 'settings', label: 'Paramètres', icon: <Settings className="h-4 w-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
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
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'wallet' && renderWallet()}
        {activeTab === 'settings' && renderSettings()}
      </div>
    </div>
  );
};

export default Profile;