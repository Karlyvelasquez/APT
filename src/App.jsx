import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './i18n/config'
import LandingPage from './pages/LandingPage'
import PresentationPage from './pages/PresentationPage'
import ConceptsPage from './pages/ConceptsPage'
import ExamplesPage from './pages/ExamplesPage'
import PreventionPage from './pages/PreventionPage'
import QuizPage from './pages/QuizPage'
import ReferencesPage from './pages/ReferencesPage'
import AnswersPage from './pages/AnswersPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/presentation" element={<PresentationPage />} />
          <Route path="/concepts" element={<ConceptsPage />} />
          <Route path="/examples" element={<ExamplesPage />} />
          <Route path="/prevention" element={<PreventionPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/references" element={<ReferencesPage />} />
          <Route path="/answers" element={<AnswersPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App