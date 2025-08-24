
import type { ComponentType } from 'react';

export interface FeatureProps {
    icon: ComponentType<{className?: string}>;
    title: string;
    description: string;
}

export interface FeaturesProps {
    features: FeatureProps[];
}

export const Features = ({features}: FeaturesProps) => {

  return (
    <section id="features" className="py-20 bg-gray-200 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need to Build Your Second Brain
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Powerful features designed to capture, organize, and share your knowledge effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-gray-300 dark:bg-gray-900/50 border border-gray-400 dark:border-gray-700 rounded-xl p-8 hover:bg-gray-200/80 dark:hover:bg-gray-900/80 hover:border-blue-500/50 transition-all duration-300">
              <div className="mb-6">
                 <feature.icon className="h-12 w-12 text-blue-700 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

