import React, { useMemo } from 'react';
import { Sparkles, BookOpen, Rocket, Target } from 'lucide-react';

interface SectionHeaderProps {
  sectionIndex: number;
  sectionTitle: string;
}

/**
 * Phase configuration for dynamic header content
 * Following React best practices: hoisted static data outside component
 */
const PHASE_CONFIG: Record<string, {
  phaseNumber: number;
  displayTitle: string;
  description: string;
  comprehension: string;
  bgColor: string;
  Icon: React.ElementType;
}> = {
  'Phase 1: Foundation': {
    phaseNumber: 1,
    displayTitle: 'Phase 1: Foundation',
    description: 'Master high-frequency Quranic structures and roots.',
    comprehension: '0% → 50%',
    bgColor: 'bg-duo-green',
    Icon: BookOpen
  },
  'Phase 2: Expansion': {
    phaseNumber: 2,
    displayTitle: 'Phase 2: Expansion',
    description: 'Build vocabulary through thematic word families.',
    comprehension: '50% → 65%',
    bgColor: 'bg-duo-blue',
    Icon: Rocket
  },
  'Phase 3: Mastery': {
    phaseNumber: 3,
    displayTitle: 'Phase 3: Mastery',
    description: 'Complete your Quranic vocabulary journey.',
    comprehension: '85% → 100%',
    bgColor: 'bg-[var(--color-accent-purple)]',
    Icon: Target
  }
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ sectionIndex, sectionTitle }) => {
  // Memoize phase config lookup for performance (rerender-memo pattern)
  const phaseConfig = useMemo(() => {
    return PHASE_CONFIG[sectionTitle] || {
      phaseNumber: sectionIndex + 1,
      displayTitle: sectionTitle,
      description: 'Master high-frequency Quranic structures and roots.',
      comprehension: '',
      bgColor: 'bg-duo-green',
      Icon: Sparkles
    };
  }, [sectionTitle, sectionIndex]);

  const { phaseNumber, displayTitle, description, comprehension, bgColor, Icon } = phaseConfig;

  return (
    <div className={`w-full ${bgColor} p-6 rounded-[2rem] text-white mb-8 shadow-xl border-b-8 border-black/10 relative overflow-hidden group mx-4 max-w-lg`}>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] opacity-80">
            Phase {phaseNumber}
          </h2>
          {comprehension && (
            <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded-full">
              {comprehension}
            </span>
          )}
        </div>
        <h3 className="text-3xl font-kufic font-bold mb-1 tracking-tight">{displayTitle}</h3>
        <p className="text-sm font-medium opacity-90 max-w-xs leading-relaxed">
          {description}
        </p>
      </div>
      <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:scale-110 transition-transform duration-700">
        <Icon className="w-48 h-48" />
      </div>
    </div>
  );
};

export default SectionHeader;
