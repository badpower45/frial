import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Instagram, Camera, Share2, Heart, MessageCircle, Users } from 'lucide-react';

export function JoinStorySection() {
  const communityPosts = [
    {
      user: "@sarah_explores",
      image: "https://images.unsplash.com/photo-1692992258436-9e03ae4279ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMHRyYXZlbCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1NjY0MjY0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "Found the secret bench! The audio guide was RIGHT 🎧✨",
      hashtag: "#EgySafaryDiscovery",
      likes: 247,
      comments: 18
    },
    {
      user: "@marco.travels",
      image: "https://images.unsplash.com/photo-1730190202234-49dd889f0ea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNzaXZlJTIwc2hpcHMlMjBzdWV6JTIwY2FuYWx8ZW58MXx8fHwxNzU2NjQyNjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "That cannon shot tip = GAME CHANGER 📸⚓",
      hashtag: "#EgySafaryDiscovery",
      likes: 183,
      comments: 12
    },
    {
      user: "@local_lens",
      image: "https://images.unsplash.com/photo-1596351990471-65a408eff304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBzdGF0dWVzJTIwZm91bnRhaW4lMjBoaXN0b3JpY3xlbnwxfHx8fDE3NTY2NDI2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "The fountain story gave me actual chills 🌊👻",
      hashtag: "#EgySafaryDiscovery",
      likes: 312,
      comments: 24
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full animate-ping"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full font-bold mb-6">
            <Users className="h-4 w-4" />
            <span>COMMUNITY</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your Turn. 📷
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            You've seen it, you've heard it. <strong>Now show us your vision.</strong> Tag your best shots with 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold"> #EgySafaryDiscovery </span> 
            and join the community of explorers who go deeper.
          </p>
        </div>
        
        {/* Community Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {communityPosts.map((post, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <ImageWithFallback
                  src={post.image}
                  alt={`Post by ${post.user}`}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                  Featured
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Camera className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-semibold text-white">{post.user}</span>
                </div>
                
                <p className="text-gray-300 text-sm mb-3">
                  {post.caption}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-400 font-semibold">
                    {post.hashtag}
                  </span>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to be featured? ⭐
            </h3>
            
            <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
              Share your unique perspective of Ferial Garden and you might be our next featured explorer. 
              The best shots get featured on our main page!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold">
                <Instagram className="mr-2 h-5 w-5" />
                Tag #EgySafaryDiscovery
              </Button>
              
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                <Share2 className="mr-2 h-5 w-5" />
                Share Your Story
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-purple-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>2.4k explorers joined this week</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>Featured posts get 10x more views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}