
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PillarsSection from '@/components/PillarsSection';
import NFTSection from '@/components/NFTSection';
import MatchingSection from '@/components/MatchingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PillarsSection />
        <NFTSection />
        <MatchingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
