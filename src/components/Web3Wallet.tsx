import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Wallet, 
  Shield, 
  Copy, 
  ExternalLink, 
  Zap, 
  TrendingUp,
  Eye,
  RefreshCw
} from 'lucide-react';

interface WalletStats {
  balance: string;
  nfts: number;
  transactions: number;
  reputation: number;
}

interface NFTAsset {
  id: string;
  name: string;
  type: string;
  rarity: string;
  value: string;
  image: string;
}

const Web3Wallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const mockWalletStats: WalletStats = {
    balance: '2.847',
    nfts: 23,
    transactions: 156,
    reputation: 95
  };

  const mockNFTs: NFTAsset[] = [
    {
      id: '1',
      name: 'React Master Certification',
      type: 'Certification',
      rarity: 'Legendary',
      value: '0.5 ETH',
      image: '🎓'
    },
    {
      id: '2',
      name: 'Couple Étoilé',
      type: 'Figurine',
      rarity: 'Rare',
      value: '0.2 ETH',
      image: '💑'
    },
    {
      id: '3',
      name: 'Gaming Champion',
      type: 'Badge',
      rarity: 'Epic',
      value: '0.1 ETH',
      image: '🏆'
    }
  ];

  const connectWallet = async () => {
    setIsLoading(true);
    
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnected(true);
      setWalletAddress('0x742d35cc6ab48e5e9e4f23c6b8f6e9a1b8f6e9a1');
      setIsLoading(false);
    }, 2000);
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress('');
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (!isConnected) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center space-x-2">
            <Wallet className="h-6 w-6" />
            <span>Connecter votre Wallet</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto gradient-nft rounded-full flex items-center justify-center">
              <Wallet className="h-10 w-10 text-white" />
            </div>
            <p className="text-muted-foreground">
              Connectez votre wallet Web3 pour accéder à vos NFTs et certifications
            </p>
          </div>

          <div className="space-y-4">
            <Button 
              onClick={connectWallet}
              disabled={isLoading}
              className="w-full gradient-primary text-white border-0"
              size="lg"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Connexion...
                </>
              ) : (
                <>
                  <Wallet className="h-4 w-4 mr-2" />
                  Connecter MetaMask
                </>
              )}
            </Button>

            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" disabled>
                WalletConnect
              </Button>
              <Button variant="outline" size="sm" disabled>
                Coinbase Wallet
              </Button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Assurez-vous d'avoir un wallet Web3 installé
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Wallet Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                <Wallet className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Wallet connecté</span>
                  <Shield className="h-4 w-4 text-green-500" />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-mono text-muted-foreground">
                    {formatAddress(walletAddress)}
                  </span>
                  <Button size="sm" variant="ghost" onClick={copyAddress}>
                    <Copy className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={disconnectWallet}>
              Déconnecter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Wallet Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{mockWalletStats.balance} ETH</div>
            <div className="text-sm text-muted-foreground">Balance</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{mockWalletStats.nfts}</div>
            <div className="text-sm text-muted-foreground">NFTs</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{mockWalletStats.transactions}</div>
            <div className="text-sm text-muted-foreground">Transactions</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">{mockWalletStats.reputation}%</div>
            <div className="text-sm text-muted-foreground">Réputation</div>
          </CardContent>
        </Card>
      </div>

      {/* NFT Collection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Ma Collection NFT</span>
            <Button size="sm" variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              Voir tout
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mockNFTs.map((nft) => (
              <Card key={nft.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-4xl mb-2">{nft.image}</div>
                      <h4 className="font-semibold text-sm">{nft.name}</h4>
                      <p className="text-xs text-muted-foreground">{nft.type}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Badge 
                        className={`text-xs ${
                          nft.rarity === 'Legendary' ? 'gradient-nft text-white border-0' :
                          nft.rarity === 'Epic' ? 'bg-purple-500 text-white border-0' :
                          'bg-blue-500 text-white border-0'
                        }`}
                      >
                        {nft.rarity}
                      </Badge>
                      <span className="text-sm font-semibold text-green-600">{nft.value}</span>
                    </div>

                    <Button size="sm" variant="outline" className="w-full">
                      Voir détails
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Transactions Récentes</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { type: 'Mint', asset: 'React Certification', amount: '+1 NFT', time: '2h', status: 'success' },
              { type: 'Trade', asset: 'Figurine Couple', amount: '0.2 ETH', time: '1j', status: 'success' },
              { type: 'Stake', asset: 'TGM Tokens', amount: '500 TGM', time: '3j', status: 'pending' }
            ].map((tx, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    tx.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'
                  }`} />
                  <div>
                    <div className="font-medium text-sm">{tx.type} - {tx.asset}</div>
                    <div className="text-xs text-muted-foreground">Il y a {tx.time}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-sm">{tx.amount}</div>
                  <Badge variant="secondary" className="text-xs">
                    {tx.status === 'success' ? 'Confirmé' : 'En attente'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Web3Wallet;