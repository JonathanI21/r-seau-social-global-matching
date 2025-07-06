import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { 
  Home, 
  MapPin, 
  Euro, 
  Users, 
  Shield, 
  Star,
  Search,
  Filter,
  Calendar,
  FileContract,
  TrendingUp,
  Heart,
  Eye,
  MessageCircle
} from 'lucide-react';

const mockProperties = [
  {
    id: 1,
    title: 'Studio moderne centre-ville',
    address: '15 rue de Rivoli, Paris 1er',
    price: 1200,
    type: 'Studio',
    size: 25,
    available: '2024-03-01',
    landlord: 'Marie Dubois',
    landlordAvatar: '/placeholder.svg',
    verified: true,
    images: ['🏠'],
    features: ['Meublé', 'Internet', 'Proche métro'],
    distance: '0.8 km',
    rating: 4.8,
    smartContract: true
  },
  {
    id: 2,
    title: 'Appartement 2 pièces lumineux',
    address: '42 avenue Montaigne, Paris 8ème',
    price: 2800,
    type: '2 pièces',
    size: 55,
    available: '2024-02-20',
    landlord: 'Jean Martin',
    landlordAvatar: '/placeholder.svg',
    verified: true,
    images: ['🏢'],
    features: ['Balcon', 'Parking', 'Ascenseur'],
    distance: '1.2 km',
    rating: 4.9,
    smartContract: true
  },
  {
    id: 3,
    title: 'Maison avec jardin',
    address: '8 allée des Roses, Neuilly-sur-Seine',
    price: 3500,
    type: 'Maison',
    size: 120,
    available: '2024-03-15',
    landlord: 'Sophie Laurent',
    landlordAvatar: '/placeholder.svg',
    verified: false,
    images: ['🏡'],
    features: ['Jardin', 'Garage', 'Terrasse'],
    distance: '5.2 km',
    rating: 4.7,
    smartContract: false
  }
];

const mockContracts = [
  {
    id: 1,
    property: 'Studio Châtelet',
    landlord: 'Marie Dubois',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    rent: 1200,
    deposit: 2400,
    status: 'active',
    smartContractAddress: '0x742d35cc6ab48e5e9e4f23c6b8f6e9a1b8f6e9a1'
  },
  {
    id: 2,
    property: 'Appartement République',
    tenant: 'Alex Chen',
    startDate: '2024-02-01',
    endDate: '2025-01-31',
    rent: 1800,
    deposit: 3600,
    status: 'pending',
    smartContractAddress: '0x851e46dc7cc8f2c8e4f23c6b8f6e9a1b8f6e9a2'
  }
];

