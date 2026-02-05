# QuranLingo 📖

> Master Classical Arabic through an interactive, gamified experience designed to unlock deep understanding of the Quranic text.

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-Latest-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-cyan.svg)](https://tailwindcss.com/)

## 🌟 Features

### Learning Experience
- **📚 Progressive Curriculum**: 10 carefully designed lessons covering high-frequency Quranic patterns
- **🎯 Root-Based Method**: Learn Arabic roots and patterns to comprehend thousands of words efficiently
- **🔄 Spaced Repetition System (SRS)**: AI-powered memory reinforcement that adapts to your learning pace
- **🎮 Gamified Learning**: Track progress, build streaks, and unlock achievements
- **🧠 Muallim AI Tutor**: Get instant grammar explanations and personalized learning support

### Interactive Features
- **📝 Multiple Question Types**: 
  - Multiple choice (Arabic → English)
  - Reverse translation (English → Arabic)
  - Sentence builder exercises
- **🔊 Audio Pronunciation**: Native Arabic pronunciation for all words and sentences
- **📱 Mobile Responsive**: Seamless experience on desktop, tablet, and mobile devices
- **🌍 Multi-language Support**: Available in English, Urdu, and Hindi
- **💾 Progress Tracking**: Automatic progress saving with localStorage persistence

### User Experience
- **🎨 Modern UI/UX**: Beautiful Duolingo-inspired interface with smooth animations
- **🔐 Progressive Unlocking**: Each day unlocks only after completing the previous lesson
- **⭐ Mastery System**: 5-level strength indicator for each word
- **🔖 Bookmark System**: Mark difficult words for focused review
- **📊 Analytics Dashboard**: Track your fluency percentage, streak, and total XP

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/QuranLingo.git
   cd QuranLingo/Client
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
Client/
├── components/           # React components
│   ├── home/            # Homepage components
│   ├── learning/        # Learning page components
│   ├── IntroScreen.tsx  # App intro screen
│   ├── LessonView.tsx   # Main lesson interface
│   ├── LevelButton.tsx  # Day/level selector
│   ├── Logo.tsx         # App logo
│   └── MuallimTutor.tsx # AI tutor modal
├── config/              # Configuration files
│   ├── types.ts         # TypeScript types
│   └── utils.ts         # Utility functions
├── constants/           # Curriculum data
│   ├── index.ts         # Main curriculum export
│   ├── shared.ts        # Shared constants
│   └── day*.ts          # Individual day lessons
├── contexts/            # React contexts
│   └── LanguageContext.tsx
├── data/                # Static data
│   ├── homeFeatures.ts
│   └── homeStats.ts
├── pages/               # Page components
│   ├── HomePage.tsx     # Landing page
│   └── LearningPage.tsx # Main learning interface
├── public/              # Static assets
│   └── audio/           # Arabic pronunciation files
├── services/            # External services
│   ├── AudioService.ts  # Audio playback
│   └── GeminiService.ts # AI integration
└── styles/              # Global styles
```

## 🎯 How It Works

### Learning Flow

1. **Introduction Phase**: Review all words in the lesson with:
   - Arabic text and transliteration
   - English translation
   - Audio pronunciation
   - Mastery indicators

2. **Exam Phase**: Test your knowledge with:
   - Multiple choice questions
   - Translation exercises
   - Sentence building challenges

3. **Review System**: Words are reviewed based on:
   - Strength level (0-5)
   - Time since last review
   - User-marked difficult words

### Progressive Unlocking

- ✅ Day 1 is always unlocked
- 🔒 Each subsequent day unlocks only after completing the previous day's exam
- 📈 Completed lessons remain accessible for review

### Mastery System

Words have 5 strength levels:
- **Level 0**: Never seen / Failed
- **Level 1**: 1 hour review interval
- **Level 2**: 6 hour review interval
- **Level 3**: 1 day review interval
- **Level 4**: 3 day review interval
- **Level 5**: 1 week review interval

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons

### AI & Services
- **Google Gemini AI** - Grammar explanations and sentence generation
- **Web Speech API** - Arabic text-to-speech

### State Management
- React Hooks (useState, useEffect, useMemo)
- Context API (LanguageContext)
- LocalStorage for persistence

## 📱 Responsive Design

QuranLingo is fully responsive with:
- Desktop sidebar navigation
- Mobile bottom navigation
- Touch-optimized controls
- Adaptive layouts for all screen sizes

## 🔊 Audio System

Audio pronunciation is provided for all Arabic words and sentences:
- Uses Web Speech API when available
- Fallback to pre-recorded audio files
- Organized by lesson in `/public/audio/` directory

See [AUDIO_GUIDE.md](./AUDIO_GUIDE.md) for detailed audio setup instructions.

## 🌍 Internationalization

Currently supports:
- 🇬🇧 English (default)
- 🇵🇰 Urdu
- 🇮🇳 Hindi

Language can be changed via the language selector in the lesson view.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by Duolingo's gamified learning approach
- Built with ❤️ for the Ummah
- Quranic root analysis based on traditional Arabic linguistics

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Made with dedication to help people understand the Quran** 🌙
