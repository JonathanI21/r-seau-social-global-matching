
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  Heart, 
  Users, 
  Home, 
  Shield, 
  Zap, 
  MapPin,
  ArrowRight,
  Star
} from 'lucide-react';

const pillars = [
  {
    id: 'professional',
    title: 'Pilier Professionnel',
    icon: Briefcase,
    emoji: '💼',
    description: 'Matching de compétences certifiées blockchain avec géolocalisation intelligente',
    features: [
      'CV vidéo interactif',
      'Certifications NFT',
      'Matching radius 50km',
      'Évaluation par pairs'
    ],
    gradient: 'from-blue-500 to-blue-700',
    bgGradient: 'gradient-primary'
  },
  {
    id: 'affective',
    title: 'Pilier Affectif',
    icon: Heart,
    emoji: '💘',
    description: 'Système "Eye contact" temps réel et figurines NFT personnalisables',
    features: [
      'Missed connections',
      'Figurines NFT uniques',
      'Économie du troc',
      'Rencontres géolocalisées'
    ],
    gradient: 'from-pink-500 to-red-500',
    bgGradient: 'gradient-nft'
  },
  {
    id: 'sociocultural',
    title: 'Pilier Socio-culturel',
    icon: Users,
    emoji: '🎮',
    description: 'Groupes thématiques et événements avec collectibles NFT',
    features: [
      'Groupes d\'intérêts',
      'Événements trimestriels',
      'Figurines collectors',
      'Badges de participation'
    ],
    gradient: 'from-purple-500 to-indigo-500',
    bgGradient: 'gradient-success'
  },
  {
    id: 'real-estate',
    title: 'Pilier Immobilier',
    icon: Home,
    emoji: '🏠',
    description: 'Plateforme décentralisée bailleurs/locataires avec smart contracts',
    features: [
      'Recherche proximité',
      'Gestion décentralisée',
      'Contrats intelligents',
      'Abonnement premium'
    ],
    gradient: 'from-green-500 to-emerald-600',
    bgGradient: 'from-green-400 to-emerald-500'
  }
];

const PillarsSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge className="gradient-nft border-0 text-white px-4 py-2">
            🏗️ Architecture Multi-Piliers
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            4 Dimensions, 1 Écosystème
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Chaque pilier est interconnecté via votre profil NFT certifié, 
            créant une expérience utilisateur unique et sécurisée.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <Card 
              key={pillar.id} 
              className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden relative"
            >
              <div className={`absolute inset-0 ${pillar.bgGradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl ${pillar.bgGradient} flex items-center justify-center text-white text-xl`}>
                      {pillar.emoji}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{pillar.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        NFT Enabled
                      </Badge>
                    </div>
                  </div>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="group-hover:bg-gray-100 transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="relative z-10 space-y-4">
                <p className="text-muted-foreground">
                  {pillar.description}
                </p>

                <div className="space-y-2">
                  {pillar.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">Blockchain sécurisé</span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">4.9</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="gradient-primary text-white border-0">
            Explorer tous les piliers
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