const RealEstatePillar = () => {
  const [activeTab, setActiveTab] = useState('search');
  const [searchFilters, setSearchFilters] = useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    minSize: ''
  });

  const renderSearch = () => (
    <div className="space-y-6">
      {/* Search Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Recherche de Logement</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium">Type</label>
              <Input 
                placeholder="Studio, 2 pièces..."
                value={searchFilters.type}
                onChange={(e) => setSearchFilters({...searchFilters, type: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Prix min (€)</label>
              <Input 
                type="number"
                placeholder="800"
                value={searchFilters.minPrice}
                onChange={(e) => setSearchFilters({...searchFilters, minPrice: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Prix max (€)</label>
              <Input 
                type="number"
                placeholder="2000"
                value={searchFilters.maxPrice}
                onChange={(e) => setSearchFilters({...searchFilters, maxPrice: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Surface min (m²)</label>
              <Input 
                type="number"
                placeholder="25"
                value={searchFilters.minSize}
                onChange={(e) => setSearchFilters({...searchFilters, minSize: e.target.value})}
              />
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <Button className="gradient-primary text-white border-0">
              <Search className="h-4 w-4 mr-2" />
              Rechercher
            </Button>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtres avancés
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="gradient-primary text-white">
          <CardContent className="p-6 text-center">
            <Home className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">247</div>
            <div className="text-sm opacity-90">Logements Disponibles</div>
          </CardContent>
        </Card>
        <Card className="gradient-success text-white">
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">89</div>
            <div className="text-sm opacity-90">Propriétaires Vérifiés</div>
          </CardContent>
        </Card>
        <Card className="gradient-nft text-white">
          <CardContent className="p-6 text-center">
            <FileContract className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">156</div>
            <div className="text-sm opacity-90">Smart Contracts</div>
          </CardContent>
        </Card>
        <Card className="bg-yellow-500 text-white">
          <CardContent className="p-6 text-center">
            <Star className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">4.8</div>
            <div className="text-sm opacity-90">Note Moyenne</div>
          </CardContent>
        </Card>
      </div>

      {/* Properties List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Logements Recommandés</h3>
        {mockProperties.map((property) => (
          <Card key={property.id} className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start space-x-6">
                <div className="text-6xl">{property.images[0]}</div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-3">
                        <h4 className="text-xl font-semibold">{property.title}</h4>
                        {property.verified && (
                          <Badge className="bg-green-500 text-white border-0">
                            <Shield className="h-3 w-3 mr-1" />
                            Vérifié
                          </Badge>
                        )}
                        {property.smartContract && (
                          <Badge className="gradient-nft text-white border-0">
                            Smart Contract
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {property.address}
                        </span>
                        <span>{property.distance}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">
                        {property.price}€
                        <span className="text-sm font-normal text-muted-foreground">/mois</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        {property.rating}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Type:</span> {property.type}
                    </div>
                    <div>
                      <span className="font-medium">Surface:</span> {property.size}m²
                    </div>
                    <div>
                      <span className="font-medium">Disponible:</span> {new Date(property.available).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={property.landlordAvatar} />
                        <AvatarFallback>{property.landlord[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{property.landlord}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {property.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      Voir détails
                    </Button>
                    <Button variant="outline">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button className="gradient-primary text-white border-0">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contacter
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderContracts = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Mes Contrats</h3>
        <Button className="gradient-nft text-white border-0">
          <FileContract className="h-4 w-4 mr-2" />
          Nouveau contrat
        </Button>
      </div>

      <div className="space-y-4">
        {mockContracts.map((contract) => (
          <Card key={contract.id} className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center space-x-3">
                    <h4 className="text-xl font-semibold">{contract.property}</h4>
                    <Badge 
                      className={`border-0 ${
                        contract.status === 'active' ? 'bg-green-500 text-white' :
                        contract.status === 'pending' ? 'bg-yellow-500 text-white' :
                        'bg-gray-500 text-white'
                      }`}
                    >
                      {contract.status === 'active' ? 'Actif' :
                       contract.status === 'pending' ? 'En attente' : 'Terminé'}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Période:</span><br />
                      {new Date(contract.startDate).toLocaleDateString()} - {new Date(contract.endDate).toLocaleDateString()}
                    </div>
                    <div>
                      <span className="font-medium">Loyer mensuel:</span><br />
                      <span className="text-lg font-bold text-green-600">{contract.rent}€</span>
                    </div>
                    <div>
                      <span className="font-medium">Dépôt de garantie:</span><br />
                      <span className="font-semibold">{contract.deposit}€</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">Partie:</span>
                      <span className="text-sm">
                        {contract.landlord ? `Propriétaire: ${contract.landlord}` : `Locataire: ${contract.tenant}`}
                      </span>
                    </div>
                    
                    <div className="space-y-1">
                      <span className="text-sm font-medium">Smart Contract:</span>
                      <div className="text-xs font-mono text-muted-foreground bg-gray-100 p-2 rounded">
                        {contract.smartContractAddress}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <FileContract className="h-4 w-4 mr-2" />
                      Voir contrat
                    </Button>
                    <Button variant="outline" size="sm">
                      Voir sur blockchain
                    </Button>
                    <Button size="sm" className="gradient-primary text-white border-0">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Smart Contract Info */}
      <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <CardContent className="p-8 text-center">
          <Shield className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-4">Contrats Intelligents</h3>
          <p className="mb-6 opacity-90">
            Tous vos contrats sont sécurisés par la blockchain et automatiquement exécutés
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm opacity-90">Sécurisé</div>
            </div>
            <div>
              <div className="text-2xl font-bold">0%</div>
              <div className="text-sm opacity-90">Frais cachés</div>
            </div>
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm opacity-90">Automatique</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Tableau de Bord Propriétaire</h3>
      
      {/* Revenue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="gradient-success text-white">
          <CardContent className="p-6 text-center">
            <Euro className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">3,600€</div>
            <div className="text-sm opacity-90">Revenus ce mois</div>
          </CardContent>
        </Card>
        <Card className="gradient-primary text-white">
          <CardContent className="p-6 text-center">
            <Home className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm opacity-90">Propriétés louées</div>
          </CardContent>
        </Card>
        <Card className="gradient-nft text-white">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">98%</div>
            <div className="text-sm opacity-90">Taux d'occupation</div>
          </CardContent>
        </Card>
        <Card className="bg-yellow-500 text-white">
          <CardContent className="p-6 text-center">
            <Star className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">4.9</div>
            <div className="text-sm opacity-90">Note moyenne</div>
          </CardContent>
        </Card>
      </div>

      {/* Premium Features */}
      <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Abonnement Premium Propriétaire</h3>
              <ul className="space-y-2 opacity-90">
                <li>✓ Gestion automatisée des contrats</li>
                <li>✓ Matching prioritaire des locataires</li>
                <li>✓ Analytics avancés</li>
                <li>✓ Support 24/7</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">9.99€</div>
              <div className="text-sm opacity-90">/mois</div>
              <Button size="lg" className="mt-4 bg-white text-orange-600 hover:bg-gray-100">
                Souscrire
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Activité Récente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: 'Nouveau locataire intéressé', property: 'Studio Châtelet', time: '2h' },
              { action: 'Contrat signé', property: 'Appartement République', time: '1j' },
              { action: 'Paiement reçu', property: 'Maison Neuilly', time: '2j' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium">{activity.action}</div>
                  <div className="text-sm text-muted-foreground">{activity.property}</div>
                </div>
                <div className="text-sm text-muted-foreground">Il y a {activity.time}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12">
        <div className="container">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center">
              <Home className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Pilier Immobilier</h1>
              <p className="text-green-100">Trouvez votre logement idéal ou gérez vos biens en toute simplicité</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b bg-white sticky top-0 z-40">
        <div className="container">
          <nav className="flex space-x-8">
            {[
              { id: 'search', label: 'Recherche', icon: <Search className="h-4 w-4" /> },
              { id: 'contracts', label: 'Mes Contrats', icon: <FileContract className="h-4 w-4" /> },
              { id: 'dashboard', label: 'Propriétaire', icon: <TrendingUp className="h-4 w-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-green-600 text-green-600'
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
        {activeTab === 'search' && renderSearch()}
        {activeTab === 'contracts' && renderContracts()}
        {activeTab === 'dashboard' && renderDashboard()}
      </div>
    </div>
  );
};

export default RealEstatePillar;