import { useState } from 'react';
import { Menu, X} from 'lucide-react';
import { DocumentIcon } from '../../icons';
import {useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { ThemeToggle } from '../../Essentials/ThemeToggle';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-200/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-300 dark:border-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <DocumentIcon size='6' className="h-8 w-8 text-blue-500" />
        <span onClick={() => window.location.reload()} className="cursor-pointer text-xl font-bold text-gray-900 dark:text-white">Nitify</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-8">
        {["features", "how-it-works", "pricing", "about"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {section.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")}
          </a>
        ))}
      </nav>

      {/* Desktop Controls */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Theme Toggle */}
        <ThemeToggle disabled={false} />
        
        {/* // button component not suits */}
        <button onClick={() => navigate("/signin")} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
          Sign In
        </button>
        
        <Button onClick={() => navigate("/signup")} text="Get Started" variant='primary' size='md' className="" />
          
  
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden bg-gray-300 dark:bg-gray-950 border-t border-gray-400 dark:border-gray-700">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {["features", "how-it-works", "pricing", "about"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {section.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")}
            </a>
          ))}

          <div className="border-t border-gray-400 dark:border-gray-700 pt-4 pb-2">
            
            <ThemeToggle disabled={true} />

            <button onClick={() => navigate("/signin")} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Sign In
            </button>
            <button onClick={() => navigate("/signup")} className="block w-full text-left px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg mt-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
</header>

  );
};
