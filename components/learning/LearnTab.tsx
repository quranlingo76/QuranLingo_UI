import React from 'react';
import LevelButton from '../LevelButton';
import SectionHeader from './SectionHeader';
import { LevelNode } from '../../config/types';

interface LearnTabProps {
  curriculum: LevelNode[];
  unlockedLevels: string[];
  completedLevels: string[];
  nextLevelId?: string;
  onStartLevel: (level: LevelNode) => void;
}

const LearnTab: React.FC<LearnTabProps> = ({
  curriculum,
  unlockedLevels,
  completedLevels,
  nextLevelId,
  onStartLevel,
}) => {
  const sections: Record<string, LevelNode[]> = {};
  curriculum.forEach(level => {
    if (!sections[level.section]) sections[level.section] = [];
    sections[level.section].push(level);
  });

  const renderPathSVG = (levelCount: number) => {
    const offsets = [0, -45, -70, -45, 0, 45, 70, 45];
    const buttonHeight = 80;
    const mb = 40;
    const rowH = buttonHeight + mb;
    const center = 200;

    let d = "";
    for (let i = 0; i < levelCount - 1; i++) {
      const x1 = center + offsets[i % 8];
      const y1 = i * rowH + (buttonHeight / 2);
      const x2 = center + offsets[(i + 1) % 8];
      const y2 = (i + 1) * rowH + (buttonHeight / 2);
      
      const cp1y = y1 + 50;
      const cp2y = y2 - 50;

      if (i === 0) d += `M ${x1} ${y1} `;
      d += `C ${x1} ${cp1y}, ${x2} ${cp2y}, ${x2} ${y2} `;
    }

    return (
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" style={{ height: levelCount * rowH }}>
        <path d={d} fill="none" stroke="var(--color-gray)" strokeWidth="8" strokeLinecap="round" />
      </svg>
    );
  };

  return (
    <div className="flex flex-col items-center">
      {Object.entries(sections).map(([sectionTitle, levels], sectionIdx) => (
        <div key={sectionIdx} className="w-full flex flex-col items-center mb-16">
          <SectionHeader sectionIndex={sectionIdx} sectionTitle={sectionTitle} />
          
          <div className="path-container">
            {renderPathSVG(levels.length)}
            {levels.map((level) => (
              <LevelButton
                key={level.id}
                level={level}
                isUnlocked={unlockedLevels.includes(level.id)}
                isCompleted={completedLevels.includes(level.id)}
                isActive={level.id === nextLevelId}
                onClick={() => onStartLevel(level)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LearnTab;

