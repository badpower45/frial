import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Play } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1612409739340-d70a2865869b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGdhcmRlbiUyMGV1cm9wZWFuJTIwc3R5bGUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU2NjQyNjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Historic European-style garden"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ferial Garden:<br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              History in HD.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
            Where Port Said's past meets the giants of the Suez Canal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-4 h-auto">
              <Play className="mr-2 h-5 w-5" />
              Start Audio Guide
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 h-auto"
            >
              Explore Gallery
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full p-1">
          <div className="w-1 h-3 bg-white rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}