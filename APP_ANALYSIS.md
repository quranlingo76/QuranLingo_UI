# QuranLingo: Application Analysis & Overview

## 📖 Introduction
**QuranLingo** is a sophisticated, interactive, and gamified web application designed to help users master **Classical Arabic** (Quranic Arabic). Inspired by modern language-learning platforms like Duolingo, it focuses on high-frequency Quranic patterns and vocabulary to enable users to understand the Quranic text directly.

The application transitions from a "learning" phase to a "mastery" phase using a systematic curriculum, spaced repetition, and cutting-edge AI tutoring.

---

## 🏗️ Core Architecture & Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript.
- **Build Tool**: Vite (for fast development and optimized builds).
- **Styling**: Tailwind CSS (modern, utility-first CSS).
- **Routing**: React Router DOM (managing navigation between Home and Learning interfaces).
- **State Management**: React Hooks (useState, useEffect, useMemo) and Context API (for global states like Language).
- **Persistence**: `localStorage` (storing user progress, streaks, and word mastery).

### AI & Services (The "Muallim" System)
The app integrates **Google Gemini AI** extensively through the `GeminiService`:
- **Real-time Voice Tutoring**: Uses Gemini Live API (`gemini-2.5-flash-native-audio-preview`) for bidirectional voice conversations about specific Arabic words.
- **Dynamic Exercise Generation**: Generates custom sentence-building exercises based on words the user finds difficult.
- **Grammar Explanations**: Provides instant, context-aware explanations for quiz mistakes.
- **Text-to-Speech (TTS)**: Uses Gemini's TTS capabilities to provide native-like Arabic pronunciation.

---

## 🎯 Learning Methodology

### 1. Root-Based Curriculum
The curriculum is organized into three distinct phases:
- **Phase 1: Foundation (0% → 50% Comprehension)**: Focuses on the most frequent structural words (pronouns, prepositions, etc.) that make up half of the Quran.
- **Phase 2: Expansion (50% → 85% Comprehension)**: Introduces common verbs and nouns.
- **Phase 3: Mastery (85% → 100% Comprehension)**: Advanced patterns and rare vocabulary.

### 2. Spaced Repetition System (SRS)
QuranLingo implements a professional SRS to ensure long-term retention. Each word has a **Strength Level (0-5)**:
- **Intervals**: 4 hours → 1 day → 3 days → 7 days → 30 days.
- **Smart Review**: The app automatically identifies words that are "due" for review or labeled as "weak" and generates a "Daily Pattern Boost" session.

### 3. Progressive Unlocking
To maintain a structured learning path, levels are unlocked sequentially. A user must complete the "Exam" of the current day to unlock the next.

---

## 🛠️ Key Features

### Interactive Learning View
- **Intro Phase**: Visual review of words with Arabic, transliteration, and multiple translation options (English, Urdu, Hindi).
- **Exam Phase**: Various question types including Multiple Choice, Reverse Translation, and Sentence Builders.
- **Bookmarking**: Users can mark difficult words for focused review.

### Gamification & Analytics
- **Experience Points (XP)**: Earned through lessons and exams.
- **Streaks**: Encourages daily consistency (stored as "neural streak").
- **Comprehension Percentage**: A real-time metric showing how much of the Quran the user can now understand based on their progress.

### Multi-Language Support
The app supports:
- 🇬🇧 English
- 🇵🇰 Urdu
- 🇮🇳 Hindi / Roman Urdu

---

## 📁 Project Structure Highlights

- `/components`: Modular UI components (Navigation, Sidebars, Modals).
- `/constants`: The "Brain" of the app, containing the massive curriculum dataset (Phase 1, 2, and 3).
- `/services`: Interface with external APIs (AudioService, GeminiService).
- `/contexts`: Global state management for language and settings.
- `/config`: TypeScript interfaces and utility helper functions.

---

## 🚀 Vision
QuranLingo bridges the gap between traditional Islamic scholarship and modern educational technology. By leveraging **Generative AI**, it provides a personalized "Muallim" (Teacher) for every student, making the sublime language of the Quran accessible to everyone, anywhere.
