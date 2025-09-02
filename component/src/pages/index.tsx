import { HeroSection } from '../components/HeroSection';
import { HiddenLayerSection } from '../components/HiddenLayerSection';
import { ProTipsSection } from '../components/ProTipsSection';
import { ContinueJourneySection } from '../components/ContinueJourneySection';
import { JoinStorySection } from '../components/JoinStorySection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HiddenLayerSection />
      <ProTipsSection />
      <ContinueJourneySection />
      <JoinStorySection />
    </div>
  );
}
