import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Briefcase, 
  Shield, 
  Video, 
  Star, 
  MapPin, 
  Award,
  Plus,
  Eye,
  Users,
  TrendingUp,
  Zap
} from 'lucide-react';

const mockCertifications = [
  {
    id: 1,
    name: 'React Developer',
    issuer: 'Meta',
    level: 'Expert',
    validUntil: '2025-12-31',
    nftTokenId: 'NFT-001',
    verified: true,
    rarity: 'Legendary'
  },
  {
    id: 2,
    name: 'TypeScript Specialist',
    issuer: 'Microsoft',
    level: 'Advanced',
    validUntil: '2024-08-15',
    nftTokenId: 'NFT-002',
    verified: true,
    rarity: 'Rare'
  },
  {
    id: 3,
    name: 'Blockchain Developer',
    issuer: 'Ethereum Foundation',
    level: 'Intermediate',
    validUntil: '2025-06-20',
    nftTokenId: 'NFT-003',
    verified: false,
    rarity: 'Epic'
  }
];

const mockMatches = [
  {
    id: 1,
    name: 'Marie Dubois',
    title: 'Lead Developer',
    company: 'TechStart',
    compatibility: 96,
    distance: '1.2 km',
    skills: ['React', 'Node.js', 'AWS'],
    avatar: '/placeholder.svg',
    verified: true
  },
  {
    id: 2,
    name: 'Ahmed El Mansouri',
    title: 'DevOps Engineer',
    company: 'CloudCorp',
    compatibility: 89,
    distance: '3.8 km',
    skills: ['Docker', 'Kubernetes', 'CI/CD'],
    avatar: '/placeholder.svg',
    verified: true
  }
];

const ProfessionalPillar = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [newSkill, setNewSkill] = useState('');

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Profile Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="gradient-primary text-white">
          <CardContent className="p-6 text-center">
            <Award className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">5</div>
            <div className="text-sm opacity-90">Certifications</div>
          </CardContent>
        </Card>
        <Card className="gradient-success text-white">
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">127</div>
            <div className="text-sm opacity-90">Connexions Pro</div>
          </CardContent>
        </Card>
        <Card className="gradient-nft text-white">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">94%</div>
            <div className="text-sm opacity-90">Taux de Match</div>
          </CardContent>
        </Card>
        <Card className="bg-yellow-500 text-white">
          <CardContent className="p-6 text-center">
            <Eye className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">1.2K</div>
            <div className="text-sm opacity-90">Vues Profil</div>
          </CardContent>
        </Card>
      </div>

      {/* Video CV Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Video className="h-5 w-5" />
            <span>CV Vidéo</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center space-y-4">
              <Video className="h-16 w-16 mx-auto text-gray-400" />
              <div>
                <h4 className="font-semibold">Créez votre CV vidéo</h4>
                <p className="text-sm text-muted-foreground">
                  Présentez-vous en 2 minutes maximum
                </p>
              </div>
              <Button className="gradient-primary text-white border-0">
                <Video className="h-4 w-4 mr-2" />
                Enregistrer
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Matches */}
      <Card>
        <CardHeader>
          <CardTitle>Matchs Récents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockMatches.map((match) => (
              <div key={match.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={match.avatar} />
                    <AvatarFallback>{match.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold">{match.name}</h4>
                      {match.verified && <Shield className="h-4 w-4 text-green-500" />}
                    </div>
                    <p className="text-sm text-muted-foreground">{match.title} chez {match.company}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-green-600 font-medium">{match.compatibility}% compatible</span>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {match.distance}
                      </span>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Contacter
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCertifications = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Mes Certifications NFT</h3>
        <Button className="gradient-primary text-white border-0">
          <Plus className="h-4 w-4 mr-2" />
          Ajouter une certification
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCertifications.map((cert) => (
          <Card key={cert.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-400 p-6">
                <div className="w-full h-full bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 flex flex-col items-center justify-center text-white">
                  <Award className="h-12 w-12 mb-4" />
                  <h4 className="font-bold text-center">{cert.name}</h4>
                  <p className="text-sm opacity-90 text-center">{cert.issuer}</p>
                </div>
              </div>
              
              <Badge 
                className={`absolute top-3 right-3 ${
                  cert.rarity === 'Legendary' ? 'gradient-nft' : 
                  cert.rarity === 'Epic' ? 'bg-purple-500' : 'bg-blue-500'
                } text-white border-0`}
              >
                {cert.rarity}
              </Badge>

              {cert.verified && (
                <Badge className="absolute top-3 left-3 bg-green-500 text-white border-0">
                  <Shield className="h-3 w-3 mr-1" />
                  Vérifié
                </Badge>
              )}
            </div>

            <CardContent className="p-4 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Niveau</span>
                  <Badge variant="secondary">{cert.level}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Valide jusqu'au</span>
                  <span className="text-sm">{new Date(cert.validUntil).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Token ID</span>
                  <span className="text-xs font-mono text-muted-foreground">{cert.nftTokenId}</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Voir sur la blockchain
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-4">Mes Compétences</h3>
        
        {/* Add New Skill */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex space-x-4">
              <Input 
                placeholder="Ajouter une nouvelle compétence..."
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                className="flex-1"
              />
              <Button className="gradient-primary text-white border-0">
                <Plus className="h-4 w-4 mr-2" />
                Ajouter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Skills List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Compétences Techniques</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'React.js', level: 95, certified: true },
                { name: 'TypeScript', level: 88, certified: true },
                { name: 'Node.js', level: 82, certified: false },
                { name: 'Docker', level: 75, certified: false }
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{skill.name}</span>
                      {skill.certified && <Shield className="h-4 w-4 text-green-500" />}
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compétences Transversales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'Leadership', level: 90, certified: false },
                { name: 'Communication', level: 85, certified: false },
                { name: 'Gestion de projet', level: 78, certified: true },
                { name: 'Résolution de problèmes', level: 92, certified: false }
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{skill.name}</span>
                      {skill.certified && <Shield className="h-4 w-4 text-green-500" />}
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Pilier Professionnel</h1>
              <p className="text-blue-100">Gérez vos compétences et trouvez vos opportunités</p>
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
              { id: 'certifications', label: 'Certifications', icon: <Award className="h-4 w-4" /> },
              { id: 'skills', label: 'Compétences', icon: <Zap className="h-4 w-4" /> }
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
        {activeTab === 'certifications' && renderCertifications()}
        {activeTab === 'skills' && renderSkills()}
      </div>
    </div>
  );
};

export default ProfessionalPillar;