import {Zap, Shield, Users} from 'lucide-react';
import { type FeatureProps } from '../components/ui/Features';

// hardcoded features 

export const features: FeatureProps[] = [
    {
      icon: Users,
      title: "Collaborative Brains",
      description: "Share your second Niti with teams, friends, or the world. Build knowledge together."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Access Nitify Everywhere  organizes your saved content by topic and relevance."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data is encrypted and secure. Choose what to keep private and what to share publicly."
    },
  ];
