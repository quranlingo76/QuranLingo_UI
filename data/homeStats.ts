import { Globe, Target, Sparkles, Trophy } from 'lucide-react';
import { StatCardProps } from '../components/home/StatCard';

export const homeStats: StatCardProps[] = [
  {
    icon: Globe,
    iconColor: 'text-duo-blue',
    value: '500+',
    label: 'Root Words',
  },
  {
    icon: Target,
    iconColor: 'text-duo-green',
    value: '80%',
    label: 'Quran Coverage',
  },
  {
    icon: Sparkles,
    iconColor: 'text-duo-yellow',
    value: 'AI',
    label: 'Powered',
  },
  {
    icon: Trophy,
    iconColor: 'text-[#a346ff]',
    value: 'Free',
    label: 'Forever',
  },
];

