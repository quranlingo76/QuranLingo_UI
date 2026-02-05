import { Brain, BookOpen, Zap } from 'lucide-react';
import { FeatureCardProps } from '../components/home/FeatureCard';

export const homeFeatures: FeatureCardProps[] = [
  {
    icon: Brain,
    iconColor: 'duo-blue',
    iconBgColor: 'duo-blue/10',
    borderHoverColor: 'duo-blue',
    title: 'Smart Learning',
    description: 'AI-powered spaced repetition system that adapts to your learning pace and reinforces weak patterns.',
  },
  {
    icon: BookOpen,
    iconColor: 'duo-green',
    iconBgColor: 'duo-green/10',
    borderHoverColor: 'duo-green',
    title: 'Root-Based Method',
    description: 'Learn high-frequency Quranic roots and patterns to comprehend thousands of words efficiently.',
  },
  {
    icon: Zap,
    iconColor: 'duo-yellow',
    iconBgColor: 'duo-yellow/10',
    borderHoverColor: 'duo-yellow',
    title: 'Gamified Experience',
    description: 'Track your progress, build streaks, and unlock achievements as you advance through your journey.',
  },
];

