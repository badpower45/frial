import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Headphones, Play } from 'lucide-react';

export function HiddenLayerSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">
            Think you just came here for a walk? 🤔
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              <strong>You're missing the best part.</strong> This garden has secrets, and our audio guide is the key. 
              Pop in your headphones and hit play to unlock the real stories the statues can't tell you. 
              <span className="bg-yellow-200 px-2 py-1 rounded font-semibold">It's the ultimate experience hack.</span>
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1596351990471-65a408eff304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBzdGF0dWVzJTIwZm91bnRhaW4lMjBoaXN0b3JpY3xlbnwxfHx8fDE3NTY2NDI2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Historic garden fountain with statues"
              className="w-full rounded-2xl shadow-2xl"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                size="lg" 
                className="bg-black/80 hover:bg-black text-white rounded-full w-20 h-20 p-0 shadow-2xl"
              >
                <Play className="h-8 w-8 ml-1" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                  <Headphones className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">The Hidden Layer 🎧</h3>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</div>
                  <p><strong>15 hidden stories</strong> behind every statue and corner</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</div>
                  <p><strong>Original recordings</strong> from local historians</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</div>
                  <p><strong>GPS-triggered</strong> stories as you walk</p>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                Start Your Audio Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}