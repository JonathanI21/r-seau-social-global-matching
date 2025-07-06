
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Zap, Users, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-5" />
      
      <div className="container relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Badge className="gradient-nft border-0 text-white px-4 py-2">
              🚀 Révolution Web3 & NFT
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Le réseau social qui
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                connecte vraiment
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              4 dimensions, 1 plateforme. Rencontres professionnelles, relations affectives, 
              activités sociales et immobilier, le tout sécurisé par la blockchain.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white border-0 group">
              Commencer l'aventure
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Découvrir les NFT
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">10K+</div>
              <div className="text-sm text-muted-foreground">Utilisateurs actifs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">2.5K</div>
              <div className="text-sm text-muted-foreground">NFT créés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">850</div>
              <div className="text-sm text-muted-foreground">Matchs réussis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">95%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 gradient-nft rounded-full opacity-20 float-animation" />
      <div className="absolute bottom-20 right-10 w-12 h-12 gradient-success rounded-full opacity-20 float-animation" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 right-20 w-8 h-8 gradient-primary rounded-full opacity-20 float-animation" style={{animationDelay: '2s'}} />
    </section>
  );
};

export default HeroSection;
