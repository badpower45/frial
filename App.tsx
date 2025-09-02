import { HeroSection } from './components/HeroSection';
import { HiddenLayerSection } from './components/HiddenLayerSection';
import { ProTipsSection } from './components/ProTipsSection';
import { ContinueJourneySection } from './components/ContinueJourneySection';
import { JoinStorySection } from './components/JoinStorySection';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full screen with video-style layout */}
      <HeroSection />
      
      {/* The Hidden Layer Section - Bold question format */}
      <HiddenLayerSection />
      
      {/* Insider's Pro-Tips Section - Fast, scannable checklist */}
      <ProTipsSection />
      
      {/* Continue Your Journey Section - Interactive Q&A cards */}
      <ContinueJourneySection />
      
      {/* Join the Story Section - Community call to action */}
      <JoinStorySection />
    </div>
  );
}