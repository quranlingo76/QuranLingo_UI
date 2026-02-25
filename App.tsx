import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LearningPage from './pages/LearningPage';
import LessonPage from './pages/LessonPage';
import AuthPage from './pages/AuthPage';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { CurriculumProvider } from './contexts/CurriculumContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <LanguageProvider>
        <CurriculumProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/learning" element={<LearningPage />} />
              <Route path="/learning/:phaseSlug/:chapterSlug" element={<LessonPage />} />
            </Routes>
          </Router>
        </CurriculumProvider>
      </LanguageProvider>
    </AuthProvider>
  );
};

export default App;
