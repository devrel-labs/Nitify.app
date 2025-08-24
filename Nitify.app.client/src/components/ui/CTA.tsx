import { ArrowRight, Sparkles } from 'lucide-react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export const CTA = () => {
    const navigate = useNavigate();

    return (
    <section className="py-20 bg-gradient-to-r from-gray-300 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-300 dark:to-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="h-12 w-12 text-yellow-300" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
          Ready to Build Your Nitify?
        </h2>
        
        <p className="text-xl text-slate-500 dark:text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of knowledge workers who are organizing their digital lives 
          and sharing their expertise with Nitify.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" className="group bg-white hover:bg-gray-100 dark:hover:bg-gray-900 text-blue-600 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 shadow-lg" disabled={false} text="Get Started for Free" onClick={() => navigate("/signup")} EndIcon={<ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}/>
            
            
          <button className="border-2 border-gray-400 dark:border-white/30 hover:border-black/70 text-black dark:text-white  hover:bg-white/10 px-2 py-2 rounded-xl font-semibold transition-all duration-300">
            Schedule a Demo
          </button>
        </div>
        
        <p className="text-slate-700 dark:text-blue-200 text-sm mt-6">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};
