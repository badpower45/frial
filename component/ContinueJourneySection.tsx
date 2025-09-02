import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, MapPin, Coffee, Camera, Utensils } from 'lucide-react';

export function ContinueJourneySection() {
  const journeyOptions = [
    {
      question: "Feeling Hungry?",
      answer: "The freshest seafood of your life is minutes away at a local legend like El Borg.",
      icon: Utensils,
      color: "from-red-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1674587901966-956973adc199?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0JTIwc2FpZCUyMGVneXB0JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1NjY0MjY0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      action: "Find Seafood Spots",
      details: "🦐 El Borg Seafood • 🍽️ Bianca Cafe"
    },
    {
      question: "More History?",
      answer: "The Military Museum is right around the corner and tells the rest of Port Said's incredible story.",
      icon: Camera,
      color: "from-blue-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1730190202234-49dd889f0ea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNzaXZlJTIwc2hpcHMlMjBzdWV6JTIwY2FuYWx8ZW58MXx8fHwxNzU2NjQyNjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      action: "Explore Museums",
      details: "🏛️ Port Said Military Museum • 🏢 Suez Canal Authority Building • 🗼 Port Said Lighthouse"
    },
    {
      question: "Need a Coffee & a Vibe?",
      answer: "Hit up the Central Perk Cafe for a cool, nostalgic break.",
      icon: Coffee,
      color: "from-amber-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1692992258436-9e03ae4279ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMHRyYXZlbCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1NjY0MjY0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      action: "Find Cafes",
      details: "☕ Central Perk Cafe • 🥐 Bianca Cafe"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Okay, What's Next? 🤔
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just leave after the garden. Port Said has layers of stories waiting for you. 
            Here's your curated continuation guide:
          </p>
        </div>
        
        {/* Journey Cards */}
        <div className="space-y-8">
          {journeyOptions.map((option, index) => (
            <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <ImageWithFallback
                    src={option.image}
                    alt={option.question}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${option.color} opacity-20`}></div>
                </div>
                
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`bg-gradient-to-r ${option.color} p-3 rounded-full text-white`}>
                      <option.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {option.question}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    {option.answer}
                  </p>
                  
                  <div className="bg-gray-100 rounded-lg p-3 mb-6">
                    <p className="text-sm text-gray-600 font-medium">
                      {option.details}
                    </p>
                  </div>
                  
                  <Button className={`bg-gradient-to-r ${option.color} hover:opacity-90 text-white group`}>
                    <MapPin className="mr-2 h-4 w-4" />
                    {option.action}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Bottom Navigation */}
        <div className="mt-16 text-center">
          <div className="bg-black rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Want the full Port Said experience? 🗺️
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Our app creates a custom route connecting all these spots based on your interests and time.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Create My Route
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}