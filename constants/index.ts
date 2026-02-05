/**
 * Constants Module - Centralized export
 * 
 * This module organizes all curriculum constants by phase.
 * Each phase has its own folder with chapters.
 * 
 * Phase 1: Foundation (0% → 50%) - 7 Chapters
 * Phase 2: Expansion (50% → 85%) - 12 Chapters
 * Phase 3: Mastery (85% → 100%) - 2 Chapters
 */

// Shared constants
export * from './shared';

// Phase 1: Foundation (7 Chapters)
export {
  PHASE_ONE_CURRICULUM
} from './phase-one';

// Phase 2: Expansion (12 Chapters)
export {
  PHASE_TWO_CURRICULUM
} from './phase-two';

// Phase 3: Mastery (2 Chapters)
export {
  PHASE_THREE_CURRICULUM
} from './phase-three';

// Import for creating full curriculum array
import { PHASE_ONE_CURRICULUM } from './phase-one';
import { PHASE_TWO_CURRICULUM } from './phase-two';
import { PHASE_THREE_CURRICULUM } from './phase-three';

/**
 * Full curriculum array (includes all phases)
 * Phase 1: Foundation (Chapters 1-7)
 * Phase 2: Expansion (Chapters 1-12)
 * Phase 3: Mastery (Chapters 1-2)
 */
export const CURRICULUM = [
  ...PHASE_ONE_CURRICULUM,
  ...PHASE_TWO_CURRICULUM,
  ...PHASE_THREE_CURRICULUM
];
