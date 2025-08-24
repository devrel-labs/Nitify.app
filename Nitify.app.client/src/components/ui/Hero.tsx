import { ArrowRight, Play, Link, Share2 } from 'lucide-react';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
    const navigate = useNavigate();

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Your Digital
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "} Notes
            </span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Save links, YouTube videos, and thoughts. Organize your knowledge effortlessly 
            and share your Nitify with the world through shareable links.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button onClick={() => navigate("/signin")} variant='tertiary' size='lg' text="Start Building Your Nitify" className="group bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105" EndIcon={<ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />} />
            
            <Button text='Watch Demo' variant='secondary' size='lg' EndIcon={<Play className="h-5 w-5" />} className="group border border-gray-200 dark:border-gray-800 hover:border-gray-500 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-xl font-semibold transition-all duration-300 flex items-center" disabled={false} />
              
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-300/50 dark:bg-gray-950/50 backdrop-blur-sm border border-gray-400 dark:falseborder-gray-700 rounded-xl p-6 hover:bg-gray-300/70 dark:hover:bg-gray-950/70 transition-all duration-300">
              <Link className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Save Any Link</h3>
              <p className="text-gray-600 dark:text-gray-400">Instantly save websites, articles, and resources with one click</p>
            </div>
            
            <div className="bg-gray-300/50 dark:bg-gray-950/50 backdrop-blur-sm border border-gray-400 dark:border-gray-700 rounded-xl p-6 hover:bg-gray-300/70 dark:hover:bg-gray-950/70 transition-all duration-300">
              <Play className="h-8 w-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">YouTube Videos</h3>
              <p className="text-gray-600 dark:text-gray-400">Organize your favorite videos and educational content</p>
            </div>
            
            <div className="bg-gray-300/50 dark:bg-gray-950/50 backdrop-blur-sm border border-gray-400 dark:border-gray-700 rounded-xl p-6 hover:bg-gray-300/70 dark:hover:bg-gray-950/70 transition-all duration-300">
              <Share2 className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Share Your Nitify</h3>
              <p className="text-gray-600 dark:text-gray-400">Generate public links to share your knowledge with others</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

