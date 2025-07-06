
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { 
  MapPin, 
  Heart, 
  X, 
  Star, 
  Briefcase, 
  Users, 
  Home,
  Zap,
  Shield
} from 'lucide-react';

const mockMatches = [
  {
    id: 1,
    name: 'Sarah Chen',
    age: 28,
    distance: '2.3 km',
    type: 'professional',
    title: 'UX Designer',
    company: 'TechCorp',
    compatibility: 94,
    interests: ['Design', 'NFT', 'Web3'],
    verified: true,
    avatar: '/placeholder.svg'
  },
  {
    id: 2,
    name: 'Marc Dubois',
    age: 32,
    distance: '1.8 km',
    type: 'affective',
    title: 'Développeur',
    company: 'Startup Inc',
    compatibility: 87,
    interests: ['Gaming', 'Crypto', 'Voyages'],
    verified: true,
    avatar: '/placeholder.svg'
  },
  {
    id: 3,
    name: 'Emma Laurent',
    age: 26,
    distance: '3.1 km',
    type: 'sociocultural',
    title: 'Community Manager',
    company: 'Social Media',
    compatibility: 91,
    interests: ['Art', 'Musique', 'Events'],
    verified: false,
    avatar: '/placeholder.svg'
  }
];

const MatchingSection = () => {
  const [currentMatch, setCurrentMatch] = useState(0);
  const [likedMatches, setLikedMatches] = useState<number[]>([]);

  const handleLike = () => {
    setLikedMatches(prev => [...prev, mockMatches[currentMatch].id]);
    nextMatch();
  };

  const handlePass = () => {
    nextMatch();
  };

  const nextMatch = () => {
    setCurrentMatch(prev => (prev + 1) % mockMatches.length);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'professional': return <Briefcase className="h-4 w-4" />;
      case 'affective': return <Heart className="h-4 w-4" />;
      case 'sociocultural': return <Users className="h-4 w-4" />;
      case 'real-estate': return <Home className="h-4 w-4" />;
      default: return <Star className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'professional': return 'bg-blue-500';
      case 'affective': return 'bg-pink-500';
      case 'sociocultural': return 'bg-purple-500';
      case 'real-estate': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const match = mockMatches[currentMatch];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge className="gradient-nft border-0 text-white px-4 py-2">
            🎯 Matching Intelligence
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Trouvez vos
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              connexions parfaites
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Notre IA analyse vos NFTs, compétences et préférences pour vous proposer 
            des matchs pertinents dans tous les piliers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Matching Card */}
          <div className="lg:col-span-2">
            <Card className="max-w-md mx-auto shadow-2xl overflow-hidden">
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-purple-400 to-pink-400 p-8">
                  <div className="w-full h-full bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <Avatar className="w-32 h-32">
                      <AvatarImage src={match.avatar} />
                      <AvatarFallback className="text-4xl bg-white/30">
                        {match.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                <Badge 
                  className={`absolute top-4 right-4 ${getTypeColor(match.type)} text-white border-0 flex items-center space-x-1`}
                >
                  {getTypeIcon(match.type)}
                  <span className="capitalize">{match.type}</span>
                </Badge>

                {match.verified && (
                  <Badge className="absolute top-4 left-4 bg-green-500 text-white border-0 flex items-center space-x-1">
                    <Shield className="h-3 w-3" />
                    <span>Vérifié</span>
                  </Badge>
                )}
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{match.name}, {match.age}</h3>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{match.distance}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {match.title} chez {match.company}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Compatibilité</span>
                    <span className="text-sm font-bold text-green-600">{match.compatibility}%</span>
                  </div>
                  <Progress value={match.compatibility} className="h-2" />
                </div>

                <div className="space-y-2">
                  <span className="text-sm font-medium">Intérêts communs</span>
                  <div className="flex flex-wrap gap-2">
                    {match.interests.map((interest, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="flex-1 border-red-200 hover:bg-red-50"
                    onClick={handlePass}
                  >
                    <X className="h-5 w-5 text-red-500" />
                  </Button>
                  <Button 
                    size="lg" 
                    className="flex-1 gradient-nft text-white border-0"
                    onClick={handleLike}
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Matching Stats */}
          <div className="space-y-6">
            <Card className="gradient-primary text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Vos Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Profils vus</span>
                    <span className="font-semibold">127</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Likes donnés</span>
                    <span className="font-semibold">43</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Matches</span>
                    <span className="font-semibold">15</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Conversations</span>
                    <span className="font-semibold">8</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Filtres Actifs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Distance max</span>
                    <Badge variant="secondary">50 km</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Âge</span>
                    <Badge variant="secondary">25-35 ans</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Piliers</span>
                    <Badge variant="secondary">Tous</Badge>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Modifier les filtres
                </Button>
              </CardContent>
            </Card>

            <Card className="gradient-success text-white">
              <CardContent className="p-6 text-center space-y-4">
                <Heart className="h-8 w-8 mx-auto" />
                <h4 className="font-bold">Premium Matching</h4>
                <p className="text-sm opacity-90">
                  Débloquez des fonctionnalités avancées
                </p>
                <Button className="w-full bg-white text-green-600 hover:bg-gray-100">
                  Découvrir Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchingSection;
