import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function ProTipsSection() {
  const tips = [
    {
      emoji: "📸",
      title: "The Ultimate Ship Shot",
      description: "Don't snap from the entrance. Walk left along the water. Find the old cannon. Frame your shot with that in the foreground when a giant ship passes. Trust us.",
      badge: "Photography Hack",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      emoji: "🎧",
      title: "Story Sync-Up",
      description: "Find the main fountain. Play audio track #4 right there. The story you'll hear is about that specific spot, and it will give you goosebumps.",
      badge: "Audio Secret",
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      emoji: "🤫",
      title: "The Quiet Escape",
      description: "All the way in the back, there are benches under massive, ancient trees. It's the perfect spot to escape, chill, and finish the audio guide.",
      badge: "Hidden Gem",
      color: "bg-gradient-to-r from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, white 2px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-2 rounded-full font-bold mb-6">
            <span>🎯</span>
            <span>MISSION BRIEFING</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Your Mission, Should You Choose to Accept It:
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Three insider secrets that will level up your Ferial Garden experience from tourist to explorer.
          </p>
        </div>
        
        {/* Tips Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tips.map((tip, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className={`${tip.color} p-3 rounded-xl text-2xl`}>
                  {tip.emoji}
                </div>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                  {tip.badge}
                </Badge>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">
                {tip.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {tip.description}
              </p>
              
              <div className="flex items-center gap-2 mt-4 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Verified by locals</span>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-black">
          <h3 className="text-2xl font-bold mb-2">
            Ready to unlock the secrets? 🔓
          </h3>
          <p className="text-lg mb-4">
            Download our app and get GPS-guided access to all these hidden spots
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-black text-white px-6 py-3 rounded-full font-bold">
              📱 Download EgySafary App
            </div>
            <div className="bg-white text-black px-6 py-3 rounded-full font-bold border-2 border-black">
              🗺️ Get Directions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}